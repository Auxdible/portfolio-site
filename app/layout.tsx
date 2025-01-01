import { Metadata, Viewport } from 'next'
import Providers from '@/components/Providers';
import Navbar from '@/components/navbar/Navbar';
import {  CursorContainer } from './cursor';
import { inter, lato, montserrat, raleway, roboto } from './fonts';
import NoiseBackground from '@/components/NoiseBackground';
import Loading from './loading';
import { Suspense } from 'react';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Auxdible',
  description: 'The official portfolio site for the Full Stack Developer Auxdible.',
  metadataBase: new URL(process.env.SITE_URL || `https://localhost:${process.env.PORT || 3000}`),
  icons: "/icon.png",
  openGraph: {
    type: "website",
    title: "Auxdible",
    siteName: "Auxdible's Portfolio",
    countryName: "United States",
    description: "The official portfolio site and blog for the Full Stack Developer Auxdible, aka. Steven Primeaux.\n\n💻 Full Stack Developer\n☕ Coffee Lover\n☁️ AWS Certified Developer Associate, Cloud Practicioner",
    url: "https://auxdible.me",
    images: "/icon.png",
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffa800",
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${lato.variable} ${roboto.variable} ${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body className={"dark:bg-black bg-gray-50"}>
          <Providers>
            <CursorContainer/>
            <Navbar/>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Providers>
        </body>
    </html>
  )
}
