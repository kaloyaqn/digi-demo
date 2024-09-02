import Image from "next/image";
import React from "react";

const toolIcons = {
  Figma: "images/services/icons/figma.svg",
  Miro: "images/services/icons/miro.svg",
};

const ServiceCard = ({ icon, title, description, tools }) => {
  return (
    <div className="bg-[var(--background-gray)] rounded-[32px] flex-shrink-0 w-[450px] p-12 pb-10">
      <div>
        <img src={icon} alt={title} />
      </div>
      <h5 className="pb-2 text-2xl pt-12">{title}</h5>
      <p className="text-[var(--text-dark-green)] text-xl leading-[29.4px]">
        {description}
      </p>
      <div className="flex space-x-2 mt-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="md:text-[13px] rounded-full bg-[var(--gray-green)] py-2 px-3 rounded flex items-center gap-2"
          >
            <img src={toolIcons[tool]} />
            <span className="opacity-40 text-white">{tool}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
