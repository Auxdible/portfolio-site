import { Metadata } from 'next'
import '@/styles/globals.scss';
import { posts } from '@prisma/client';
import ScrollBar from '@/components/ScrollBar';
  
type LayoutProps = { params: { postId: string }}
export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const postId = params.postId;
    const [post]: posts[] = await fetch(`${process.env.SITE_URL}/api/public/posts?postId=${postId}`).then(async (res) => await res.json().catch(() => [])).catch(() => [])
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
              url: process.env.SITE_URL + "/blog/" + postId,
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
