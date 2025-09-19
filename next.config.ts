/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["miro.medium.com"],
    },
    eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
staticPageGenerationTimeout: 240,
};


export default nextConfig;
