import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type MovieCardProps = {
   movie: {
      id: number;
      genre: string;
      title: string;
      reting: number;
      posterUrl?: string;
      releaseYear: number;
   };
};
export default function MovieCard({movie}:MovieCardProps) {
   return (

      <Card className="w-full  border-primary/20 hover:border-primary/60 overflow-hidden py-0 gap-0 transition-colors" ><div className="aspect-2/3 w-full overflow-hidden ">

         <Image
            src={movie?.posterUrl || "/placeholder.svg"} 
            alt="..."
            width={400}
            height={850}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
           priority 
         />

        
      </div>
         <CardContent className="p-4 ">
            <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
            <p className="text-muted-foreground text-muted">{movie.releaseYear} &#8226;{movie.genre} &#8226; $ { movie.reting}</p>
         </CardContent> 
      
      </Card>
   );




}