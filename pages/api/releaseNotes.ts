import type { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export const compare = (left: string, right: string) => {
  const [leftMajor, leftMinor, leftPatch] = left.split(".").map(Number);
  const [rightMajor, rightMinor, rightPatch] = right.split(".").map(Number);
  if (leftMajor > rightMajor) {
    return 1;
  } else if (leftMajor < rightMajor) {
    return -1;
  } else if (leftMinor > rightMinor) {
    return 1;
  } else if (leftMinor < rightMinor) {
    return -1;
  } else if (leftPatch > rightPatch) {
    return 1;
  } else if (leftPatch < rightPatch) {
    return -1;
  } else {
    return 0;
  }
};

export type ReleaseNotesData = {
  releases: { version: string; note: string }[];
};

const getReleaseNotes = async () => {
  const releaseNotesValue = await kv.get<ReleaseNotesData>("releaseNotes");
  return releaseNotesValue ?? { releases: [] };
};

const setReleaseNotes = async (releaseNotes: ReleaseNotesData) => {
  await kv.set("releaseNotes", JSON.stringify(releaseNotes));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    message: string;
  }>
) {
  if (req.method === "GET") {
    const { version } = req.query;
    const releaseNotes = await getReleaseNotes();
    return res.status(200).send({
      message: version
        ? JSON.stringify(
            releaseNotes.releases.find(r => r.version === version)
          ) ?? "No release notes found"
        : JSON.stringify(releaseNotes),
    });
  }
  if (req.method === "POST") {
    const { version, note } = req.body;

    const releaseNotes = await getReleaseNotes();
    const newReleaseNotes = {
      releases: [
        ...releaseNotes.releases.filter(r => r.version !== version),
        { version, note },
      ].sort((a, b) =>
        compare(b.version.replace("v", ""), a.version.replace("v", ""))
      ),
    };

    await setReleaseNotes(newReleaseNotes);
    await res.unstable_revalidate("/releaseNotes");

    return res.status(200).send({
      message: JSON.stringify(newReleaseNotes),
    });
  }
}
