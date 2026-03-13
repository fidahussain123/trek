import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "STR Adventures | Kashmir & Ladakh Treks — Sky · Terrain · Rapids",
  description:
    "Discover the best trekking experiences in Kashmir and Ladakh with STR Adventures. Expert-guided treks, small groups, unparalleled Himalayan wilderness.",
  keywords:
    "Kashmir trek, Ladakh trek, Great Lakes Kashmir, Chadar trek, Markha Valley, STR Adventures, Himalayan trekking",
  openGraph: {
    title: "STR Adventures",
    description: "Kashmir & Ladakh Trekking — Sky | Terrain | Rapids",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="grain antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
