import { PlayIcon } from "@heroicons/react/solid";

export const IntroVideo = () => {
  return (
    <div className="super-shadow relative mx-auto flex w-fit flex-row overflow-hidden rounded-md">
      <video
        className="relative"
        width="640"
        height="360"
        autoPlay
        loop
        muted
        preload="none"
        poster="./thumbnail.png"
      >
        <source src="/thumbnail.mp4" type="video/mp4" />
      </video>
      <a
        href="https://www.youtube.com/watch?v=FcsEduCef5o"
        className="absolute z-10 flex h-full w-full cursor-pointer flex-row items-center justify-center hover:bg-black/25"
      >
        <div className="relative grid content-center rounded-full">
          <div className="absolute h-10 w-10 place-self-center bg-black"></div>
          <PlayIcon className="z-10 h-20 w-20 place-self-center"></PlayIcon>
        </div>
      </a>
    </div>
  );
};
