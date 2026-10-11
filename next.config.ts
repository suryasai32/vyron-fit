// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     agentFeedback: true,
//   },
//   cacheComponents: true,
//   partialPrefetching: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to build a static HTML/CSS/JS site instead of a Node server
  output: 'export',
  
  // Disables Next.js server-side image optimization, which is required for static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;