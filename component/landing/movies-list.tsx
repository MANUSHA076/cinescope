import MovieCard from "./movie-card";

const MOVIES = [
   {
      id: 1,
      title: "Inception",
      releaseYear: 2010,
      reting: 8.8,
     
        genre:"sci-fi",
   },
   {
      id: 2,
      title: "The Dark Knight",
      releaseYear: 2011,
      reting: 9.0,
      
        genre:"action",
   },
   {
      id: 3,
      title: "yoga",
      releaseYear: 2015,
      reting: 8.6,
    
        genre:"actor",
   },
    {
      id: 4,
      title: "megha",
      releaseYear: 2005,
       reting: 7.6,
       
        genre:"docl",
   },


];




export default function MovieList() {
   return (

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {MOVIES.map(movie => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>


   );
}