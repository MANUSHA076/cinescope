import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { Movie } from "./type";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";


type MovieTableProps = {
  movies: Array<Movie>;
};

export function MovieTable({ movies }: MovieTableProps) {
  console.log(movies[0].genres);
   return (
     <div className="rounded-md border">
       <Table>
         <TableCaption className="sr-only"></TableCaption>
      
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-muted-foreground">#</TableHead>
          <TableHead className=" text-muted-foreground">Title</TableHead>
             <TableHead className=" text-muted-foreground">Year</TableHead>
             <TableHead className="text-muted-foreground">Genre</TableHead>
             <TableHead className="text-muted-foreground">Rating</TableHead>
             <TableHead className="text-muted-foreground">Status</TableHead>

             <TableHead className="text-right text-muted-foreground">Actions</TableHead>
             
        </TableRow>
      </TableHeader>
      <TableBody>
        {movies.map((movie,key) => (
          <TableRow key={ `${movie.id}-${key}`}>
            <TableCell className="font-medium">{key +1}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Image
                  src={movie.poster ?? "/placeholder.svg"} alt={movie.title} width={28} height={40}
                  className="rounded-md"
                />
                <span className="font-medium max-w-60 text-wrap line-clamp-2">{movie.title}</span>
              </div>
            </TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {movie.genres?.map((genre,key) => (
                  <Badge key={ `${genre}-${key}`} variant="outline" className="text-xs">{genre}</Badge>
                ))}
                </div>
            </TableCell>
            <TableCell>{Number(movie.imdb.rating).toFixed(1)}</TableCell>
            <TableCell><Badge variant="outline" className="bg-green-200 text-green-600">{movie.status ?? "Published"}</Badge></TableCell>

            <TableCell className="text-right">

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontalIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                 <DropdownMenuContent align="end">
                 <DropdownMenuLabel>Movie Action</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                   <DropdownMenuItem>View Details</DropdownMenuItem>
                   <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    
                   </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
         </Table>
         </div>
  )
}
