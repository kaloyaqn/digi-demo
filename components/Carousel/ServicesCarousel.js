'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from '../Boxes/ServiceCard';

import "swiper/css";

function ServicesCarousel({Slides, Spacing, SlidesToShow})  {
    return (
        <Swiper slidesPerView={"auto"} spaceBetween={Spacing}>
            {Slides.map((Slide, index) => (
                <SwiperSlide key={index} className='!h-auto !w-[25%]'>              
                    <ServiceCard
                    title={Slide.title}
                    description={Slide.description}
                    tools={Slide.tools}
                    icon={Slide.icon}
                    className="" // Увеличи ширината на картите
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ServicesCarousel;