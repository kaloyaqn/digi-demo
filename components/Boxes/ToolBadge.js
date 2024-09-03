import React from "react";
import Image from "next/image";

// ToolBadge Component
const ToolBadge = ({ tool, isBig }) => {
  const toolIcons = {
    Figma: "images/services/icons/figma.svg",
    Miro: "images/services/icons/miro.svg",
  };

  return (
    <>
      {isBig ? (
        <>
          <div className="relative md:text-[20px] rounded-full py-4 px-8 flex items-center gap-2">
            <div className="absolute inset-0 rounded-full bg-[var(--gray-green)] opacity-40"></div>
            <img src={toolIcons[tool]} className="w-4 h-4 z-10" alt={tool} />
            <span className="text-white z-10">{tool}</span>
          </div>
        </>
      ) : (
        <>
          <div className="md:text-[13px] relative rounded-full py-2 px-3 flex items-center gap-2">
            <div className="absolute inset-0 rounded-full bg-[var(--gray-green)] opacity-40 z-0"></div>

            <img src={toolIcons[tool]} alt={tool} className="relative z-10" />
            <span className="text-white opacity-40 relative z-10">{tool}</span>
          </div>
        </>
      )}
    </>
  );
};

export default ToolBadge;
