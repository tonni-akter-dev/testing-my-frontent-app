"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

const icons = [
  FaReact,
  FaNodeJs,
  SiTypescript,
  FaAws,
  FaDocker,
  SiMongodb,
  SiTailwindcss,
  FaGithub,
  FaFigma,
];

export default function IconSlider() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
        Technologies We Work With
      </p>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {icons.map((Icon, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <Icon size={42} className="text-gray-400 hover:text-indigo-600 transition" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}