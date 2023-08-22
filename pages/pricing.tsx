import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { CheckIcon } from "@heroicons/react/solid";

const tiers = [
  {
    id: "tier-free",
    href: "#",
    name: "Free",
    price: "$0",
    priceDescription: "free forever",
    button: "Get from App Store",
    buttonEnabled: true,
    features: [
      "Go to the location",
      "Command palette",
      "Copy, move, rename, and delete files and folders",
      "Duplicate nodes",
      "Create new files and folders",
      "Open files with the default/selected application",
      "Custom keybindings",
      "Customize the toolbar",
    ],
  },
  {
    id: "tier-pro",
    href: "#",
    name: "Pro",
    price: "$25",
    priceDescription: "one-time payment",
    button: "Coming soon",
    buttonEnabled: false,
    features: [
      "Everything for Free",
      "iCloud integration",
      "Undo-redo with history for file operations",
      "10 beautifully tailored themes and theme editor",
      "Enhanced path navigator",
      "Custom commands",
      "Grid view",
      "Batch rename files",
      "Plugins",
      "Archive inspection and editing",
    ],
  },
];

const PricingPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-3xl py-12 px-6 text-center">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-0 top-[200px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-1/3 top-[350px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[50px] top-[500px] h-[200px] w-[150px] bg-skin-accent/30"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <div className="section-container">
            <h2 className="section-header">Pricing</h2>
            <p className="text-xl">
              The free version is fully functional and Ad-Free. If you enjoy it
              and want more features, upgrade to the Pro version.
            </p>
          </div>
          <div className="mx-auto -mb-8 grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map(tier => (
              <div
                key={tier.id}
                className="flex flex-col justify-between rounded-2xl bg-skin-dark p-8 shadow-xl ring-1 ring-skin-accent/50 sm:p-10"
              >
                <div>
                  <span className="text-left text-3xl font-bold tracking-tight">
                    {tier.name}
                  </span>
                  <div className="bg-blue-200_ mt-2 flex items-center gap-x-4">
                    <span className="text-5xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-200">
                      {tier.priceDescription}
                    </span>
                  </div>
                  <ul role="list" className="mt-10 space-y-4 text-sm leading-6">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-skin-accent"
                          aria-hidden="true"
                        />
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`mt-8 flex h-12 w-full justify-center rounded-md py-3 px-4 text-center font-medium text-white shadow  ${
                    !tier.buttonEnabled
                      ? "cursor-default bg-gray-800"
                      : "bg-skin-accent/80 hover:bg-skin-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                  }`}
                >
                  {tier.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      http://localhost:3000/pricing#
    </Layout>
  );
};

export default PricingPage;
