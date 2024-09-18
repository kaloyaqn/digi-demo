'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import ServiceCard from '../Boxes/ServiceCard';

function ServicesCarousel({Slides, Spacing, SlidesToShow})  {
    return (
        <Swiper slidesPerView={"auto"} spaceBetween={Spacing}>
            {Slides.map((Slide, index) => (
                <SwiperSlide key={index} className='!h-auto !w-[25%]'>              
                    <ServiceCard
                    icon={Slide.icon}
                    title={Slide.title}
                    description={Slide.description}
                    tools={Slide.tools}
                    className="" // Увеличи ширината на картите
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ServicesCarousel;