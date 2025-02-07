/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.adidas.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;
