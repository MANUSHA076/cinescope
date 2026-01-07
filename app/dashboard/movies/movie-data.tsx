import { getMovies } from "@/actions/movies";
import { MovieTable } from "./movie-table";
import { headers } from "next/headers";
import type { Movie } from "./type";

const movies = [
   {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: "PG-13",
      status: "Available",
   },
   {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: "PG-13",
      status: "Unavailable",
   },
   {
      id: 3,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: "PG-13",
      status: "Available",
   },
   {
      id: 4,
      title: "The Matrix",

      year: 1999,
      genre: "Sci-Fi",
      rating: "R",   
      status: "Available",
   },
   {
      id: 5,
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime",
      rating: "R",
      status: "Available",
   },
];

export default async function MoviesData() {
   try {
      // Simulate fetching data from an API or database from the server side
      const movies: Array<Movie> = await getMovies();
      const headersList = await headers();
      
      if (!movies.length) {
         throw new Error("No movies found databse");
      }

      return <MovieTable movies={movies} />;
   }
   catch (error) {
     return <div>Error loading movies: no movies Available</div>
      
   }
}