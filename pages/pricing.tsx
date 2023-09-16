import { BackgroundLight } from "../components/backgroundLight";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { CheckIcon } from "@heroicons/react/solid";

const tiers = [
  {
    id: "tier-free",
    href: "https://github.com/direntdev/dirent/releases/download/v0.5.5/Dirent-0.5.5-arm64.dmg",
    buttonText: "Download beta (Apple silicon)",
    name: "Free",
    price: "$0",
    priceDescription: "free forever",
    button: "Get from App Store",
    buttonEnabled: true,
    features: [
      [
        "File Management",
        "Copy, move, rename, duplicate, delete files/folders with precision. Quickly create new files and folders.",
      ],
      [
        "Quick Navigation",
        "Jump to open, recent, and favorite locations effortlessly.",
      ],
      [
        "Command Palette",
        "Execute functions seamlessly from a central control point.",
      ],
      [
        "Customization",
        "Choose between Light and Dark themes, personalize keybindings and toolbar.",
      ],
      [
        "Search and Filters",
        "Quickly select and filter files. Perform advanced searches using regex and more.",
      ],
      [
        "Seamless Previews",
        "Preview documents, images, videos, music, and PDFs with ease.",
      ],
      [
        "System Integration",
        "Open files/folders seamlessly in Finder, Terminal, and other system apps. Compress and extract archives.",
      ],
    ],
  },
  {
    id: "tier-pro",
    href: "#",
    buttonText: "Coming soon",
    name: "Pro",
    price: "$25",
    priceDescription: "one-time payment",
    button: "Coming soon",
    buttonEnabled: false,
    features: [
      ["Everything in Free", "Retain the functionality of the Free version."],
      [
        "Custom Commands",
        "Craft your own commands for seamless app integration or tailored tasks.",
      ],
      [
        "iCloud Integration",
        "Access and manage your files across devices with iCloud integration.",
      ],
      [
        "Undo-Redo with History",
        "Navigate through your file operations with the power of undo-redo.",
      ],
      [
        "More Themes and Theme Editor",
        "Personalize with more themes and a theme editor.",
      ],
      ["Plugin Support", "Expand functionality through integrated plugins."],
      [
        "Smart Batch Rename Files",
        "Utilize intelligent renaming for multiple files in one go.",
      ],
      [
        "Archive Inspection and Editing",
        "Inspect and edit archives just like regular directories.",
      ],
    ],
  },
];

const PricingPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-5xl py-12 px-6 text-center">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-0 top-[200px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-1/3 top-[350px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20"></BackgroundLight>
          <BackgroundLight className="left-[50px] top-[500px] h-[200px] w-[150px] bg-skin-accent/30"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <div className="section-container flex flex-col items-center justify-center">
            <h2 className="section-header">Pricing</h2>
            <p className="max-w-md text-xl lg:max-w-4xl">
              The free version is fully functional and Ad-Free. For enhanced
              features, seamless productivity, and an extended toolkit, upgrade
              to Pro.
            </p>
          </div>
          <div className="mx-auto -mb-8 grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map(tier => (
              <div
                key={tier.id}
                className="flex flex-col justify-between rounded-2xl bg-skin-dark p-8 shadow-xl ring-1 ring-skin-accent/50 sm:p-10"
              >
                <div>
                  <span className="text-left text-4xl font-bold tracking-tight text-skin-accent">
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
                    {tier.features.map(([name, description]) => (
                      <li key={name} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-skin-accent"
                          aria-hidden="true"
                        />
                        <div>
                          <div className="text-left font-bold">{name}</div>
                          <div className="text-left text-sm text-gray-300">
                            {description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`mt-8 flex h-12 w-full justify-center rounded-md py-3 px-4 text-center font-medium text-white shadow  ${
                    !tier.buttonEnabled
                      ? "cursor-default bg-gray-500"
                      : "bg-skin-accent/80 hover:bg-skin-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                  }`}
                >
                  <span>{tier.buttonText}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
