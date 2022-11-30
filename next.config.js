/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets.stickpng.com",
      "links.papareact.com",
      "plataform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ]
  }
}

module.exports = nextConfig
