'use client'

type Testimonials = {
  id: number;
  quote: string;
  author: string;
}

// import "./testimonials.css";
import styles from "./testimonials.module.scss";
import React, { useEffect, useState } from 'react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await axios.get("https://dummyjson.com/quotes/random/9", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        setTestimonials(response.data);
        // console.log(response);
      } catch (error) {
        alert("Deu erro nos quotes: " + error);
      }
    }
    fetchTestimonials();
  }, []);

  function randomGen() {
    let a = Math.random() < 0.5 ? 0 : 1;
    let gender;
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (a == 0) {
      gender = "men";
    } else {
      gender = "women";
    }
    return [gender, randomNumber]
  }

  return (
    <div className="my-20 py-30">
      <div className="w-2/3 mx-auto">
        <div className="text-4xl mb-6 font-calc text-center">Comentários da galera!</div>
        <div className={styles.testiomonialSwiper}>
          <Swiper
            slidesPerView={3}
            // grid={{
            //   rows: 1,
            // }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
            }}
          >
            {testimonials.map((testimonials) => {
              const gender = randomGen();
              return (
                <SwiperSlide key={testimonials.id} className="swiperSlide">
                  <div className="mx-10">
                    <div>
                      <img src={`https://randomuser.me/api/portraits/${gender[0]}/${gender[1]}.jpg`} alt="" className="rounded-full mx-auto" />
                    </div>
                    <div className="font-semibold my-2">{testimonials.author}</div>
                    <div>{testimonials.quote}</div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}