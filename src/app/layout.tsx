import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
})

export const metadata: Metadata = {
  title: "Skyton",
  description: "Skyton",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
