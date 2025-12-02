// component/main-nav.tsx
import { Logo } from "./shared/logo";
import Link from "next/link"
import { ModeToggle } from "./mode-toggle";
export function MainNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b ">
      <div className="container max-w-[87.5rem] px-8 mx-auto flex h-16 items-center">

        <Link href="/" className="flex items-center gsp-2">
        <Logo />
          <span className="text-primary text- font-bold">CineScope</span>
        </Link>
        <nav className="ml-auto flex gap-4 items-center">

          <Link href="/movies" className="hover:text-primary text-sm font-medium transition-colors">Movies</Link>
          <Link href="/genres" className="hover:text-primary text-sm font-medium transition-colors">Genres</Link>
          <Link href="/counter" className="hover:text-primary text-sm font-medium transition-colors">About</Link>
          <Link href="/movies" className="hover:text-primary text-sm font-medium transition-colors">Admin</Link>
          
 
            <ModeToggle />
        </nav>
        </div>
    </header>
  );
}