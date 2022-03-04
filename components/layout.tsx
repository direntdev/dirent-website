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
      <main
        style={{
          backgroundColor: '#rgb(1,0,22)',
          backgroundImage:
            'linear-gradient(110deg, rgba(1,0,22,1) 0%, rgba(55,55,55,1) 100%)',
        }}
        className="pt-16 flex-grow bg-skin-background2 text-white"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

//background-color: #010024;
//background-image: linear-gradient(108deg, #010024 0%, #2d0a4a 82%);

// background-color: #0900de;
// background-image: linear-gradient(108deg, #0900de 0%, #9000ff 50%, #201047 100%);

//background-color: #8EC5FC;
//background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
