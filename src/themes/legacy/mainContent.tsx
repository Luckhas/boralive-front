import PopularArticles from "@/themes/legacy/components/popularArticles/popularArticles";
import Destaques from "./components/destaques/destaques";

export default function MainContent() {
  return(
    <div className="container mx-auto grid grid-cols-[3fr_1fr] my-[100px]">
      <div className="">
        <Destaques/>
      </div>
      <div className="">
        <PopularArticles/>
      </div>
    </div>
  )
}