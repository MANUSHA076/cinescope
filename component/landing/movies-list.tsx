import { getMovies } from "@/actions/movies";
import MovieCard, { MovieCardSkeleton } from "./movie-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Fragment } from "react";

export default async function MovieList() {
  const movies = await getMovies();

  console.log("fetched movies:", movies);

  if (!movies || movies.length === 0) {
    return (
      <div className="w-full h-[122px] bg-purple-400 rounded-lg"></div>
    );
  }

  return (
    <Fragment>
      
      <div className="text-muted-foreground text-sm m-1">
        Showing {movies.length} of 100 movies
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
        </div>
        
    </Fragment>
  );
}

/* =========================
   SKELETON
========================= */
export function MovieListSkeleton() {
  return (
    <>
     <Skeleton className="h-4 w-56 m-1"/>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
      </>
  );
}
