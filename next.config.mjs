/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: ''
            },
            {
                hostname: '*.googleusercontent.com'
            }
        ]
    }
}

export default nextConfig
