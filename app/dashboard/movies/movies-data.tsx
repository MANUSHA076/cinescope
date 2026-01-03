import { getMovies } from "@/actions/movies";

export default async function MoviesData() {
   try {
      const movies = await getMovies();
      if (movies) {
         console.log(movies);
      }
      return <div>Movies Data Component</div>;
   }
   catch (error) {
      console.error("Error in MoviesData component:", error);
      
   }
}