import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { BackgroundLight } from "../components/backgroundLight";

const TermsPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-5xl py-12 px-6">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-[200px] top-[0px] h-[200px] w-[350px] -rotate-[45deg] bg-skin-accent/20"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <h2 className="section-header">Terms of Service</h2>
          <p>Nothing here yet.</p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
