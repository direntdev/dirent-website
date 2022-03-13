import Head from "next/head";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col overflow-x-clip text-white">
      <Head>
        <title>Dirent</title>
        <meta name="description" content="Dirent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mt-16 flex-grow  bg-skin-medium">{children}</main>
      <Footer />
    </div>
  );
};
