import PopularArticles from "@/themes/legacy/components/popularArticles/popularArticles";
import Destaques from "./components/destaques/destaques";
import LastestProducts from "./components/lastestProducts/latestProducts";
import WhyUs from "./components/whyUs/whyUs";
import Testimonials from "./components/testimonials/testimonials";

export default function MainContent() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-[3fr_1fr] my-[100px]">
        <div className="w-[80%] mx-auto">
          <Destaques />
          <LastestProducts />
        </div>
        <div className="">
          <PopularArticles />
        </div>
      </div>
      <WhyUs />
      <Testimonials />
    </div>
  )
}