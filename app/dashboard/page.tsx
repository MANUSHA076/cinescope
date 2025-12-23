import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import DashboardLayout from "./layout";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const handleLogout = async () => {
    "use server";

    await auth.api.signOut({
      headers: await headers(),
    });

    redirect("/login");
  };

  console.log("User session:", session);

  return (
    <DashboardLayout />
   
  );
}