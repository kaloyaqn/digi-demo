import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import FeatureBlock from "@/components/Boxes/FeatureBlock";
import ServiceCard from "@/components/Boxes/ServiceCard";

import Marquee from "react-fast-marquee";
import InfiniteScrollRow from "@/components/Boxes/InfiniteScrollRow";
import ServicesCarousel from "@/components/Carousel/ServicesCarousel";

//snimki

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

  const services = [
    {
      icon: "/images/services/product-design.png",
      title: "Product Design",
      description:
        "We prioritize creating products that users truly love and enjoy using.",
      tools: ["Figma", "Miro"],
    },
    {
      icon: "/images/services/ui-ux.png",
      title: "Versatile Expertise",
      description: "From landing pages to complex e-commerce and mobile apps.",
      tools: ["Figma"], 
    },
    {
      icon: "/images/services/react-development.png",
      title: "Rapid Delivery",
      description: "Our process ensures quick turnaround without compromise.",
      tools: ["Figma"], 
    },
    {
      icon: "/images/services/ui-ux.png",
      title: "Versatile Expertise",
      description: "From landing pages to complex e-commerce and mobile apps.",
      tools: ["Miro"], 
    },
    {
      icon: "/path/to/icon4.png",
      title: "Affordable Excellence",
      description: "High-quality design solutions at competitive prices.",
      tools: ["Figma"], 
    },
    {
      icon: "/path/to/icon4.png",
      title: "Affordable Excellence",
      description: "High-quality design solutions at competitive prices.",
      tools: ["Figma"], 
    },
  ];

  return (
    <main className="overflow-x-hidden">
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
      <section className="specializations bg-[var(--background-black)] section-padding md:pb-28">
        <div className="container mx-auto">
          <div className="flex justify-between items-end w-full pb-20">
            <h6 className="uppercase text-xl">Specializations</h6>
            <h2 className="text-5xl max-w-[900px] leading-[68px] text-right">
              We specialize in delivering high-quality solutions with fast
              turnaround times.
            </h2>
          </div>
          <hr />
          <div class="w-screen pt-20">     
              <ServicesCarousel Slides={services} SlidesToShow={"4"} Spacing={"15"}/>
          </div>
        </div>
      </section>
      <section className="technologies relative md:pt-12">
        <div className="container mx-auto">
          <h2 className="text-5xl leading-[68px] md:max-w-3xl">
            Cutting-edge technology implemented in your next product
          </h2>
          <div className="flex items-center justify-between md:pt-16">
            <h3 className="text-3xl md:max-w-2xl opacity-45">
              We use innovative technologies to ensure stability and usability
              in your apps.
            </h3>
            <PrimaryButton isCta={true}>
              Lets get a project started
            </PrimaryButton>
          </div>
          <hr className="md:my-20" />
        </div>
        <div className="bg-circle-image md:pb-40">
          <InfiniteScrollRow />
        </div>
      </section>
      <section className="ai-driven bg-[var(--background-black-light)] rounded-t-[64px] md:pt-40 md:pb-36">
        <div className="container mx-auto">
            <img src="./images/ai-icon.svg" alt="Ai driven process" />
            <h2 className="text-5xl md:max-w-6xl md:leading-[85px] md:mt-10">
            Our 
            <span className="font-black py-2 mx-2 px-6 bg-[var(--spectra-green-light)] rounded-full text-black"> AI-driven </span>
            processes enhance creativity, streamline workflows, and deliver cutting-edge solutions tailored to your unique needs.
            </h2>
        </div>
      </section>
    </main>
  );
}
