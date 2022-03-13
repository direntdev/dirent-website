import { CompositeLogo } from "./compositeLogo";

export const MainSection = () => {
  return (
    // <div className="relative overflow-hidden">
    // <div className="bg-grsay-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
    //   <div className="mx-auto max-w-7xl lg:px-8">
    <div className="text-center lg:grid lg:grid-cols-[1fr_400px] lg:gap-8 lg:text-left">
      {/* <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"> */}
      <div className="">
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">File management </span>
          <span className="block bg-clip-text pb-3 text-skin-accent text-transparent sm:pb-5">
            redefined
          </span>
        </h1>
        <p className="text-base sm:text-xl lg:text-lg xl:text-xl">
          Simple and extensible tool for everyday use that supercharges users.
          Optimize your workflows with keyboard-first navigation and manage your
          files with confidence and ease.
        </p>
        <div className="mt-10 sm:mt-12">
          <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-skin-accent focus:ring-offset-2 focus:ring-offset-gray-900"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-skin-accent/80 py-3 px-4 font-medium text-white shadow hover:bg-skin-accent  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Notify when ready
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0"> */}
      <div className="mx-auto text-center">
        {/* <div className="sm:m___ax-w-2xl mx-auto max-w-md px-4 sm:px-6 lg:max-w-none lg:px-0"> */}
        <CompositeLogo></CompositeLogo>
        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
        {/* <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                    alt=""
                  /> */}
        {/* </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
    // </div>
  );
};
