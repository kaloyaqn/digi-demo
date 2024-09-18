'use client'

import React, { useEffect } from 'react'

const TestemonialBlock = ({key, text, client, work = [], image, position}) => {

  return (
    <div key={key} className='bg-[#EAEAEA]  md:h-[603px] relative md:max-w-[625px] md:p-16 rounded-[32px] flex-shrink-0 w-[100%] h-full'>
      <h4 className='md:text-3xl text-[var(--background-black)] font-medium md:mb-6'>
    {text}
      </h4>
      <div className='flex flex-row gap-[12px]'>

        {work.map((work, index) => (
          <span key={index} className='bg-[#DFE1E0] font-semibold text-[#0F1210] md:text-base md:px-8 md:py-4 rounded-full'>
          {work}
          </span>
        ))}
      </div>
      <div className='absolute bottom-0 md:pb-16 flex flex-row gap-5 items-center'>
      <img className='w-20 h-20 aspect-square rounded-full' src={image} alt={"Image of " + client}/>
      <div>
        <h6 className='md:text-2xl font-semibold md:mb-1 text-[#0F1210]'>{client}</h6>
        <p className='text-[#0F12108C] text-xl font-semibold'>{position}</p>
      </div>
      </div>
    </div>
  )
}

export default TestemonialBlock