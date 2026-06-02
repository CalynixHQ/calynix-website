import Link from "next/link";

const social = [
  { name: "Instagram", href: "https://instagram.com/calynix" },
  { name: "YouTube", href: "https://youtube.com/@calynix" },
  { name: "X", href: "https://x.com/calynixhq" },
  { name: "TikTok", href: "https://tiktok.com/@calynixhq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 text-sm text-foreground/60">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-12">
        <div>
          <p className="font-semibold text-foreground">Calynix Ltd</p>
          <p className="mt-1">
            Registered in England &amp; Wales. Company No. 17245007.
          </p>
          <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
        </div>

        <div>
          <p className="font-semibold text-foreground">Site</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/games" className="hover:text-foreground">
                Games
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-foreground">
                Support
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">Contact</p>
          <p className="mt-2">
            <a
              href="mailto:info@calynix.com"
              className="underline hover:no-underline"
            >
              info@calynix.com
            </a>
          </p>
          <ul className="mt-3 space-y-1">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="container-page mt-10 text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} Calynix Ltd. All rights reserved.
      </p>
    </footer>
  );
}
