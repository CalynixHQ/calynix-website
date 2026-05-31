import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 sm:px-12 lg:px-24 py-10 text-sm text-foreground/60">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold text-foreground">Calynix Ltd</p>
          <p className="mt-1">
            Registered in England &amp; Wales. Company No. 17245007.
          </p>
          <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
        </div>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/games" className="hover:text-foreground">
            Games
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-foreground">
            Support
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
      <p className="max-w-4xl mx-auto mt-8 text-xs text-foreground/40">
        © {new Date().getFullYear()} Calynix Ltd. All rights reserved.
      </p>
    </footer>
  );
}
