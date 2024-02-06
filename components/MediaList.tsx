"use client";
import MovieCard from "./MovieCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MediaList = ({ header, expand, results, type }: any) => {
  return (
    <div className="z-10 mt-10">
      <div className="flex justify-between mx-1">
        <div className="ml-5 text-2xl font-medium">{header}</div>
        <Link href={expand ? expand : "#"}>
          <Button size="sm" variant="flat" className="mr-5">
            More
          </Button>
        </Link>
      </div>

      <div className="h-max">
        <Swiper
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          className="mySwiper"
          loop={true}
          speed={1000}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
          }}
        >
          {results.map((result: any) => (
            <SwiperSlide key={result.id}>
              <MovieCard result={result} type={type} />
            </SwiperSlide>
          ))}
          <div className="swiper-button custom-prev-button left-0">
            <Button isIconOnly variant="flat">
              <FaAngleLeft size={20} />
            </Button>
          </div>
          <div className="swiper-button custom-next-button right-0">
            <Button isIconOnly variant="flat">
              <FaAngleRight size={20} />
            </Button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default MediaList;
