/**
 * Get the base path for assets (used for GitHub Pages deployment)
 * NEXT_PUBLIC_BASE_PATH is replaced at build time by Next.js
 * In local development, this will be undefined/empty, which is correct
 */
function getBasePathFromEnv(): string {
  // Check if we're in a Node.js environment (server-side or build time)
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH
  }
  return ''
}

/**
 * Get the base path for assets (used for GitHub Pages deployment)
 */
export function getBasePath(): string {
  // First, try to get from environment variable (set during GitHub Actions build)
  const envBasePath = getBasePathFromEnv()
  if (envBasePath && envBasePath.trim() !== '') {
    return envBasePath
  }
  
  // Client-side: check if we're on GitHub Pages by looking at the URL
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    // Only add basePath if we're actually on GitHub Pages (URL contains /khafif)
    if (pathname.startsWith('/khafif')) {
      return '/khafif'
    }
  }
  
  // For local development: no basePath needed
  return ''
}

/**
 * Prefix an image path with the base path for GitHub Pages
 * Works correctly both locally (no basePath) and on GitHub Pages (with basePath)
 * 
 * @param path - Image path (e.g., '/logo.png')
 * @returns Image path with basePath prefix if needed (e.g., '/logo.png' locally, '/khafif/logo.png' on GitHub Pages)
 */
export function getImagePath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // If basePath exists and is not empty, prepend it; otherwise use the path as-is
  if (basePath && basePath.trim() !== '') {
    return `${basePath}${cleanPath}`
  }
  // Local development: return path as-is (e.g., '/logo.png')
  return cleanPath
}

