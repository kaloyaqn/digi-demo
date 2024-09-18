"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestemonialBlock from "../Boxes/TestemonialBlock";

function TestemonialCarousel({ Slides, Spacing, SlidesToShow }) {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="flex items-end justify-between">
        <h2 className="md:text-6xl md:max-w-[600px] md:leading-[85px]">
          Our clients are in love with our work
        </h2>
        <div className="buttons group flex justify-between gap-6 md:max-w-[216px]">
          <svg
            className="cursor-pointer hover:rotate-45 transition-transform"
            onClick={() => swiperRef.current?.slidePrev()}
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48"
              cy="48"
              r="47"
              transform="rotate(-180 48 48)"
              stroke="#26CA57"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M55.3172 59.6698L38.2291 59.6698C37.1805 59.6698 36.3305 58.8198 36.3305 57.7712L36.3305 40.6831C36.3305 39.6345 37.1805 38.7845 38.2291 38.7845C39.2777 38.7845 40.1278 39.6345 40.1278 40.6831L40.1278 53.1874L57.7709 35.5443L60.456 38.2294L42.8129 55.8725L55.3172 55.8725C56.3658 55.8725 57.2158 56.7226 57.2158 57.7712C57.2158 58.8198 56.3658 59.6698 55.3172 59.6698Z"
              fill="#26CA57"
            />
          </svg>

          <svg
            onClick={() => swiperRef.current?.slideNext()}
            className="hover:rotate-45 cursor-pointer transition-transform"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="48" cy="48" r="47" stroke="#26CA57" stroke-width="2" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.6828 36.3302L57.7709 36.3302C58.8195 36.3302 59.6695 37.1802 59.6695 38.2288L59.6695 55.3169C59.6695 56.3655 58.8195 57.2155 57.7709 57.2155C56.7223 57.2155 55.8722 56.3655 55.8722 55.3169V42.8126L38.2291 60.4557L35.544 57.7706L53.1871 40.1275L40.6828 40.1275C39.6342 40.1275 38.7842 39.2774 38.7842 38.2288C38.7842 37.1802 39.6342 36.3302 40.6828 36.3302Z"
              fill="#26CA57"
            />
          </svg>
        </div>
      </div>

      <div className="w-screen md:pt-20 flex flex-row gap-8">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          slidesPerView={SlidesToShow || 3}
          spaceBetween={Spacing}
          modules={[Navigation]}
        >
          {Slides.map((Slide, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <TestemonialBlock
                image={Slide.image}
                text={Slide.text}
                work={Slide.work}
                client={Slide.client}
                position={Slide.position}
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default TestemonialCarousel;
