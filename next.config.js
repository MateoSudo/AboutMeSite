/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Fix the experimental options by removing invalid keys
  experimental: {
    serverComponentsExternalPackages: []
    // Removed 'appDir' as it's no longer experimental
    // Removed 'serverActions' with incorrect boolean value
  }
};

export default config;
