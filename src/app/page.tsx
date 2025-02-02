import Image from "next/image";
import HeroSection from "@/components/herosection";
import ProductDisplay from "@/components/featuredproduct";
import LatestProduct from "@/components/latestproducts";
import Supportpage from "@/components/supportpage";
import DiscountItem from "@/components/discountitems";
import Uniquefeature from "@/components/uniquefeature";
import Trendingproducts from "@/components/trendingproducts";
import Threecolumns from "@/components/3cols";
import Circleitems from "@/components/topcategories";
import SectionWithBackground from "@/components/sectionwithbg";
import LeatestBlog from "@/components/blogsection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
    <div>
    <HeroSection/>
    </div>

    <div>
      <Suspense>
    <ProductDisplay/></Suspense>
    </div>

    <div>
    <Suspense><LatestProduct/></Suspense>
    </div>

    <div>
      <Supportpage/>
    </div>

    <div><Uniquefeature/>
    </div>

    <div>
    <Suspense> <Trendingproducts/></Suspense>
    </div>

    <div>
      <Threecolumns/>
    </div>

    <div>
    <Suspense> <DiscountItem/></Suspense>
    </div>

    <div>
    <Suspense>  <Circleitems/></Suspense>
    </div>

    <div>
      <SectionWithBackground/>
    </div>

    <div>
      <LeatestBlog/>    </div>
    </>
  );
}
