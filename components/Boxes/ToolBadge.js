import React from "react";
import Image from "next/image";

// ToolBadge Component
const ToolBadge = ({ tool }) => {
  const toolIcons = {
    Figma: "images/services/icons/figma.svg",
    Miro: "images/services/icons/miro.svg",
  };

  return (
    <div className="md:text-[13px] rounded-full bg-[var(--gray-green)] py-2 px-3 rounded flex items-center gap-2">
      <img src={toolIcons[tool]} alt={tool} />
      <span className="opacity-40 text-white">{tool}</span>
    </div>
  );
};

export default ToolBadge;
