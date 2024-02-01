import { CompositeLogo } from "./compositeLogo";

export const MainSection = () => {
  return (
    <div className="text-center lg:grid lg:grid-flow-row-dense lg:grid-cols-[1fr_400px] lg:gap-8 lg:text-left">
      <div className="mx-auto w-full max-w-[400px] lg:col-start-2">
        <CompositeLogo></CompositeLogo>
      </div>
      <div className="">
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">File management</span>
          <span className="block bg-clip-text pb-3 text-skin-accent sm:pb-5">
            redefined
          </span>
        </h1>
        <p className="text-base sm:text-xl lg:text-lg xl:text-xl">
          Simple and extensible tool for everyday use that supercharges users.
          Optimize your workflows with keyboard-first navigation and manage your
          files with confidence and ease.
        </p>
        <div className="mt-10 flex items-center justify-center sm:mt-16 lg:block">
          <div className="w-fit">
            <a
              href="https://apps.apple.com/us/app/dirent/id1662008844"
              className=""
            >
              <img width={200} src="./mac-app-store.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
