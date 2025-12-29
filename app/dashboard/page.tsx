import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // ✅ Get session on server
  const session = await auth.api.getSession({
    headers: headers(),
  });

  // ✅ Protect route
  if (!session) {
    redirect("/login");
  }

  // ✅ Server Action for logout
  const handlelogout = async () => {
    "use server";

    await auth.api.signOut({
      headers: headers(),
    });

    redirect("/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>

      <h2 className="text-xl font-semibold">
        Welcome, {session.user?.name ?? "User"}!
      </h2>

      {/* ✅ Correct way to call Server Action */}
      <form action={handlelogout}>
        <Button type="submit" className="cursor-pointer hover:bg-primary">Logout</Button>
      </form>
    </main>
  );
}
