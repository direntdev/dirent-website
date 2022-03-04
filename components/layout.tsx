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
          style={
            {
              // backgroundColor: '#rgb(1,0,22)',
              // backgroundImage:'linear-gradient(110deg, rgba(1,0,22,1) 0%, rgba(55,55,55,1) 100%)',
            }
          }
          className="pt-16 flex-grow bg-skin-background2 text-white"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
