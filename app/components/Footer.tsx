import Link from "next/link";

const social = [
  { name: "Instagram", href: "https://instagram.com/calynix" },
  { name: "YouTube", href: "https://youtube.com/@calynix" },
  { name: "X", href: "https://x.com/calynixhq" },
  { name: "TikTok", href: "https://tiktok.com/@calynixhq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 sm:px-12 lg:px-24 py-12 text-sm text-foreground/60">
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-3">
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
            Business &amp; general enquiries:{" "}
            <a
              href="mailto:info@calynix.com"
              className="underline hover:no-underline"
            >
              info@calynix.com
            </a>
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
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

      <p className="max-w-4xl mx-auto mt-10 text-xs text-foreground/40">
        © {new Date().getFullYear()} Calynix Ltd. All rights reserved.
      </p>
    </footer>
  );
}
