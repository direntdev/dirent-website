import { Navbar } from "./navbar";
import { Footer } from "./footer";
import Head from "next/head";

const BackgroundLamp = (props: { className: string }) => {
  return (
    <div
      style={
        {
          // backgroundImage:
          // 'linear-gradient(90deg, rgba(100,100,100,0.20) 25%, rgba(255,255,255,0.20) 100%)',
        }
      }
      className={`h-[600px] w-[400px] bg-white/10  blur-2xl ${props.className}`}
    ></div>
  );
};

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
