import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Gzip/Brotli compress all responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Next/Image: serve modern formats (AVIF → WebP → original)
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Tree-shake heavy packages (experimental in Next 16)
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'gsap',
      'lucide-react',
      'lenis',
    ],
  },

  // Security & performance HTTP headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Long-lived cache for static assets
        source: '/(.*)\\.(woff2|woff|ttf|otf|svg|png|jpg|jpeg|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
