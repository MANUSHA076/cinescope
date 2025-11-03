import { MainNav } from "@/component/main-nav";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  
  return(
    
    <div className="flex flex-col min-h-screen relative">
      <MainNav />

     <main className="flex flex-col justify-center items-center flex-12 bg-purple-500 text-4xl py-16 gap-4">home page
    
        <Link href="/movies" className="text-white text-sm bg-black p-4 rounded-full">Go to home page</Link>
      <div>
      {/* <Image
        src="/assests/manu.jpg"
        alt="Naming Conventions"
        width={500}
        height={800}
      /> */}
        </div>

      </main>
   </div>      

  );
}
