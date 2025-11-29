import { getMovies } from "@/actions/movies";
import MovieCard from "./movie-card";

const MOVIES = [
   {
      id: 1,
      title: "Inception",
      releaseYear: 2010,
      rating: 8.8,
     
        genre:"sci-fi",
   },
   {
      id: 2,
      title: "The Dark Knight",
      releaseYear: 2011,
      rating: 9.0,
      
        genre:"action",
   },
   {
      id: 3,
      title: "yoga",
      releaseYear: 2015,
      rating: 8.6,
    
        genre:"actor",
   },
    {
      id: 4,
      title: "megha",
      releaseYear: 2005,
       rating: 7.6,
       
        genre:"docl",
   },


];




export default async function MovieList() {
   const movies = await getMovies();
   console.log("fetched movies:", movies);
   if (!movies || movies.length === 0) {
      return (
         <div className="w-full h-[122px] bg-purple-400 rounded-lg"></div>
      );
   }
   return (
      <div className="space-y-6">
         {/* Movie Search filter*/}
         <div className="w-full h-[122px] bg-pink-400 rounded-lg "></div>


         <div className="text-muted-foreground">Showing { movies.length} of 10 movies</div>
             
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                 
            {movies.map( ( movie )=> (
       
                  <MovieCard key={movie._id} movie={movie} />
  
             ))}
   </div>
         
</div>

   );
}