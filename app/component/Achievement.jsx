"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import certificates from "../../Data/certificates.json";

export default function Achievement() {
  return (
    <section className="pt-20" id="achievements">
      <h1 className="mb-10 text-[2rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[4rem] font-bold after:content-[''] after:w-4/5 after:h-4 sm:after:h-6 after:bg-sky-800 after:absolute after:left-0 after:top-1/3 sm:after:top-1/2 after:z-[-1] z-10">
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
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {certificates.map((el, index) => (
          <SwiperSlide className="w-[700px]" key={index}>
            <Image
              src={el.image}
              alt={el.alt}
              quality={100}
              width={1754}
              height={1238}
            />
            <div className="mt-3 text-center opacity-80 border border-gray-300 focus:border-white rounded">
              <a
                target="_blank"
                href="https://linkedin.com/in/oussama-erraoui/details/certifications/"
              >
                view credentials
              </a>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="h-1/2 flex justify-center items-center">
            <p className="text-center text-lg">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/oussama-erraoui/"
              >
                More Certifications to Explore on LinkedIn{" "}
                <span className="text-xl font-extrabold cursor-pointer">
                  &rarr;
                </span>
              </a>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
