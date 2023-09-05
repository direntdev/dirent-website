import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import { RoadmapIcon } from "../components/roadmapIcon";
import type { NextPage } from "next";

const timeline: {
  content: string;
  href: string;
  date: string;
  type: "done" | "milestone" | "planned" | "maybe";
}[] = [
  {
    content: "Alpha running on Windows and MacOS",
    href: "",
    date: "Q3 2021",
    type: "done",
  },
  {
    content: "Custom keyboard shortcuts",
    href: "",
    date: "Q1 2022",
    type: "done",
  },
  {
    content: "Command palette",
    href: "",
    date: "Q1 2022",
    type: "done",
  },
  {
    content: "Preserve app state",
    href: "",
    date: "Q2 2022",
    type: "done",
  },
  {
    content: "Custom toolbar",
    href: "",
    date: "Q2 2022",
    type: "done",
  },
  {
    content: "Quick Navigation",
    href: "",
    date: "Q2 2022",
    type: "done",
  },
  {
    content: "Custom Commands",
    href: "",
    date: "Q3 2022",
    type: "done",
  },
  {
    content: "Dark and light themes",
    href: "",
    date: "Q3 2022",
    type: "done",
  },
  {
    content: "Beta release for MacOS",
    href: "#",
    date: "Q1 2023",
    type: "milestone",
  },
  {
    content: "Managing archives",
    href: "#",
    date: "Q2 2023",
    type: "done",
  },
  {
    content: "Preview documents, images, videos, music, and PDFs",
    href: "",
    date: "Q2 2023",
    type: "done",
  },
  {
    content: "Advanced search popup with regex expressions",
    href: "",
    date: "Q2 2023",
    type: "done",
  },
  {
    content: "Drag and drop files from and into the app",
    href: "#",
    date: "Q3 2023",
    type: "done",
  },
  {
    content: "MVP release for MacOS",
    href: "#",
    date: "Q4 2023",
    type: "planned",
  },
  {
    content: "MVP release for Windows",
    href: "#",
    date: "Q1 2024",
    type: "planned",
  },
  {
    content: "Theme editor",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "Undo-Redo with History",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "Plugin Support",
    href: "#",
    date: "Planned",
    type: "planned",
  },
  {
    content: "iCloud Integration",
    href: "#",
    date: "Planned",
    type: "planned",
  },
];

const RoadmapPage: NextPage = () => {
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
