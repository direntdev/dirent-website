import Link from 'next/link';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <a className="">Docs</a>
        </Link>
        <Link href="/roadmap">
          <a className="">Roadmap</a>
        </Link>
        <Link href="/roadmap">
          <a className="w-6 h-6">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </Link>
      </nav>
    </>
  );
};
