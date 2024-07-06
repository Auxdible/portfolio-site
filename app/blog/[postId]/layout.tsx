import { Metadata } from 'next'
import '@/styles/globals.scss';
import ScrollBar from '@/components/blog/posts/ScrollBar';
import { getPostContent } from '@/lib/clients/s3';
  
type LayoutProps = { params: { postId: string }}
export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const postId = params.postId;
    const post = await getPostContent(postId);
    const metadata = {
        ...(post ? {
          title: post.title,
          description: post.description,
          openGraph: {
              type: "website",
              title: post.title,
              siteName: "Auxdible's Portfolio",
              countryName: "United States",
              description: post.description,
              url: process.env.NEXT_PUBLIC_SITE_URL + "/blog/" + postId,
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
