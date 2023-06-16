import { Metadata } from 'next'
import '../styles/globals.scss';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Auxdible',
  description: 'The official portfolio site for the Full Stack Developer Auxdible.',
  themeColor: "#ee884b",
  metadataBase: new URL(process.env.SITE_URL || `https://localhost:${process.env.PORT || 3000}`),
  icons: "/icon.png",
  openGraph: {
    type: "website",
    title: "Auxdible",
    siteName: "Auxdible's Portfolio",
    countryName: "United States",
    description: "The official portfolio site for the Full Stack Developer Auxdible.",
    url: "https://auxdible.me",
    images: "/icon.png"
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"dark:bg-gray-900 bg-gray-50"}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  )
}
