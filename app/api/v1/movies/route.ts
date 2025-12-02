import { NextResponse } from "next/server";
import { db } from "@/db";
import { error } from "console";

//GET /api/v1/movies
//fetch movies from database
//limit to 10 movies
export const GET = async () => {
   try {
      const movies =await db
   .collection("movies")
   .find()
   //.sort({ metacritic: -1 })
   .limit(50)
   .toArray()
   .catch((err) => {
      console.error("database Query Error:", err);
      return [];
   });
return NextResponse.json(movies);
}catch (err) {
   console.error("error fetching movies from database:",err);
   return NextResponse.json(
      { error: "failed to fetch movies" },
      { status: 500 }
   );
}
};
