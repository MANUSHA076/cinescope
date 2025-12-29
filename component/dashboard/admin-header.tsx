import UserNav from "./user-nav";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// ✅ Server Action for logout
  const handlelogout = async () => {
    "use server";

    await auth.api.signOut({
      headers: headers(),
    });

    redirect("/login");
  };


export default async function AdminHeader() {
  const session = await auth.api.getSession({
    headers: headers(),
  });
   if(!session){
      redirect("/login");
   }

   return(
      <header className="sticky top-0 z-50 bg-background border-bottom">
      
         <div className="flex h-16 items-center justify-between px-4">
            
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            { /* USER NAVIGATION CAN BE ADDED HERE */}
            <UserNav handleLogout={handlelogout} user={session.user} />
              
         

         </div>
      
      </header>
   );
}