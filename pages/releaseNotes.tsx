import { GetServerSideProps } from "next";
import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { ReleaseNotesData } from "./api/releaseNotes";

type ReleaseNotesPageProps = {
  releases: ReleaseNotesData["releases"];
};

const ReleaseNotesPage: NextPage = (props: ReleaseNotesData) => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-3xl py-12 px-6 text-center">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-0 top-[200px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-1/3 top-[350px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[50px] top-[500px] h-[200px] w-[150px] bg-skin-accent/30"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <div className="section-container">
            <h2 className="section-header">Roadmap</h2>
            <p className="text-xl">This roadmap is subject to change.</p>
          </div>
          <ul role="list" className="-mb-8">
            {props.releases?.map(release => (
              <li key={release.version} className="relative pb-8">
                <div className="relative flex items-start space-x-3">
                  {release.version}
                </div>
                {release.note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ReleaseNotesPage;

export const getServerSideProps: GetServerSideProps<
  ReleaseNotesData
> = async () => {
  const res = await fetch("https://dirent.dev/api/releaseNotes");
  const data = await res.json();
  const { releases } = JSON.parse(data.message);

  return {
    props: {
      releases,
    },
  };
};
