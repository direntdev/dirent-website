import { Navbar } from './navbar';
import { Footer } from './footer';
import Head from 'next/head';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-red-500 h-full">
      <Head>
        <title>Dirent</title>
        <meta name="description" content="Dirent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-full flex-1 bg-blue-200">{children}</main>
      <Footer />
    </div>
  );
};
