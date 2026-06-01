import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Calynix is a creative studio building games, software, and online experiences. Home to Calynix Games.",
  metadataBase: new URL("https://calynix.com"),
  openGraph: {
    title: "Calynix",
    description:
      "A creative studio building games, software, and online experiences.",
    url: "https://calynix.com",
    siteName: "Calynix",
    type: "website",
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
