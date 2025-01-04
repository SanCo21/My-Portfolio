const TerserPlugin = require("terser-webpack-plugin");
/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/MyPortfolio" : "", // Prefix for static assets
  basePath: process.env.NODE_ENV === "production" ? "/MyPortfolio" : "",
  output: "export", // Indicate the static deployment
  // basePath: "/MyPortfolio", // Base path for the application  
  trailingSlash: true, // Add trailing slash to the end of URLs
  images: {
    unoptimized: true, // Deactivate image optimization for static deployment
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = false; // Deactivate code minification
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            output: {
              ascii_only: true,
            },
          },
        }),
      ];
    }
    return config;
  },
};

module.exports = nextConfig;