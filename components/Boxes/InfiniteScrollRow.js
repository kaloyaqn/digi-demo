import React from "react";
import Marquee from "react-fast-marquee";
import ToolBadge from "./ToolBadge";

const tools = ["Figma", "Miro"]; // Add more tools as needed

const InfiniteScrollRow = () => {
  return (
    <>
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Marquee
          direction="left"
          className="md:mb-4"
          autoFill
          gradient
          gradientColor="#161a17"
          speed={50}
        >
          {tools.map((tool, index) => (
            <>
              <div className="md:mr-4">
                <ToolBadge isBig key={index} tool={tool} />
              </div>
            </>
          ))}
        </Marquee>
        <Marquee
          direction="right"
          autoFill
          gradient
          gradientColor="#161a17"
          speed={50}
        >
          {tools.map((tool, index) => (
            <>
              <div className="md:mr-4">
                <ToolBadge isBig key={index} tool={tool} />
              </div>
            </>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default InfiniteScrollRow;
