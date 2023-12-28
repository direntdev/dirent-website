import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import type { NextPage } from "next";

const PrivacyPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-5xl py-12 px-6">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-[100px] top-[100px] h-[200px] w-[350px] -rotate-[5deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[600px] top-[300px] h-[200px] w-[350px] rotate-[25deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[200px] top-[400px] h-[200px] w-[350px] -rotate-[15deg] bg-skin-accent/20"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <h2 className="section-header">Privacy Policy for Dirent</h2>
          <h1 className="text-xl font-bold">Effective Date: 2023-12-28</h1>
          <h2 className="font-bold">Introduction</h2>
          <p>
            We respect your privacy. Our app is designed for offline use and
            does not share your data.
          </p>
          <h2 className="font-bold">Data Collection and Use</h2>
          <p>
            The only thing that we store is the app state in a local file to be
            able to restore it to where you left off after you restart the app.
            This includes the currently open folder paths and selected file
            names, the history of visited folders (for the Navigate to Recent
            feature), and the user settings. This data is stored on your device
            and is not shared.
          </p>
          <h2 className="font-bold">Changes to This Policy</h2>
          <p>
            We may update this policy and will notify you of significant
            changes.
          </p>
          <h2 className="font-bold"> Contact Information</h2>
          <p>For any questions, please contact us at contact@dirent.dev</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
