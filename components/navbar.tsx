import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="https://mateusz-migas.gitbook.io/dirent-docs/">
          <a target="_blank" className="">
            Docs
          </a>
        </Link>
        <Link href="/roadmap">
          <a className="">Roadmap</a>
        </Link>
        <Link href="https://github.com/direntdev">
          <a target="_blank" className="w-6 h-6">
            <Image
              alt="/github.png"
              src={'/github.png'}
              width={24}
              height={24}
            />
          </a>
        </Link>
      </nav>
    </>
  );
};
