/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com"
            },
            {
                protocol: 'https',
                hostname: "i.ibb.co"
            },
            {
                protocol: 'https',
                hostname: "ibb.co"
            }
        ]
    }
};

export default nextConfig;
