"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const appsActive  = pathname === "/apps"  || pathname.startsWith("/apps/");
  const gamesActive = pathname === "/games" || pathname.startsWith("/games/");
  const swlabActive = pathname === "/swlab" || pathname.startsWith("/swlab/");
  const mediaActive = pathname === "/media" || pathname.startsWith("/media/");

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-page flex items-center gap-3 py-2">
        {/* Home */}
        <Link
          href="/"
          aria-label="Calynix home"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`flex flex-col items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#243E73] ${
            pathname === "/" ? "bg-[#243E73]" : ""
          }`}
        >
          <Image src="/logo/yk/calynix-wordmark.png" alt="Calynix" height={200} width={700} className="h-[2.4rem] w-auto" unoptimized />
        </Link>

        {/* SW Lab — teal */}
        <Link
          href="/swlab"
          aria-label="SW Lab"
          aria-current={swlabActive ? "page" : undefined}
          className={`flex flex-col items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#123935] ${
            swlabActive ? "bg-[#123935]" : ""
          }`}
        >
          <Image src="/logo/yk/calynix-teal-wordmark.png" alt="Calynix SW Lab" height={200} width={700} className="h-[1rem] sm:h-[1.2rem] w-auto" unoptimized />
          <span className="text-xs font-medium mt-0.5" style={{ color: "#2DD4BF" }}>sw lab</span>
        </Link>

        {/* Apps — gray */}
        <Link
          href="/apps"
          aria-label="Apps"
          aria-current={appsActive ? "page" : undefined}
          className={`flex flex-col items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#2A2A2A] ${
            appsActive ? "bg-[#2A2A2A]" : ""
          }`}
        >
          <Image src="/logo/yk/calynix-gray-wordmark.png" alt="Calynix Apps" height={200} width={700} className="h-[1rem] sm:h-[1.2rem] w-auto" unoptimized />
          <span className="text-xs font-medium mt-0.5" style={{ color: "#9CA3AF" }}>apps</span>
        </Link>

        {/* Games — fuchsia */}
        <Link
          href="/games"
          aria-label="Games"
          aria-current={gamesActive ? "page" : undefined}
          className={`flex flex-col items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#39233E] ${
            gamesActive ? "bg-[#39233E]" : ""
          }`}
        >
          <Image src="/logo/yk/calynix-fuchsia-wordmark.png" alt="Calynix Games" height={200} width={700} className="h-[1rem] sm:h-[1.2rem] w-auto" unoptimized />
          <span className="text-xs font-medium mt-0.5" style={{ color: "#E879F9" }}>games</span>
        </Link>

        {/* Media — red */}
        <Link
          href="/media"
          aria-label="Media"
          aria-current={mediaActive ? "page" : undefined}
          className={`flex flex-col items-center rounded-md px-3 py-1.5 transition-colors hover:bg-[#391414] ${
            mediaActive ? "bg-[#391414]" : ""
          }`}
        >
          <Image src="/logo/yk/calynix-red-wordmark.png" alt="Calynix Media" height={200} width={700} className="h-[1rem] sm:h-[1.2rem] w-auto" unoptimized />
          <span className="text-xs font-medium mt-0.5" style={{ color: "#F87171" }}>media</span>
        </Link>
      </nav>
    </header>
  );
}
