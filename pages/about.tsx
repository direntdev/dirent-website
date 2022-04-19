import { BackgroundLight } from '../components/backgroundLight';
import { Layout } from '../components/layout';
import { Person } from '../components/person';
import type { NextPage } from "next";

const people = [
  {
    name: "Migas Mateusz",
    role: "Founder",
    imageUrl:
      "https://avatars.githubusercontent.com/u/54471371?s=400&u=f60177433b8ad5b15b423d195527f0f9be8ec066&v=4",
  },
];

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative mx-auto max-w-5xl py-12 px-6 text-center">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundLight className="left-[100px] top-[100px] h-[200px] w-[350px] -rotate-[5deg] bg-skin-accent/20"></BackgroundLight>
        </div>
        <div className="space-y-8">
          <div className="section-container">
            <h2 className="section-header">Our Team</h2>
            <p className="text-xl">
              We are a small team but we are passionate about the software that
              we are building.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map(person => (
              <Person key={person.name} {...person} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
