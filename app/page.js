import Image from "next/image";
import Logo from "@/public/Vector.svg";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

export default function Home() {
  return (
    <main className="container mx-auto md:p-4 hero">
      <section className="hero place-content-center custom-height-hero">
        <div className="">
          <div className="bg-white rounded-full py-3 px-8 inline-flex items-center md:gap-2.5 shadow-lg">
            <span className="text-black">We are available for work</span>
            <div className="dot bg-[var(--spectra-green-extra-light)] w-3 h-3 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-8xl md:max-w-prose uppercase leading-[104.5px] tracking-[-0.01em] md:mt-8">
        Full service design and development agency
        </h1>
        <p className="text-2xl text-[var(--text-dark-green)] leading-8 md:mt-4">
        We blend creativity with cutting-edge technology to deliver future-driven solutions.
        </p>
        <div className="md:mt-20 flex gap-4 items-center buttons-container">
          <PrimaryButton isCta={true}>Lets get a project started</PrimaryButton>
          <SecondaryButton>Explore our work</SecondaryButton>
        </div>
      </section>
    </main>
  );
}

