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
            hostname: 'bot.auxdible.me',
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
            hostname: `${process.env.S3_BUCKET}.s3.amazonaws.com`,
            port: '',
            pathname: '/*/**',
          },
        ],
      },
}

module.exports = nextConfig
