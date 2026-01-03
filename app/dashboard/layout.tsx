import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AdminHeader from "@/component/dashboard/admin-header";
import AdminSidebar from "@/component/dashboard/admin-sidebar";


export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode }>)
{
   return (
   
      <SidebarProvider>
         {/* Sidebar can be added here in future */}
         <AdminSidebar />
         <SidebarInset>
        

         
            <AdminHeader />
            <main className="flex-1 p-4  md:p-8">{children}</main>
         </SidebarInset>
            
        
      </SidebarProvider>
   
  
   
   );
}