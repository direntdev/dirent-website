import Image from "next/image";
import Link from "next/link";
import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import { MainSection } from "../components/mainSection";
import { routes } from "../utils/routes";
import { SectionWithImage } from "../components/sectionWithImage";
import type { NextPage } from "next";

const middleSections: {
  header: string;
  description: string;
  imageSrc: string;
  href?: string;
}[] = [
  {
    header: `Cross platform`,
    description: `Dirent is already operational on MacOS and is coming soon to Windows. It offers a consistent user experience across different operating systems while seamlessly leveraging native system APIs.`,
    href: "https://docs.dirent.dev/guides/platform-support",
    imageSrc: "/app-all.png",
  },
  {
    header: `Command Palette`,
    description: `Experience the robust command palette you've come to appreciate. Every function within Dirent is easily accessible via the command palette, eliminating the need to memorize shortcuts.`,
    href: "https://docs.dirent.dev/guides/command-palette",
    imageSrc: "/command-palette.png",
  },
  {
    header: `Fast and Secure`,
    description: `Enjoy a visually appealing, responsive Web UI that works in tandem with high-performance native code for file management. Rest assured, Dirent operates entirely offline; your data never leaves your device.`,
    href: "https://docs.dirent.dev/guides/architecture",
    imageSrc: "/secure.png",
  },
  {
    header: `Configurable and Extensible`,
    description: `Personalize Dirent by designing your own themes and keyboard shortcuts. Implement custom commands for unique system interactions and app integration. Stay tuned for our upcoming plugin system.`,
    href: "https://docs.dirent.dev/customization/custom-commands",
    imageSrc: "/extensible.png",
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-5xl px-6 py-12">
          <BackgroundLight className="left-0 top-[200px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-1/3 top-[350px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[50px] top-[500px] h-[200px] w-[150px] bg-skin-accent/30"></BackgroundLight>
        </div>
        <div className="mx-auto max-w-5xl px-6 py-12">
          <MainSection></MainSection>
        </div>
        <div>
          {middleSections.map((section, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-skin-light/50" : "bg-skin-medium"
              }`}
            >
              <SectionWithImage
                className={"mx-auto max-w-5xl px-6 py-12"}
                imagePosition={index % 2 === 0 ? "right" : "left"}
                {...section}
              ></SectionWithImage>
            </div>
          ))}
        </div>
        <div
          className={`relative items-center space-y-3 px-6 py-12 text-center`}
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
