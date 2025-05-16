'use client'

type PopPosts = {
  id: number;
  title: string;
  tags: string[];
  views: number;
  reactions: {
    likes: number;
  }
}

import { friendlyUrl } from "@/lib/customMethods";
import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link";

export default function PopularArticles() {

  const [popularPosts, setPopularPosts] = useState<PopPosts[]>([])

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const response = await axios.get("https://dummyjson.com/posts", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        // console.log("aqui ó", response.data)
        setPopularPosts(response.data.posts)
        // console.log("aqui ó", popularPosts)

      } catch (e) {
        console.log("O Erro no Popular post é: ", e)
      }
    }
    // console.log("Primeiro Use Effect", popularPosts)
    fetchPostsData();
  }, [])

  const [mostPopularPosts, setMostPopularPosts] = useState<PopPosts[]>([])
  useEffect(() => {
    // const getMostPopular = popularPosts.sort((a, b) => b.views - a.views).slice(0,4))
    const getMostPopular = popularPosts.sort((a, b) => {
      return b.views - a.views;
    }).slice(0, 4)
    setMostPopularPosts(getMostPopular)
  }, [popularPosts])

  // useEffect(() => {
  //   console.log(mostPopularPosts)
  // }, [mostPopularPosts])

  // Criar função para inventar data randomica. LEmbrar de deletar depois

  function criarData() {
    return Math.floor(Math.random() * 30) + 1 + "/" + (Math.floor(Math.random() * 12) + 1) + "/" + (Math.floor(Math.random() * (2025 - 2020)) + 2020)
  }

  return (
    <div>
      <h4 className="title-underscore">Postagens Populares</h4>
      {
        mostPopularPosts.length > 0 && (
          <div>
            <a href="http://google.com">
              <div className="bg-[url(https://prod-images.dacast.com/wp-content/uploads/2023/12/How-to-Use-OBS-Studio_-A-Comprehensive-Guide-for-2023-2023-Update.png)] w-full h-48 bg-cover bg-center overflow-hidden group relative">
                <div className="absolute left-0 bottom-0 w-full p-2 bg-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  {mostPopularPosts[0].title}
                </div>
              </div>
            </a>

            <div className="py-1 px-5 my-3 inline-block text-sm bg-primary text-white">{mostPopularPosts[0].tags.join(", ")}</div>

            {mostPopularPosts.slice(1, 4).map((posts) => {
              return (
                <div key={posts.id + posts.views} className="my-2 py-2 border-b border-gray-200">
                  <h5 className="w-[30ch] truncate hover:text-primary transition transition-discrete"><Link href={"/" + friendlyUrl(posts.title)}>{posts.title.replace((/\./g), "")}</Link></h5>
                  <div className="text-sm text-gray-600">
                    <div className="inline-block mr-3">{criarData()}</div>
                    <div className="inline-block mr-3"><FontAwesomeIcon icon={faEye} /> {posts.views}</div>
                    <div className="inline-block"><FontAwesomeIcon icon={faHeart} /> {posts.reactions.likes}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      }
      <Link href={""}>
        <div className="p-3 mt-3 text-xs text-center text-white bg-persian uppercase hover:bg-persian-hover transition transition-discrete">
          veja as postagens mais populares
        </div>
      </Link>
    </div>
  )
}