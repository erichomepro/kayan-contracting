/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep all source files in src/
  // Next.js will use app/ directory at project root for routing

  // Transpile GSAP packages
  transpilePackages: ['gsap', '@gsap/react'],

  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
