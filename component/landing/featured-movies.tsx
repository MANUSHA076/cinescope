import { Button } from "@/components/ui/button";
import MovieList from "./movies-list";

export default function FeaturedMovies() {
   return (
     
      <section id="featured-movies" className="container-8xl px-4 py-12 sm:px-6">Featured Movies
         {/* heading area*/}
         <div className="mb-8 flex item-center justify-between  ">
            <div>
            <h2 className="text-3xl font-bold tracking-tight bg">Featured Movies</h2> 
            <p className="text-muted-foreground">Exolore the latest  and greatest movies that pre making waves in the cinema worls!

            </p>
            </div>
            <Button variant="outline">View All</Button>
         </div>
         {/* Movie Search*/}
         <div className="w-full h-[122px] bg-pink-400 rounded-lg mb-6"></div>

         {/* Movie List*/}
         <MovieList />
   </section>     

   );

}