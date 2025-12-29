"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { UserIcon ,SettingsIcon,LogOutIcon} from "lucide-react";

type UserNavProps = {
   handleLogout: () => void;
   user: {
      id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
   };
      

   };
export default function UserNav({handleLogout, user}: UserNavProps) {
   return (
      <DropdownMenu>
         

         <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10 cursor-pointer border-2 border-primary">
               <AvatarImage src="admin.jpg" alt="@admin"/>
               <AvatarFallback>AD</AvatarFallback>
             </Avatar>
         </DropdownMenuTrigger>
         

         <DropdownMenuContent align="end" className=" w-56 bg-background/95 backdrop-blur-md border border-primary/20" forceMount>
            
            <DropdownMenuLabel className="font-normal">
               <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none truncate text-nowrap">{user.name}</p>
                  <p className="text-xs text-muted-foreground"> {user.email !==""?user.email:"guest email"} </p>
               </div>
            </DropdownMenuLabel>
            
            <DropdownMenuSeparator />
            
    <DropdownMenuItem asChild>
         <Link href="/dashboard/profile" className="flex items-center">
        <UserIcon className="mr-2 h-4 w-4" />
        <span>Profile </span>
      </Link>
    </DropdownMenuItem>

   <DropdownMenuItem asChild>
         <Link href="/dashboard/profile" className="flex items-center">
        <SettingsIcon className="mr-2 h-4 w-4" />
        <span>Settings </span>
      </Link>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            


            <DropdownMenuItem onClick={handleLogout} >
       
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Logout</span>
          
            </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
   );

}