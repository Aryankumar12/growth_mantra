"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function VerticalSwiper() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="!h-[670px] lg:!min-h-[70vh] w-full [&_.swiper-pagination-bullet-active]:!bg-[#E74C3C] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:!border-2 [&_.swiper-pagination-bullet]:!border-[#E74C3C] [&_.swiper-pagination-bullet]:!w-5 [&_.swiper-pagination-bullet]:!h-5 [&_.swiper-pagination-bullet]:!p-3"
      >
        <SwiperSlide>
          <div className="pe-20 xl:pe-28 ps-6 w-full h-fit">
            <div className="h-fit flex flex-col ">
              <Image
                src="/assets/acquistion/swiper1.png"
                alt="image"
                width={900}
                height={800}
                className="object-left  !h-[500px] rounded-lg "
              ></Image>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-20 xl:pe-28  ps-6 w-full h-fit">
            <div className="h-fit flex flex-col ">
              <Image
                src="/assets/acquistion/swiper2.png"
                alt="image"
                width={900}
                height={800}
                className="object-left   !h-[500px]   rounded-lg "
              ></Image>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-20 xl:pe-28  ps-6 w-full h-fit">
            <Image
              src="/assets/acquistion/swiper3.png"
              alt="image"
              width={900}
              height={800}
              className="object-left  !h-[500px] rounded-lg "
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-20 xl:pe-28  ps-6 w-full h-fit ">
            <div className="h-fit flex flex-col ">
              <Image
                src="/assets/acquistion/swiper4.png"
                alt="image"
                width={900}
                height={800}
                className="object-left  !h-[500px]   rounded-lg "
              ></Image>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="pe-20 xl:pe-28  ps-6 w-full h-fit">
            <div className="h-fit flex flex-col ">
              <Image
                src="/assets/acquistion/swiper5.png"
                alt="image"
                width={900}
                height={800}
                className="object-left   !h-[500px]   rounded-lg "
              ></Image>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
