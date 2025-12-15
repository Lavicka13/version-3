import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
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
      <body className={`${jost.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
