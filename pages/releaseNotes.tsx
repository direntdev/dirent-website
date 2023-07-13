import { GetServerSideProps } from "next";
import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { ReleaseNotesData } from "./api/releaseNotes";
import ReactMarkdown from "react-markdown";

const ReleaseNotesPage: NextPage<ReleaseNotesData> = (
  props: ReleaseNotesData
) => {
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
            <h2 className="section-header">Release notes</h2>
          </div>
          <ul role="list" className="-mb-8 flex flex-col gap-20">
            {props.releases?.map(release => (
              <li key={release.version}>
                <p className="text-2xl font-bold">{release.version}</p>
                <ReactMarkdown
                  className="text-left"
                  components={{
                    ul({ className, children }) {
                      return (
                        <ul
                          className={`${className} list-outside list-disc pl-4`}
                        >
                          {children}
                        </ul>
                      );
                    },
                    code({ className, children }) {
                      return (
                        <code
                          className={`${className} bg-skin-inactive px-small rounded-sm`}
                        >
                          {children}
                        </code>
                      );
                    },
                    h2({ children }) {
                      return (
                        <h2 className="border-skin-inactive pt-big border-b pb-px text-lg font-bold">
                          {children}
                        </h2>
                      );
                    },
                  }}
                >
                  {release.note}
                </ReactMarkdown>
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
