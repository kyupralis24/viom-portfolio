import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import AnimatedLoader from '@/components/animated-loader'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Viom Kapur — Portfolio',
    description: 'CS × Finance • AI • Strategy — Interactive Portfolio',
    openGraph: {
        title: 'Viom Kapur — Portfolio',
        description: 'CS × Finance • AI • Strategy — Interactive Portfolio',
        images: ['/og-image.png']
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                {/* Loader animates once on first mount */}
                <AnimatedLoader />
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <Nav />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}