import FeaturedMovies from "@/component/landing/featured-movies";
import HeroBanner from "@/component/landing/hero-banner";
import { MainNav } from "@/component/main-nav";
//import Image from "next/image";
//import Link from "next/link";

export default function HomePage() {
  
  return(
    
    <div className=" flex flex-col   min-h-screen">
      <MainNav />

     <main className="">
    
        <HeroBanner />
        <FeaturedMovies/>
      </main>
    
   </div>      

  );
}
