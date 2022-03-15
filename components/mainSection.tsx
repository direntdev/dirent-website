import { CompositeLogo } from "./compositeLogo";
import { FormEvent, useState } from "react";

export const MainSection = () => {
  const [email, setEmail] = useState("");
  const [subscribeResult, setSubscribeResult] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("api/mailingList", {
      method: "PUT",
      body: JSON.stringify({
        email,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setSubscribeResult(response.message);
        setEmail("");
      })
      .catch(err => {
        setSubscribeResult(err);
      });
  };

  return (
    <div className="text-center lg:grid lg:grid-flow-row-dense lg:grid-cols-[1fr_400px] lg:gap-8 lg:text-left">
      <div className="mx-auto w-[400px] lg:col-start-2">
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
        <div className="mt-10 sm:mt-12">
          <form
            onSubmit={handleSubmit}
            className="sm:mx-auto sm:max-w-xl lg:mx-0"
          >
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required={true}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
            <div className="bsg-blue-50 mt-4 h-6 sm:mt-0 sm:ml-3 sm:text-left">
              {subscribeResult}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
