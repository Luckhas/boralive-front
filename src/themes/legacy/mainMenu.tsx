'use client'
import styled from 'styled-components'
const Menu = styled.div`
  // font-family: "Exo"
`

export default function MainMenu() {
  return (
    <Menu className="bg-bl-dark-purple">
      <nav id="mainMenu" className="flex max-w-6xl mx-auto items-center justify-between py-5">
        <div className="">
          <img src="/assets/images/logo-bora-live.webp" alt="Logo Bora Live" className="h-8" />
        </div>
        <div className="text-white flex uppercase tracking-widest text-sm">
          <div className="px-5 py-2"><a href="">Home</a></div>
          <div className="px-5 py-2"><a href="">Sobre</a></div>
          <div className="px-5 py-2"><a href="">Aulas</a></div>
          <div className="px-5 py-2"><a href="">Downloads</a></div>
          <div className="px-5 py-2"><a href="">Minha Conta</a></div>
        </div>
        <div className="bg-gray-500">
          <form action="">
            {/* <label htmlFor="searchBarInput" className=''>Buscar</label> */}
            <div className="flex">
              <div id="searchBarIcon" className="content-center">
                <svg className="w-4 h-4 mx-3 content-center text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="searchBarInput" className="content-center px-2" placeholder="Buscar por cursos, downloads, temas..."/>
              <button type="submit" className="text-sm p-4 content-center">Buscar</button>
            </div>
          </form>
        </div>
      </nav>
    </Menu>
  )
}