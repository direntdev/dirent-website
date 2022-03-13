import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { SectionWithImage } from "../components/sectionWithImage";
import { BackgroundLight } from "../components/backgroundLight";
import { routes } from "../utils/routes";

const middleSections: {
  header: string;
  description: string;
  imageSrc: string;
  href?: string;
}[] = [
  {
    header: `Cross platform`,
    description: `Dirent runs on MacOS and Windows, and will be on Linux soon. Looks similar across platforms but takes advantage of system APIs when needed.`,
    href: "https://docs.dirent.dev/guides/platform-support",
    imageSrc: "/app-all.png",
  },
  {
    header: `Command palette`,
    description: `Powerful command palette you know and love. Everything you can do in Direct is accessible from the command palette so you don't have to remember all the shortcuts.`,
    href: "https://docs.dirent.dev/guides/command-palette",
    imageSrc: "/command-palette.png",
  },
  {
    header: `Fast and secure`,
    description: `Beautiful and responsive Web UI combined with native code performance for file operations. Dirent is completely offline and no data is ever sent to the server.`,
    href: "https://docs.dirent.dev/guides/architecture",
    imageSrc: "/app-light.png",
  },
  {
    header: `Extensible and customizable`,
    description: `Modify or create your own themes, icons, and shortcuts. Define custom commands to interact with the system and other apps. Plugins system coming soon.`,
    href: "https://docs.dirent.dev/customization/custom-commands",
    imageSrc: "/extensible.png",
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute inset-0 mx-auto max-w-5xl px-6 py-12">
          <BackgroundLight className="left-0 top-[200px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-1/3 top-[350px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[50px] top-[500px] h-[200px] w-[150px] bg-skin-accent/30"></BackgroundLight>
        </div>
        {/* <div>
          Meet the file management redefined. Simple and extensible tool for
          everyday use that supercharges users. Optimize your workflows with
          keyboard-first navigation and manage your files with confidence and
          ease.
        </div> */}
        <div>
          {middleSections.map((section, index) => (
            <div
              key={index}
              className={`px-6 py-12 ${
                index % 2 === 0 ? "bg-skin-medium" : "bg-skin-light/50"
              }`}
            >
              <SectionWithImage
                className={"mx-auto max-w-5xl"}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                {...section}
              ></SectionWithImage>
            </div>
          ))}
        </div>
        <div
          className={`relative items-center space-y-3 px-6  py-12 text-center`}
        >
          <p className="text-lg">{"Want more? Check our roadmap!"}</p>
          <Link href={routes.roadmap.href}>
            <a className="text-blue-500">Learn more</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
