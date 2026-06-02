import Link from "next/link";
import Wordmark from "./Wordmark";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-page flex items-center gap-6 py-4">
        <Link href="/" aria-label="Calynix home" className="flex items-center">
          <Wordmark className="h-6 sm:h-7 w-auto" />
        </Link>
        <Link
          href="/games"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          Games
        </Link>
      </nav>
    </header>
  );
}
