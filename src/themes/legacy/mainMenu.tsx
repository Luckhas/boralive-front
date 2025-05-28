'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
const Menu = styled.div`
  // font-family: "Exo"
`
export default function MainMenu() {

  const [userData, setUserData] = useState(Object);

  
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("https://dummyjson.com/users/me", {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          },
          // withCredentials: true,
        })
        setUserData(response.data)
        console.log(response.data)
      } catch (error) {
        // console.log("O erro éa: ", error)
      }
    }
    fetchUserData();
  }, [])

  return (

    <Menu className="bg-bl-dark-purple">
      <nav id="mainMenu" className="flex container mx-auto items-center justify-between py-5">
        <div className="">
          <img src="/assets/images/logo-bora-live.webp" alt="Logo Bora Live" className="h-8" />
        </div>
        <div className="text-white flex uppercase tracking-widest text-sm">
          <div className="px-5 py-2"><a href="">Home</a></div>
          {/* <div className="px-5 py-2"><a href="">Sobre</a></div> */}
          <div className="px-5 py-2"><a href="">Aulas</a></div>
          <div className="px-5 py-2"><a href="">Downloads</a></div>
          <div className="px-5 py-2"><a href="">Blog</a></div>
          <div className="px-5 py-2"><a href="">Shop</a></div>
          <div className="px-5 py-2">{userData.id !== undefined ? <a href={"/minha-conta/" + userData.id}>Minha Conta</a> : <a href="/login">Login</a>}</div>
        </div>
        <div className="bg-gray-500">
          <form action="">
            {/* <label htmlFor="searchBarInput" className=''>Buscar</label> */}
            <div className="flex">
              <div id="searchBarIcon" className="content-center">
                <svg className="w-4 h-4 mx-3 content-center text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="searchBarInput" className="content-center px-2 bg-white" placeholder="Buscar por cursos, downloads, temas..." />
              <button type="submit" className="text-sm p-4 content-center bg-primary">Buscar</button>
            </div>
          </form>
        </div>
      </nav>
    </Menu>
  )
}