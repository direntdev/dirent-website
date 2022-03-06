import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/layout';
import type { NextPage } from 'next';

const content = [];

const Section = (props: {
  header: string;
  description: string;
  textPosition: 'right' | 'top';
  link?: string;
  children?: React.ReactNode;
}) => {
  const { header, description, link, textPosition, children } = props;
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(0,0,0,0.30) 25%, rgba(50,50,50,0.50) 100%)',
      }}
      className=" flex justify-center even:bg-skin-background3/75 odd:bg-skin-background2/75 "
    >
      <div className="justify-center items-center flex-col text-lg p-10 gap-3 flex  max-w-[700px]">
        <h1 className="font-bold text-center text-4xl">{header}</h1>
        <div
          className={`flex ${
            textPosition === 'top' ? 'flex-col' : 'flex-row-reverse'
          } gap-3`}
        >
          <p
            className={`font-thin ${
              textPosition === 'top' ? 'text-center' : ''
            }`}
          >
            {description}
          </p>
          {children}
        </div>
        {link && (
          <Link href={link}>
            <a target="_blank" className="">
              Learn more
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  //3 colors
  return (
    <Layout>
      {/* File management. Redefined! */}
      <Section
        textPosition="top"
        header="A beast behind minimalistic UI"
        description={`Don't get distracted by the UI, only show the stuff that you need and for rest use keyboard for the rest`}
      >
        <div className="bg-bslue-200 flex items-center justify-center">
          <Image width={150} height={100} src="/theme_1.png"></Image>
          <Image width={150} height={100} src="/theme_2.png"></Image>
          <Image width={150} height={100} src="/theme_3.png"></Image>
        </div>
      </Section>
      <Section
        link="https://docs.dirent.dev/fundamentals/keybindings"
        textPosition="right"
        header="Your powertool"
        description={`Every command command can be executed with a keyboard's shortcut`}
      >
        <Image width={500} height={350} src="/theme_1.png"></Image>
      </Section>
      <Section
        textPosition="top"
        header="Command palette you know and love"
        description={`Everything you can do in Direct you can do from command palette`}
      ></Section>
      <Section
        textPosition="top"
        header="Developer friendly"
        description={'App made with love by developers and for developers'}
      ></Section>
      <Section
        textPosition="top"
        header="Custom themes and looks"
        description={'Use one of the predefined themes or create your own'}
      ></Section>
      <Section
        textPosition="top"
        header="More to come..."
        description={`Check our roadmap for upcomming features`}
      ></Section>
    </Layout>
  );
};

export default Home;
