import { Layout } from '../components/layout';
import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold">About</h2>
      <p>About page content</p>
    </Layout>
  );
};

export default AboutPage;
