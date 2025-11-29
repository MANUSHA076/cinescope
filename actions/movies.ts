"use server";
import { db } from "@/db"; 


//Get a list of movies from the databse

export const getMovies = async () => { 
   try {
      const moviesResponse = await fetch(`${process.env.API_BASE_URL}/v1/movies`,
         {
            method: "GET",
            headers: {
               "Content-Type":"application/json",
               //Authorization :`Bearer ${process.env.API_KEY}`,
            },
            cache:"no-store"
         }
      );
      if (!moviesResponse.ok) {
         throw new Error(`HTTP error ! status: ${moviesResponse.status}`);
      }
      if (moviesResponse.status === 200) {
         return await moviesResponse.json();
      }
      else {
         console.log("no movies found or eror occurred.");
         return [];
      }

   } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
   }
};