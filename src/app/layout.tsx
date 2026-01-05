import type { Metadata } from "next";
import { Jost, Inter, Amatic_SC } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// Handwritten font matching the logo style
const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZEITINSEL | Luxus-Kosmetik & Wellness in Blaufelden",
  description:
    "Zeitinsel - Wo Stille und Schönheit sich treffen. Exklusive SOTHYS Gesichtsbehandlungen und Wellness-Massagen von Ruth-A. Schwendtner in Blaufelden.",
  keywords: [
    "Luxus Kosmetik Blaufelden",
    "Premium Wellness",
    "SOTHYS Institut",
    "Gesichtsbehandlung",
    "Wellness Massage",
    "Ruth-A. Schwendtner",
    "Zeitinsel",
  ],
  authors: [{ name: "Ruth-A. Schwendtner" }],
  creator: "Zeitinsel",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ZEITINSEL | Luxus-Kosmetik & Wellness",
    description:
      "Stille finden. Schönheit spüren. Exklusive Behandlungen in Blaufelden.",
    url: "https://die-zeitinsel.de",
    siteName: "Zeitinsel",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${jost.variable} ${inter.variable} ${amatic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
