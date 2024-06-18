import { Metadata } from 'next'
import '../styles/globals.scss';
import Providers from '@/components/Providers';
import Navbar from '@/components/navbar/Navbar';
import { Cursor } from './cursor';


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
    <html lang="en">
      <body className={"dark:bg-black bg-gray-50"}>
        <div className='noise dark:noise-dark fixed -z-10 -top-1/2 -right-1/2 -bottom-1/2 -left-1/2 -translate-x-1/2 overflow-hidden w-[200%] h-[200vh]'/>
          <Providers>
            <Cursor/>
            <Navbar/>
            {children}
          </Providers>
        </body>
    </html>
  )
}
