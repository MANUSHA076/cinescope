"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react"
import AddMovieForm from "./add-movie-form";

export default function AddMovieDialog() {
   const [showAddMovieDialog, setShowAddMovieDialog]=useState(false);
return (
<Dialog open={showAddMovieDialog} onOpenChange={setShowAddMovieDialog}>
  <DialogTrigger asChild>
        <Button className="cursor-pointer bg-green-300">
          <PlusIcon className="mr-2 h-4 w-4 "/>Add Movie
        </Button></DialogTrigger>
  <DialogContent className="sm:max-w-lg sm:min-w-[480px]">
    <DialogHeader>
      <DialogTitle>Add New Movie</DialogTitle>
      <DialogDescription>
        Fill the details to add a new movie to your catalog.
      </DialogDescription>
         </DialogHeader>
         
         {/* Form is here */}

         <AddMovieForm/>
  </DialogContent>
      </Dialog>
);
}