import { Metadata } from 'next'
import '@/styles/globals.scss';
import { posts } from '@prisma/client';
import ScrollBar from '@/components/ScrollBar';
  
type LayoutProps = { params: { post_id: string }}
export async function generateMetadata({ params }: LayoutProps, parent: Metadata): Promise<Metadata> {
    const post_id = params.post_id;
    const [post]: posts[] = await fetch(`${process.env.SITE_URL}/api/posts?post_id=${post_id}`).then(async (res) => await res.json().catch(() => [])).catch(() => [])
    const metadata = {
        ...(post ? {
          title: post.post_name,
          description: post.post_description,
          openGraph: {
              type: "website",
              title: post.post_name,
              siteName: "Auxdible's Portfolio",
              countryName: "United States",
              description: post.post_description,
              url: process.env.SITE_URL + "/blog/" + post_id,
          }
        } : {})
      };
    return metadata;
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
    
  return (<>
    <ScrollBar/> 
    {children}
    </>)
}
