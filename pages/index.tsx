import type { NextPage } from 'next';
import { Layout } from '../components/layout';

const content = [
  {
    header: 'A beast behind minimalistic UI',
    description: `Don't get distracted by UI, only show the stuff you need and for rest use keyboard`,
  },
  {
    header: 'Your powertool',
    description: `Everything can be done with a keyboard's shortcut`,
  },
  {
    header: 'Developer friendly',
    description: 'App made with love by developers and for developers',
  },
  {
    header: 'Command palette you know and love',
    description:
      'Everything you can do in Direct you can do from command palette',
  },
  {
    header: 'Custom themes and looks',
    description: 'Use one of the predefined themes or create your own',
  },
  {
    header: 'More to come...',
    description: `It's just the beginning. Check our roadmap for upcomming features`,
  },
];

const Section = (props: {
  header: string;
  description: string;
  image: string;
  textPosition: 'left' | 'middle';
}) => {
  const { header, description, image, textPosition } = props;
  return (
    <section className="p-10 flex even:bg-skin-background3/50 odd:bg-skin-background2/50 justify-center items-center flex-col text-lg  h-40">
      <h1 className="font-bold text-2xl">{header}</h1>
      <p>{description}</p>
    </section>
  );
};

const Home: NextPage = () => {
  //3 colors
  return (
    <Layout>
      {/* File management. Redefined! */}
      {content.map((item, index) => (
        <Section {...item} key={index} image="" textPosition="left"></Section>
      ))}
    </Layout>
  );
};

export default Home;
