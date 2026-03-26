/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep all source files in src/
  // Next.js will use app/ directory at project root for routing

  // Transpile GSAP packages
  transpilePackages: ['gsap', '@gsap/react'],

  // Allow images from any source (existing public/ images)
  images: {
    unoptimized: true,
  },
}

export default nextConfig
