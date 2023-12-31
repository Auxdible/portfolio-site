import { Metadata } from 'next'
import '../styles/globals.scss';

import Providers from '@/components/Providers';
import Navbar from '@/components/navbar/Navbar';
import { Session } from 'next-auth';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Auxdible',
  description: 'The official portfolio site for the Full Stack Developer Auxdible.',
  themeColor: {
    color: "#ee884b"
  },
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,

  }
};


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"dark:bg-black bg-gray-50"}>
          <Providers>
            <Navbar/>
            {children}
          </Providers>
        </body>
    </html>
  )
}
