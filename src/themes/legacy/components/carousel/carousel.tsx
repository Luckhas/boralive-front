'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

export default function Carousel() {
  const [posts, setPosts] = useState<{ title: string }[]>([])

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get("https://dummyjson.com/posts?limit=5&select=title,userId")
        setPosts(response.data.posts)
      } catch (error) {
        console.log("O erro é: ", error)
      }
    }
    fetchPost()
  }, [])

  function newBGUrl(): string {
    const width = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
    const height = Math.floor(Math.random() * (1500 - 720 + 1) + 720);
    return "https://picsum.photos/" + width + "/" + height;
  }

  return (
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 10000 }}
      className="bg-red-300"
    >
      {posts.map((posts, index) => (
        <SwiperSlide key={posts.title}>
          {/* <div className={`h-[500px] flex items-end justify-center bg-[${newBGUrl()}] bg-cover bg-center`} style={{backgroundImage: `url(${newBGUrl})`}}> */}
          <div className={`h-[500px] flex items-end justify-center bg-cover bg-center`} style={{backgroundImage: `url(${newBGUrl()})`}}>
            <a href="#" className="inline-block max-w-[30%] bg-white hover:bg-primary text-primary hover:text-white transition ease-in-out duration-500 rounded-xl mb-[70px] p-5" style={{fontFamily: 'Cal Sans'}}>{posts.title}</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}