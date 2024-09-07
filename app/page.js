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
            <ServicesCarousel
              Slides={services}
              SlidesToShow={"4"}
              Spacing={"30"}
            />
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
            <span className="font-black py-2 mx-2 px-6 bg-[var(--spectra-green-light)] rounded-full text-black">
              {" "}
              AI-driven{" "}
            </span>
            processes enhance creativity, streamline workflows, and deliver
            cutting-edge solutions tailored to your unique needs.
          </h2>
        </div>
      </section>
      <section class="projects md:pt-40 bg-black text-white">
  <div class="container mx-auto">
    <h2 class="text-6xl md:max-w-xl md:leading-[85px]">
      See some of our projects on {""}
      <svg className="inline-flex" width="228" height="74" viewBox="0 0 228 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="228" height="74" rx="37" fill="#EA4C89"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M203.568 49.159C196.052 61.3405 184.15 57.8058 180.575 55.0381C179.054 56.0251 176.386 58.1881 172.829 57.9382C165.254 57.4067 162.541 47.057 162.541 47.057C162.595 47.0984 160.284 47.8194 159.035 47.8065C159.019 50.8416 156.275 58.0919 148.868 57.9991C140.557 57.8956 138.868 46.058 138.868 46.058C138.868 46.058 138.041 47.1561 134.896 48.2496C135.054 45.918 134.939 57.6442 124.977 57.8165C117.102 57.953 114.977 45.8754 114.977 45.8754C114.977 45.8754 113.611 47.2323 110.963 47.7027C111.131 45.3329 110.858 57.8565 100.895 57.8165C94.1631 57.7897 91.8624 50.377 92.0412 49.348C92.2697 48.0367 89.7662 58.0009 83.2264 57.8457C80.5279 57.7699 78.5159 55.902 77.2535 53.4115C75.5633 55.2604 73.1098 57.8457 70.357 57.8457C65.4162 57.8457 63.2379 53.8948 63.6067 42.6104C63.6381 41.272 63.5372 40.7455 62.1454 40.5453C61.31 40.412 60.4546 40.1598 59.5494 40.0268C59.2593 40.9523 56.7987 57.5447 48.3377 57.8594C45.4992 57.9653 43.9471 55.6145 42.6725 53.8697C40.7186 56.3407 38.1393 57.9382 34.4649 57.9382C28.2407 57.9382 24 53.128 24 47.194C24 41.26 28.2407 36.4501 34.4649 36.4501C35.5654 36.4501 35.8743 36.6009 36.8797 36.8813C34.8121 18.8846 39.6949 16.0719 43.9662 16.0719C48.067 16.0719 55.0729 25.1711 45.2151 48.2513C47.4037 55.1358 52.1218 54.7465 54.3891 40.5747C54.8505 37.694 53.6167 33.8067 55.5357 33.2642C59.0442 32.2726 59.4164 35.2476 61.0611 35.7432C62.8004 36.2671 63.8157 36.2159 65.4854 36.5493C68.3386 37.082 69.4518 38.5473 69.1043 41.8108C68.687 45.9402 67.9566 51.9505 70.1831 52.6832C71.7888 53.2152 74.7203 50.032 75.2347 48.2901C75.7488 46.5483 75.8565 45.9521 75.9019 44.6747C75.9715 41.9443 76.059 39.9428 76.546 37.8779C76.7543 37.0789 76.992 36.5498 77.9375 36.5136C78.7157 36.4946 80.1386 36.2706 80.765 36.7367C81.5997 37.3364 81.4954 37.9449 81.3996 39.5465C80.4288 62.3811 87.9018 50.9819 90.1299 41.8545C89.3366 31.5336 89.8812 16.2609 96.6465 16.0048C100.165 15.8715 101.72 18.5662 101.891 20.5775C102.375 26.2581 99.6644 35.668 96.0995 41.9961C94.0621 54.9083 105.008 57.4613 106.758 47.155C103.894 45.8533 100.799 40.5842 103.318 38.0165C104.731 36.5755 110.614 38.6456 110.71 43.1608C113.596 42.423 113.981 40.8654 114.021 41.1236C113.228 30.8026 113.963 16.261 120.729 16.0049C124.247 15.8717 125.802 18.5663 125.973 20.5776C126.457 26.2582 123.747 35.6681 120.182 41.9963C118.144 54.9083 129.09 57.4616 130.84 47.1553C128.72 46.7638 124.244 41.1598 126.826 38.0166C128.207 36.337 134.068 39.83 134.724 43.3103C137.496 42.5604 137.872 41.0523 137.912 41.3061C137.119 30.9856 137.854 16.4439 144.62 16.1878C148.138 16.0546 149.693 18.7492 149.864 20.7605C150.348 26.4411 147.637 35.8512 144.072 42.1794C142.035 55.0915 152.981 57.6442 154.731 47.3378C151.818 46.8738 147.676 40.9566 151.01 37.9295C152.341 36.7199 157.429 39.8596 158.62 43.4415C160.275 43.3807 161.305 42.835 161.526 42.78C158.884 30.6639 160.851 16.1264 168.128 16.0051C172.062 15.9395 175.908 18.0381 174.22 29.565C172.609 40.5629 166.817 45.1783 166.83 45.2489C167.167 46.5664 170.139 57.5931 177.623 51.775C177.236 50.9364 176.848 50.0795 176.631 49.0418C175.391 42.9956 177.827 36.1666 184.45 35.0628C188.244 34.4305 191.818 36.1965 192.383 40.1779C193.313 46.6927 187.16 51.4107 184.82 52.4341C183.772 51.8651 194.32 58.3325 200.58 45.3714C200.943 44.6315 201.381 44.6942 201.947 45.0756C202.348 45.3452 204.628 47.4105 203.568 49.159ZM38.9924 45.5931C38.6739 44.6829 38.0202 42.6769 37.789 41.8077C36.516 40.7493 35.6073 40.5774 33.9733 40.5774C30.3419 40.5774 28.2046 43.7872 28.2046 47.2483C28.2046 50.7092 30.5331 53.9196 34.1645 53.9196C37.3115 53.9196 39.7066 51.8738 40.4374 48.9782C39.9259 47.8491 39.4185 46.8117 38.9924 45.5931ZM43.8773 20.8358C41.3257 20.8358 40.4601 26.6549 40.6281 31.6192C40.7767 36.0082 42.0595 39.8722 42.725 41.6036C42.894 41.8206 42.8626 41.6794 43.0134 41.9095C47.4438 32.6293 45.6062 20.8358 43.8773 20.8358ZM97.0107 21.0186C93.7131 20.657 93.7341 33.7906 94.1436 36.7367C95.8566 34.1172 98.8318 21.7239 97.0107 21.0186ZM121.093 21.0186C117.795 20.657 117.816 33.7906 118.226 36.7367C119.938 34.1172 122.914 21.7239 121.093 21.0186ZM144.984 21.2013C141.686 20.8397 141.707 33.9735 142.117 36.9197C143.829 34.3 146.805 21.9066 144.984 21.2013ZM168.492 20.2498C163.354 21.2362 164.551 37.6142 165.331 40.4867C171.383 32.5395 171.508 19.9512 168.492 20.2498ZM187.749 40.7168C187.488 39.6725 186.182 39.1144 185.28 39.2519C182.7 39.5888 180.198 42.6606 181.167 47.3373C181.382 48.3788 181.922 49.3375 181.913 49.3057C187.687 45.6024 188.177 42.6843 187.749 40.7168ZM78.9491 32.8986C78.2117 32.8987 77.4908 32.6898 76.8776 32.2983C76.2647 31.9067 75.7866 31.3501 75.5041 30.6989C75.2219 30.0477 75.1481 29.331 75.2921 28.6396C75.4358 27.9482 75.7909 27.3131 76.3123 26.8146C76.8334 26.3161 77.4978 25.9766 78.2209 25.8391C78.9439 25.7015 79.6938 25.7721 80.3751 26.0419C81.0563 26.3116 81.6384 26.7685 82.0482 27.3546C82.4576 27.9407 82.6763 28.6299 82.6763 29.3348C82.6763 29.8028 82.5799 30.2662 82.3926 30.6985C82.2053 31.1309 81.931 31.5238 81.5847 31.8547C81.2385 32.1856 80.8278 32.4482 80.3754 32.6272C79.9233 32.8064 79.4385 32.8986 78.9491 32.8986Z" fill="white"/>
</svg>

    </h2>
  </div>
</section>

    </main>
  );
}
