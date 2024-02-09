"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import AnimatedSections from "../hooks/AnimatedSections";

export default function App() {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section ref={observerRef} className="pt-20">
      <h1
        className={`mb-10 text-[2rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[4rem] font-bold after:content-[''] after:w-4/5 after:h-4 sm:after:h-6 after:bg-[#bd631e] after:absolute after:left-0 after:top-1/3 sm:after:top-1/2 after:z-[-1] z-10`}
      >
        Achievements
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[800px]">
          <Image
            src="/assets/freecodeCamp-certf.png"
            quality={100}
            width={1159}
            height={910}
          />
          <p className="text-center">
            <a href="">view credentials</a>
          </p>
        </SwiperSlide>
        <SwiperSlide className="w-[800px]">
          <Image
            src="/assets/postman-api-fundamentals-cert.png"
            quality={100}
            width={925}
            height={715}
          />
          <p className="text-center">
            <a href="">view credentials</a>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/full-stack-udemy-cert.jpg"
            quality={100}
            width={1600}
            height={1190}
          />
          <p className="text-center">
            <a href="">view credentials</a>
          </p>
        </SwiperSlide>
        <SwiperSlide className="w-[800px]">
          <Image
            src="/assets/python-course-cert.png"
            quality={100}
            width={1317}
            height={903}
          />
          <p className="text-center">
            <a href="">view credentials</a>
          </p>
        </SwiperSlide>
        <SwiperSlide className="w-[800px] ">
          <Image
            src="/assets/React-certf-Glearning.png"
            quality={100}
            width={951}
            height={671}
          />
          <p className="text-center">
            <a href="">view credentials</a>
          </p>
        </SwiperSlide>
        <SwiperSlide className="w-[800px]">
          <Image
            src="/assets/sololearn-js-intermediate.jpg"
            quality={100}
            width={1754}
            height={1238}
          />
          <p className="text-center">
            <a href="">view credentials</a>
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
