import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-blue-500 p-3 gap-2">
        <Link href="/">
          <a className="">Home</a>
        </Link>
        <Link href="/about">
          <a className="">about</a>
        </Link>
        <Link href="/roadmap">
          <a className="">Roadmap</a>
        </Link>
      </nav>
    </>
  );
};
