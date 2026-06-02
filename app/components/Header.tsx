"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";
import GamesWordmark from "./GamesWordmark";

export default function Header() {
  const pathname = usePathname();
  const gamesActive = pathname === "/games" || pathname.startsWith("/games/");

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-page flex items-center gap-4 py-3">
        <Link
          href="/"
          aria-label="Calynix home"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`flex items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#1B2E55] ${
            pathname === "/" ? "bg-[#1B2E55]" : ""
          }`}
        >
          <Wordmark className="h-5 sm:h-6 w-auto" />
        </Link>
        <Link
          href="/games"
          aria-label="Games"
          aria-current={gamesActive ? "page" : undefined}
          className={`flex items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#1B2E55] ${
            gamesActive ? "bg-[#1B2E55]" : ""
          }`}
        >
          <GamesWordmark className="h-5 sm:h-6 w-auto" />
        </Link>
      </nav>
    </header>
  );
}
