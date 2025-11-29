import Image from "next/image";
import {
  Card,
//   CardAction,
    CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
} from "@/components/ui/card"

type MovieCardProps = {
   movie: {
      _id: string;
      genres: string[];
      title: string;
      imdb: {
         rating: number;
         votes: number;
      };
      poster?: string;
      year: number;
     
   };
};
export default function MovieCard({movie}:MovieCardProps) {
   return (

      <Card className="w-full  border-primary/20 hover:border-primary/60 overflow-hidden py-0 gap-0 transition-colors" ><div className="aspect-2/3 w-full overflow-hidden ">

         <Image
            src={movie.poster || "/placeholder.svg"} 
            alt="movie.title"
            width={300}
            height={450}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
           priority 
         />

        
      </div>
         <CardContent className="p-4 ">
            <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
            <p className="text-muted-foreground text-muted">{movie.year} &#8226;{movie.genres.join(",")} &#8226; $ { movie.imdb.rating }</p>
         </CardContent> 
      
      </Card>
   );




}