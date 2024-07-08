import { Metadata } from 'next'
import Providers from '@/components/Providers';
import Navbar from '@/components/navbar/Navbar';
import { Cursor } from './cursor';
import { dancingScript, inter, lato, montserrat, raleway, roboto, sourceCodePro } from './fonts';
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
    description: "The official portfolio site for the Full Stack Developer Auxdible.",
    url: "https://auxdible.me",
    images: "/icon.png"
  },
};


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${lato.variable} ${roboto.variable} ${montserrat.variable} ${inter.variable} ${sourceCodePro.variable} ${dancingScript.variable} scroll-smooth`}>
      <body className={"dark:bg-black bg-gray-50"}>
          <Providers>
            <NoiseBackground/>
            <Cursor/>
            <Navbar/>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Providers>
        </body>
    </html>
  )
}
