import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { RoadmapIcon } from "../components/roadmapIcon";
import { BackgroundLight } from "../components/backgroundLight";

const timeline: {
  content: string;
  href: string;
  date: string;
  type: "done" | "milestone" | "planned" | "maybe";
}[] = [
  {
    content: "Core running on Windows and MacOS",
    href: "",
    date: "Q3 2021",
    type: "done",
  },
  {
    content: "Custom keyboard shortcuts",
    href: "",
    date: "Q3 2021",
    type: "done",
  },
  {
    content: "Command palette",
    href: "",
    date: "Q3 2021",
    type: "done",
  },
  {
    content: "Preserve app state",
    href: "",
    date: "Q4 2021",
    type: "done",
  },
  {
    content: "Custom toolbar icons",
    href: "",
    date: "Q4 2021",
    type: "done",
  },
  {
    content: "Custom user commands to open external apps",
    href: "",
    date: "Q4 2021",
    type: "done",
  },
  {
    content: "Dark and light themes",
    href: "",
    date: "Q1 2022",
    type: "done",
  },
  {
    content: "MVP Release for Windows and MacOS",
    href: "#",
    date: "Q2 2022",
    type: "milestone",
  },
  {
    content: "Quick launch popup",
    href: "#",
    date: "Q2 2022",
    type: "planned",
  },
  {
    content: "Theme editor",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "Welcome page with quick tutorial",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "Advanced search popup with regex expressions",
    href: "#",
    date: "Planned",
    type: "planned",
  },

  {
    content: "Plugins",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "Managing archives",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "Advanced path selector",
    href: "#",
    date: "Unknown",
    type: "maybe",
  },
  {
    content: "Command line parameters",
    href: "#",
    date: "Unknown",
    type: "maybe",
  },
  {
    content: "Drag and drop files from and into the app",
    href: "#",
    date: "Unknown",
    type: "maybe",
  },
  {
    content: "Export current list of files to csv",
    href: "#",
    date: "Unknown",
    type: "maybe",
  },
];

const RoadmapPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-5xl py-12 px-6 text-center">
        <div className="absolute inset-0">
          <BackgroundLight className="left-0 top-[200px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-1/3 top-[350px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[50px] top-[500px] h-[200px] w-[150px] bg-skin-accent/30"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-skin-accent sm:text-4xl">
              Roadmap
            </h2>
            <p className="text-xl">This roadmap is subject to change.</p>
          </div>
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={eventIdx}>
                <div className="relative pb-8">
                  {/* Line between */}
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-white"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={
                          "flex h-8 w-8 items-center justify-center rounded-full bg-white"
                        }
                      >
                        <RoadmapIcon type={event.type} />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1">
                      <div>
                        <p className="text-left">{event.content}</p>
                      </div>
                      <div className="whitespace-nowrap text-right">
                        <p className="text-skin-accent">{event.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default RoadmapPage;
