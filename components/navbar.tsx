import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-3 text-white">
        <Link href="/">
          <a className="flex items-center gap-2 font-mono">
            <Image alt="" src={'/logo.png'} width={24} height={24} />
            DIRENT
          </a>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/about">
            <a className="">About</a>
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
            <a target="_blank" className="w-6 h-6 invert">
              <Image
                alt=""
                src={'/github.png'}
                className={'text-white'}
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};
