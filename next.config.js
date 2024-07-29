/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
            port: '',
            pathname: '/*/**',
          },
          {
            protocol: 'https',
            hostname: 'auxdible.me',
            port: '',
            pathname: '/*',
          },
          {
            protocol: 'https',
            hostname: 'auxdibot.xyz',
            port: '',
            pathname: '/*',
          },
          {
            protocol: 'https',
            hostname: process.env.NEXT_PUBLIC_SITE_URL || "auxdible.me",
            port: '',
            pathname: '/*',
          },
          {
            protocol: 'https',
            hostname: `${process.env.S3_BUCKET || "auxdible-blog-post"}.s3.amazonaws.com`,
            port: '',
            pathname: '/*/**',
          },
        ],
      },
}

module.exports = nextConfig
