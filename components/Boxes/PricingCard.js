import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

import { cva } from "class-variance-authority"; //tva tuka za variantite


//kartite
const cardStyles = cva(
  "md:p-16 rounded-[32px] flex-shrink-0 w-full h-full text-[#0F1210]", 
  {
    variants: {
      variant: {
        white: "bg-[#EAEAEA]", // bql background
        black: "bg-[#161917] text-white", // cheren background
      },
    },
    defaultVariants: {
      variant: "white", // default varianta ako nqma passnat
    },
  }
);

//vid na package twa malkoto
const packageNameStyles = cva(
  "text-2xl opacity-[55%] tracking-[-0.75px] font-speactraDisplay font-medium",
  {
    variants: {
      variant: {
        white: "text-[#0F1210]",
        black: "text-white"
      }
    }
  }
)

//za labelite
const workStyles = cva(
  "flex gap-[0.75rem] px-8 py-6 rounded-2xl items-center",
  {
    variants: {
      variant: {
        white: "bg-[#DFE1E0]",
        black: "bg-[#222623]",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  }
)

// svg
const getSVG = (variant) => {
  const strokeColor = variant === "black" ? "#FFFFFF" : "#0F1210";
  const strokeOpacity = variant === "black" ? "0.35" : "0.35"; 

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9.5" stroke={strokeColor} strokeOpacity={strokeOpacity} />
      <path d="M6 9.375L9.07692 12.5L14 7.5" stroke={strokeColor} strokeOpacity={strokeOpacity} />
    </svg>
  );
};
const PricingCard = ({ packageName, price, works, workType, variant }) => {
  return (
    <div className={cardStyles({ variant })}>
      <div>
        <label className={packageNameStyles({variant})}>
          {packageName}
        </label>
        <h3 className="text-4xl mt-[0.25rem] tracking-[-1.25px] font-speactraDisplay font-medium">
          {workType}
        </h3>
      </div>
      <hr className="border-[#0F1210] opacity-[10%] my-8" />
      <div className="flex flex-wrap gap-4 mb-20">
        {works.map((work, index) => (
          <div
            key={index}
            className={workStyles({variant})}
          >
            {getSVG(variant)}
            <span className="text-[1.15rem] tracking-tight">{work}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <label className="text-[1.25rem] opacity-[55%] font-speactraDisplay">
            Starting from
          </label>
          <b className="text-6xl font-speactraDisplay font-bold tracking-[-2px]">
            $ {price}
          </b>
        </div>
        <div className="w-[1px] h-[4rem] bg-[#0F1210] opacity-[10%]"></div>
        <PrimaryButton isCta>Book a call</PrimaryButton>
      </div>
    </div>
  );
};

export default PricingCard;
