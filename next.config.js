/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["assets-global.website-files.com" , "neurge.ams3.digitaloceanspaces.com"]
  }
}

module.exports = nextConfig
