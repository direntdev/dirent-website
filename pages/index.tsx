import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/layout";
import type { NextPage } from "next";

const Section = (props: {
  header: string;
  description: string;
  textPosition: "right" | "top";
  link?: string;
  children?: React.ReactNode;
}) => {
  const { header, description, link, textPosition, children } = props;
  return (
    <section className=" flex justify-center odd:bg-skin-medium/75 even:bg-skin-light/75 ">
      <div className="flex max-w-[700px] flex-col items-center justify-center gap-3 p-10  text-lg">
        <h1 className="text-center text-4xl font-bold">{header}</h1>
        <div
          className={`flex ${
            textPosition === "top" ? "flex-col" : "flex-row-reverse"
          } gap-3`}
        >
          <p
            className={`font-thin ${
              textPosition === "top" ? "text-center" : ""
            }`}
          >
            {description}
          </p>
          {children}
        </div>
        {link && (
          <Link href={link}>
            <a target="_blank" className="">
              Learn more
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

// const Home: NextPage = () => {
//   //3 colors
//   return (
//     <Layout>
//       <Section
//         textPosition="top"
//         header="A beast behind minimalistic UI"
//         description={`Don't get distracted by the UI, only show the stuff that you need and for rest use keyboard for the rest`}
//       >
//         <div className="bg-bslue-200 flex items-center justify-center">
//           <Image width={150} height={100} src="/theme_1.png"></Image>
//           <Image width={150} height={100} src="/theme_2.png"></Image>
//           <Image width={150} height={100} src="/theme_3.png"></Image>
//         </div>
//       </Section>
//       <Section
//         link="https://docs.dirent.dev/fundamentals/keybindings"
//         textPosition="right"
//         header="Your powertool"
//         description={`Every command command can be executed with a keyboard's shortcut`}
//       >
//         <Image width={500} height={350} src="/theme_1.png"></Image>
//       </Section>
//       <Section
//         textPosition="top"
//         header="Command palette you know and love"
//         description={`Everything you can do in Direct you can do from command palette`}
//       ></Section>
//       <Section
//         textPosition="top"
//         header="Developer friendly"
//         description={"App made with love by developers and for developers"}
//       ></Section>
//       <Section
//         textPosition="top"
//         header="Custom themes and looks"
//         description={"Use one of the predefined themes or create your own"}
//       ></Section>
//       <Section
//         textPosition="top"
//         header="More to come..."
//         description={`Check our roadmap for upcomming features`}
//       ></Section>
//     </Layout>
//   );
// };

// export default Home;

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  return (
    <div
      style={{
        width: "1000px",
        height: "1000px",
        backgroundColor: "#DFDBE5",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M5 3.59L1.46.05.05 1.46 3.59 5 .05 8.54l1.41 1.41L5 6.41l3.54 3.54 1.41-1.41L6.41 5l3.54-3.54L8.54.05 5 3.59zM17 2h24v2H17V2zm0 4h24v2H17V6zM2 17h2v24H2V17zm4 0h2v24H6V17z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      xxx
    </div>
  );
}
