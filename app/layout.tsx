import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EuroDreams Schweiz - Offizielle Lotterie | CHBigWin",
  description:
    "Spielen Sie EuroDreams, die offizielle europäische Lotterie in der Schweiz. Jeden Montag neue Gewinnchancen!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
