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

  // useEffect(() => {
  //   console.log(posts)
  // }, [posts])

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 10000 }}
      className="bg-red-300"
    >
      {posts.map((posts) => (
        <SwiperSlide key={posts.title}>
          <div className="h-[500px] flex items-end justify-center bg-[url(https://picsum.photos/1280/720)] bg-cover bg-center">
            <a href="#" className="inline-block max-w-[30%] bg-white hover:bg-primary text-primary hover:text-white transition ease-in-out duration-500 rounded-xl mb-[70px] p-5" style={{fontFamily: 'Cal Sans'}}>{posts.title}</a>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  )
}