import { Layout } from "../components/layout";
import type { NextPage } from "next";

const PluginsPage: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl py-6 px-4">
        <h2 className="text-3xl font-bold">Plugins</h2>
        <p>Plugins page content</p>
      </div>
    </Layout>
  );
};

export default PluginsPage;
