/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/product/deleted_forever',
                destination: '/product',
                permanent: true,
            },
            {
                source: '/product/deleted_temp',
                destination: '/product',
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/samplePage',
                destination: '/about/sample/me',
            },
            {
                source: '/items/:slug',
                destination: '/product/:slug',
            },
        ];
    },
};

module.exports = nextConfig;
