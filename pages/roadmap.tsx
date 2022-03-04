import type { NextPage } from 'next';
import { Layout } from '../components/layout';

type RoadmapEntry = {
  icon: 'feature';
  title: string;
  description: string;
};

const roadmap: RoadmapEntry[] = [
  {
    icon: 'feature',
    title: 'Quick launch',
    description: 'Feature description 1',
  },
  { icon: 'feature', title: 'Feature 2', description: 'Feature description 2' },
  { icon: 'feature', title: 'Feature 3', description: 'Feature description 3' },
];

const RoadmapEntry = (props: { entry: RoadmapEntry }) => {
  return <div>{props.entry.title}</div>;
};

const RoadmapPage: NextPage = () => {
  return (
    <Layout>
      <div>
        {roadmap.map((entry, index) => (
          <div key={index}>
            <RoadmapEntry entry={entry}></RoadmapEntry>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default RoadmapPage;
