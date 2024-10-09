/** @type {import('next').NextConfig} */
const appUrl = 'https://agro-fusion.vercel.app/api/humidity/';

const nextConfig = {

    swcMinify: true,
    images: {
        unoptimized: true,
    },
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: appUrl,
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Content-Type, Authorization",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
