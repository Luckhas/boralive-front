import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link";

export default function Destaques() {
  return (
    <div className="">
      <h2 className="title-underscore mb-8">Destaques</h2>

      <div className="grid grid-cols-[6fr_2fr] gap-3">
        <div>
          <div className="bg-[url(https://img.youtube.com/vi/V6kEcSAhPPo/maxresdefault.jpg)] w-full h-full min-h-[400px] bg-size-[auto_100%] hover:bg-size-[auto_110%] bg-center rounded-lg transition-all duration-500 flex items-end">
            {/* <div className="flex items-end p-5 text-white h-full transition duration-500 bg-gradient-to-t from-pink-600 to-red-600 hover:bg-gradient-to-t hover:from-black hover:to-transparent"> */}
            <div className="flex flex-col justify-end p-5 text-white h-full transition duration-500 bg-gradient-to-t from-[#00000000] to-transparent hover:from-[#000000]">
              <h3 className="text-4xl font-bold capitalize text-shadow-lg w-full">Os 7 melhores programas para fazer live em 2025</h3>
              <div className="text-sm mt-2">
                <div className="inline-block mr-3">25/02/2023</div>
                <div className="inline-block mr-3"><FontAwesomeIcon icon={faEye}/> 350</div>
                <div className="inline-block"><FontAwesomeIcon icon={faHeart}/> 122</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="w-full h-1/2 relative flex flex-col">
            <Link href={"#"} className="flex-grow">
              <div className="h-full bg-[url(https://ultimaficha.com.br/wp-content/uploads/2023/11/thelastofus-780x470.jpeg)] bg-size-[auto_100%] hover:bg-size-[auto_110%] bg-center rounded-lg transition-all duration-500"></div>
            </Link>
            <div>
              <h3 className="font-bold capitalize truncate truncate-ellipsis my-2 hover:text-primary transition duration-300"><Link href={"#"}>The last of Us ganha nova adaptação para filmes em 2027</Link></h3>
            </div>
          </div>
          <div className="w-full h-1/2 relative flex flex-col">
            <Link href={"#"} className="flex-grow">
              <div className="h-full bg-[url(https://manualdosgames.com/wp-content/uploads/2024/10/god-of-war-remastered.jpg)] bg-size-[auto_100%] hover:bg-size-[auto_110%] bg-center rounded-lg transition-all duration-500"></div>
            </Link>
            <div>
              <h3 className="font-bold capitalize truncate truncate-ellipsis mt-2 hover:text-primary transition duration-300"><Link href={"#"}>The last of Us ganha nova adaptação para filmes em 2027</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}