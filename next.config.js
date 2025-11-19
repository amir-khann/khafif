/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'khafif'

// Always use basePath for GitHub Pages deployment
const basePath = isGithubActions ? `/${repo}` : ''
const assetPrefix = isGithubActions ? `/${repo}/` : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
  trailingSlash: true,
}

module.exports = nextConfig

