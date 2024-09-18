import React from 'react'
import { cva } from "class-variance-authority";



const Label = ({children, variant}) => {

  const labelStyle = cva(
    "font-spectraDisplay",
    {
      variants: {
        variant: {
          footer: "bg-[#222623] py-3 px-4 rounded-full text-[#7A7D7B] md:text-xl md:leading-[24px] "
        }
      },
      defaultVariants: {
        variant: "opacity-55 rounded-full border-[1px] md:px-[10px] text-base"
      }
    }
  )

  return (
    <span className={labelStyle({ variant })}>{children}</span>
  )
}

export default Label