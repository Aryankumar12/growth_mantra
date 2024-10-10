"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"; // Import Link
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
        className="!h-[500px] lg:!min-h-[70vh] w-full [&_.swiper-pagination-bullet-active]:!bg-[#E74C3C] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:!border-2 [&_.swiper-pagination-bullet]:!border-[#E74C3C] [&_.swiper-pagination-bullet]:!w-5 [&_.swiper-pagination-bullet]:!h-5 [&_.swiper-pagination-bullet]:!p-3"
      >
        <SwiperSlide>
          <Link href="/contactus" passHref>
            <div className="pe-12 lg:ps-28 w-full h-fit">
              <div className="h-fit flex flex-col ">
                <Image
                  src="/assets/CRM Landing Page/slide1.png"
                  alt="image"
                  width={900}
                  height={800}
                  className="object-contain !h-[500px] rounded-lg"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contactus" passHref>
            <div className="pe-12 lg:ps-28 w-full h-fit">
              <div className="h-fit flex flex-col ">
                <Image
                  src="/assets/CRM Landing Page/slide2.png"
                  alt="image"
                  width={900}
                  height={800}
                  className="object-contain !h-[500px] rounded-lg"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contactus" passHref>
            <div className="pe-12 lg:ps-28 w-full h-fit">
              <Image
                src="/assets/CRM Landing Page/slide3.png"
                alt="image"
                width={900}
                height={800}
                className="object-contain !h-[500px] rounded-lg"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contactus" passHref>
            <div className="pe-12 lg:ps-28 w-full h-fit">
              <div className="h-fit flex flex-col ">
                <Image
                  src="/assets/CRM Landing Page/slide4.png"
                  alt="image"
                  width={900}
                  height={800}
                  className="object-contain !h-[500px] rounded-lg"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contactus" passHref>
            <div className="pe-12 lg:ps-28 w-full h-fit">
              <div className="h-fit flex flex-col ">
                <Image
                  src="/assets/CRM Landing Page/slide5.png"
                  alt="image"
                  width={900}
                  height={800}
                  className="object-contain !h-[500px] rounded-lg"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
