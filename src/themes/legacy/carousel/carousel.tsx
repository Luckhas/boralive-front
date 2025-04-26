'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      autoplay={{delay: 10000}}
      className="bg-red-300"
    >
      <SwiperSlide className="bg-blue-600">
        <div className="h-[500px]">aaa</div>
      </SwiperSlide>
      <SwiperSlide className="bg-blue-400">
        <div className="h-[500px]">aaa</div>
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200">
        <div className="h-[500px]">aaa</div>
      </SwiperSlide>
      <SwiperSlide className="bg-blue-100">
        <div className="h-[500px]">aaa</div>
      </SwiperSlide>
    </Swiper>
  )
}