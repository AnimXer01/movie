"use client";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroCard from "./HeroCard";
import { Button } from "@nextui-org/react";
export default function HeroSlider({results,type}:any) {
  return (
    <div>
      <Swiper modules={[Navigation,Autoplay]} className="mySwiper" navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          >
            {results.map((result: any,index:number) => (
            <SwiperSlide key={result.id}>
              <HeroCard result={result} idx={index+1} type={type}/>
            </SwiperSlide>
          ))}
      
       
        <div className="swiper-button custom-prev-button left-0">
            <Button isIconOnly variant="light">
              <FaAngleLeft size={20} />
            </Button>
          </div>
          <div className="swiper-button custom-next-button right-0">
            <Button isIconOnly variant="light">
              <FaAngleRight size={20} />
            </Button>
          </div>
      </Swiper>
    </div>
  );
}
