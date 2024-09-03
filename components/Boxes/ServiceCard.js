import Image from "next/image";
import React from "react";
import ToolBadge from "./ToolBadge";

const toolIcons = {
  Figma: "images/services/icons/figma.svg",
  Miro: "images/services/icons/miro.svg",
};

const ServiceCard = ({ icon, title, description, tools, key }) => {
  return (
    <div key={key} className="bg-[var(--background-gray)] rounded-[32px] flex-shrink-0 w-[450px] p-12 pb-10">
      <div>
        <img src={icon} alt={title} />
      </div>
      <h5 className="pb-2 text-2xl pt-12">{title}</h5>
      <p className="text-[var(--text-dark-green)] text-xl leading-[29.4px]">
        {description}
      </p>
      <div className="flex space-x-2 mt-8">
        {tools.map((tool, index) => (
          <ToolBadge key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
