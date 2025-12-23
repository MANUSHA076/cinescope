

export default function DashboardLayout() {
   return (
   
      <div className="flex flex-row min-h-screen">
         {/* Sidebar can be added here in future */}
         <div className="bg-amber-300 flex-1">I&apos;m the slidebar</div>

         <div className="flex flex-col bg-green-300 flex-5">
            <div className="bg-pink-400 flex-1">HEader</div>
            <div className="bg-indigo-400 flex-12">Content</div>
            
            
         </div>
      </div>
   
  
   
   );
}