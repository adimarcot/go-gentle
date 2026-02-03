import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Appartamento Lusso Porta Romana | Milano",
  description:
    "Appartamento di lusso a Milano, zona Porta Romana e Bocconi. Contesto esclusivo, finiture di pregio, 3 minuti dalla metro.",
  keywords: ["appartamento", "Milano", "Porta Romana", "Bocconi", "affitto", "lusso", "airbnb"],
  openGraph: {
    title: "Appartamento Lusso Porta Romana | Milano",
    description:
      "Appartamento di lusso a Milano, zona Porta Romana e Bocconi. Contesto esclusivo, finiture di pregio, 3 minuti dalla metro.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c9a96e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
