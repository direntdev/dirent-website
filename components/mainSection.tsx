import { CompositeLogo } from "./compositeLogo";
import { OverlayScroll } from "./OverlayScroll";

export const MainSection = () => {
  return (
    <div className="text-center lg:grid lg:grid-flow-row-dense lg:grid-cols-[1fr_400px] lg:gap-8 lg:text-left">
      <div className="mx-auto w-full max-w-[400px] lg:col-start-2">
        <CompositeLogo></CompositeLogo>
      </div>
      <div className="h-[500px] w-96 bg-red-200">
        <OverlayScroll
          size={15}
          renderThumb={(ref, style, isDraggingThumb) => (
            <div
              ref={ref as any}
              className={`bg-blue-200 transition-colors duration-150 ease-in-out  ${
                isDraggingThumb ? "bg-blue-900" : "hover:bg-blue-500"
              }`}
              style={{ ...style, borderRadius: 10 }}
            ></div>
          )}
          renderTrack={(ref, style) => (
            <div
              ref={ref as any}
              style={{ ...style, backgroundColor: "rgba(255, 0, 0, 0.5)" }}
            ></div>
          )}
        >
          <div className="">
            {Array.from({ length: 150 }, (_, i) => (
              <div
                key={i}
                className="_border flex h-[20px] flex-row justify-between bg-blue-500"
              >
                <div>
                  Dupfsefsefsefes fesf esfj eslkfjse lkfjsel kfejs lkfja
                </div>
              </div>
            ))}
          </div>
        </OverlayScroll>
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
          <a
            href="https://github.com/direntdev/dirent/releases"
            type="submit"
            className="flex h-12 w-fit rounded-md bg-skin-accent/80 py-3 px-4 font-medium text-white shadow hover:bg-skin-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 "
          >
            <span>Download beta</span>
          </a>
        </div>
      </div>
    </div>
  );
};
