import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["images.unsplash.com", "assets.aceternity.com"], // Add allowed domains
    },
    typescript: {
        ignoreBuildErrors: true, // Ignore type checking during build
    },
    eslint: {
        // Set to false to disable ESLint checks
        ignoreDuringBuilds: true,
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            // Example: disable Terser compression plugin
            config.optimization.minimizer = [];
        }
        return config;
    },
};

export default nextConfig;
