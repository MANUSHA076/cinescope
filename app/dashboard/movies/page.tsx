import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import MoviesSelectors from "./movies-selectors";
import MoviesData from "./movies-data";

export default function MoviesDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
        <p className="text-muted-foreground">Manage your movies catalog</p>
      </div>

      <Button>
        <PlusIcon className="mr-2 h-4 w-4 "/>Add Movie
      </Button>
      </div>
      {/* Movie selector*/}

      <MoviesSelectors/>
      {/* Movie DAta table*/}

      <MoviesData />
    </div>
    
  );
}