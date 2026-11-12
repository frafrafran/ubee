import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk, Syncopate } from "next/font/google";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ubee.com.ar"),
  title: {
    default: "UBEE · Modern Hair Studio — Córdoba y Villa Carlos Paz",
    template: "%s · UBEE Modern Hair Studio",
  },
  description:
    "Color de autor, balayage, rubios y cortes a medida. Reservá tu turno online en UBEE Córdoba o Villa Carlos Paz.",
  openGraph: {
    title: "UBEE · Modern Hair Studio",
    description: "Color de autor con luz propia. Reservá tu turno online.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0b09",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${bodoni.variable} ${syncopate.variable} ${hanken.variable} antialiased`}>
      <body className="min-h-dvh">
        <SmoothScroll>
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
