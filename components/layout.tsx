import { Navbar } from './navbar';
import { Footer } from './footer';
import Head from 'next/head';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Dirent</title>
        <meta name="description" content="Dirent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col overflow-auto h-full">
        <main
          style={{
            // backgroundColor: '#rgb(1,0,0)',
            backgroundImage:
              'linear-gradient(90deg, rgba(0,0,0,0.30) 25%, rgba(255,255,255,0.30) 100%)',
          }}
          className="flex-grow bg-skin-background2 text-white"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
