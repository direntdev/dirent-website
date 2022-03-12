import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import roadmapContent from './roadmap.json';

type RoadmapEntry = {
  icon: 'feature';
  title: string;
  description: string;
};

const roadmapData = roadmapContent as RoadmapEntry[];

const RoadmapItem = (props: { entry: RoadmapEntry }) => {
  return <div>{props.entry.title}</div>;
};

const RoadmapPage: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center p-10">
        <div className="flex flex-col">
          {roadmapData.map((entry, index) => (
            <div key={index}>
              <RoadmapItem entry={entry}></RoadmapItem>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RoadmapPage;
