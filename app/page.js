import Image from "next/image";
import Logo from "@/public/Vector.svg";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import FeatureBlock from "@/components/Boxes/FeatureBlock";

export default function Home() {
  const features = [
    {
      icon: "/path/to/icon1.png",
      title: "User-Centric Approach",
      description:
        "We prioritize creating products that users truly love and enjoy using.",
    },
    {
      icon: "/path/to/icon2.png",
      title: "Versatile Expertise",
      description: "From landing pages to complex e-commerce and mobile apps.",
    },
    {
      icon: "/path/to/icon3.png",
      title: "Rapid Delivery",
      description: "Our process ensures quick turnaround without compromise.",
    },
    {
      icon: "/path/to/icon4.png",
      title: "Affordable Excellence",
      description: "High-quality design solutions at competitive prices.",
    },
  ];
  return (
    <main className="">
      <section className="container mx-auto p-8 place-content-center custom-height-hero overflow-hidden">
        <div className="">
          <div className="bg-white rounded-full py-3 px-8 inline-flex items-center gap-2.5 shadow-lg">
            <span className="text-black">We are available for work</span>
            <div className="dot bg-[var(--spectra-green-extra-light)] w-3 h-3 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-8xl max-w-prose uppercase leading-[104.5px] tracking-[-0.01em] mt-8">
          Full service design and development agency
        </h1>
        <p className="text-2xl text-[var(--text-dark-green)] leading-8 mt-4">
          We blend creativity with cutting-edge technology to deliver
          future-driven solutions.
        </p>
        <div className="mt-20 flex gap-4 items-center">
          <PrimaryButton isCta={true}>Lets get a project started</PrimaryButton>
          <SecondaryButton>Explore our work</SecondaryButton>
        </div>
      </section>
      <section className="what-makes-us-diff bg-[var(--background-black-light)] rounded-t-[64px] section-padding">
        <div className="container mx-auto ">
          <h6 className="uppercase text-xl pb-4">What makes us different</h6>
          <h2 className="text-5xl leading-[68px] pb-20">
            We aim to empower small to mid-sized businesses by creating
            captivating mobile apps, eCommerce platforms, and landing product
            pages that drive success and user satisfaction.
          </h2>
          <hr />
          <div className="flex flex-row mt-28">
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
