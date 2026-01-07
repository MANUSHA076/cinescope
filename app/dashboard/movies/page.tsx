import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import MoviesSelectors from "./movie-selectors";
import MoviesData from "./movie-data";
import { MovieTable } from "./movie-table";
import AddMovieDialog from "@/component/dashboard/add-movie-dialog";

export default function MoviesDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
        <p className="text-muted-foreground">Manage your movies catalog</p>
      </div>

      <AddMovieDialog />
      </div>
      {/* Movie selector*/}

      <MoviesSelectors/>
      {/* Movie DAta table*/}

      <MoviesData />
    </div>
    
  );
}