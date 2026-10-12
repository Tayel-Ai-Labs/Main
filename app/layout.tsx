import type { Metadata } from "next";
import { Space_Grotesk, Poppins, Cairo, Roboto_Mono } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { site } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

/** Applies the stored theme before first paint so dark mode never flashes. */
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("tayel-theme");
    if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${spaceGrotesk.variable} ${poppins.variable} ${cairo.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
