import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calynix — Creative studio for games, software, and digital experiences",
  description:
    "Calynix is a creative studio building games, apps, software, and media. Home to Calynix Games (Fibby, Reveal), SW Lab web tools (Signlyn, Chartlyn), and Amazlyn on YouTube.",
  keywords: [
    "Calynix",
    "creative studio",
    "indie games",
    "iOS games",
    "web tools",
    "software",
    "Calynix Games",
    "Fibby",
    "Reveal",
    "Signlyn",
    "Chartlyn",
  ],
  metadataBase: new URL("https://calynix.com"),
  alternates: { canonical: "https://calynix.com" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Calynix — Creative studio for games, software, and digital experiences",
    description:
      "A creative studio building games, apps, software, and media. Home to Calynix Games, SW Lab web tools, and Amazlyn on YouTube.",
    url: "https://calynix.com",
    siteName: "Calynix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calynix — Creative studio for games, software, and digital experiences",
    description:
      "A creative studio building games, apps, software, and media. Home to Calynix Games, SW Lab web tools, and Amazlyn on YouTube.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
