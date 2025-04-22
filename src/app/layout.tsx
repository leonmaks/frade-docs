import type { Metadata } from "next"
import localFont from "next/font/local"

import { APP_NAME } from "@/shared/config/defs"
import { cn } from "@/shared/lib/shadcn-ui-utils"

import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    absolute: APP_NAME
  },
  description: "Documents",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
