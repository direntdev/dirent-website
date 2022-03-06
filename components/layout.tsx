import { Navbar } from './navbar';
import { Footer } from './footer';
import Head from 'next/head';

// const BackgroundLamp = (props: { className: string }) => {
//   return (
//     <div
//       style={
//         {
//           // backgroundImage:
//           // 'linear-gradient(90deg, rgba(100,100,100,0.20) 25%, rgba(255,255,255,0.20) 100%)',
//         }
//       }
//       className={`w-[400px] h-[600px] bg-white/10  blur-2xl ${props.className}`}
//     ></div>
//   );
// };

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Dirent</title>
        <meta name="description" content="Dirent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative flex flex-col overflow-auto h-full">
        <main
          // style={{
          //   backgroundColor: '#rgb(1,0,0)',
          //   backgroundImage:
          //     'linear-gradient(90deg, rgba(0,0,0,0.30) 25%, rgba(255,255,255,0.30) 100%)',
          // }}
          className="flex-grow text-white"
        >
          {children}
        </main>
        <Footer />
        {/* <div
          id="wrapper"
          className="absolute flex flex-col items-center overflow-clip"
        >
          <BackgroundLamp className="mr-[300px] rotate-45"></BackgroundLamp>
          <BackgroundLamp className="ml-[300px] mt-[600px] -rotate-45"></BackgroundLamp>
          <BackgroundLamp className="mr-[300px] mt-[1200px] rotate-45"></BackgroundLamp>
        </div> */}
      </div>
    </div>
  );
};
