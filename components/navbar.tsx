import Image from "next/image";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { routes } from "../utils/routes";

const navbarButtons = [
  routes.roadmap,
  routes.pricing,
  routes.releaseNotes,
  routes.about,
  routes.docs,
];

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed inset-x-0 z-10 bg-skin-dark">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <a className="flex items-center gap-2 font-mono text-2xl">
                    <Image
                      alt="Dirent"
                      src={"/logo.png"}
                      width={24}
                      height={24}
                    />
                    <span className="font-mono font-bold uppercase text-white">
                      dirent
                    </span>
                  </a>
                </Link>
              </div>
              {/* Button */}
              <div className="hidden space-x-4 sm:ml-6 sm:block">
                {navbarButtons.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navbarButtons.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
