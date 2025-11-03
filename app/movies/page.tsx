
import { MainNav } from "@/component/main-nav";
import Link from "next/link";
export default function MoviesPage() {
  
  return(
    <div className="flex flex-col min-h-screen relative">
         <MainNav />
    

   <main className="flex flex-col justify-center items-center flex-12 bg-purple-500 text-4xl py-16 gap-4">this is movies
    
        <Link href="/" className="text-white text-sm bg-black p-4 rounded-full">Go to home page</Link>
      
      </main>
      </div>
    
     
      

  );
}