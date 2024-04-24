import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "../provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "User Wallet",
    description: "let's transfer wallte",
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <Providers>
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    )
}
