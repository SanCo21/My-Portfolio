/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio" : "", // Prefix for static assets
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  output: "export", // Indicate the static deployment
  // basePath: "/Portfolio", // Base path for the application
  trailingSlash: true, // Add trailing slash to the end of URLs
  images: {
    unoptimized: true, // Deactivate image optimization for static deployment
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = false; // Deactivate code minification
    }
    // config.module.rules.push(
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: { loader: "babel-loader", options: { presets: ["next/babel"] } },
    //   },
    //   { test: /\.css$/, use: ["style-loader", "css-loader"] }
    // );
    return config;
  },
};
module.exports = nextConfig;
