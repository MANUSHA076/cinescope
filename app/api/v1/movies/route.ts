import { NextResponse } from "next/server";
import { db } from "@/db";
import { error } from "console";

//GET /api/v1/movies
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
   console.error("error fetching movies from database:",error);
   return NextResponse.json(
      { error: "failed to fetch movies" },
      { status: 500 }
   );
}
};
