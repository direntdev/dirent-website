import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { BackgroundLight } from "../components/backgroundLight";

const PluginsPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-5xl py-12 px-6 text-center">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-[000px] top-[000px] h-[200px] w-[350px] -rotate-[5deg] bg-skin-accent/20"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <div className="section-container">
            <h2 className="section-header">Plugins</h2>
            <p className="text-xl">
              Plugins are not ready yet. Stay tuned for Q3 2022!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PluginsPage;
