/**
 * Get the base path for assets (used for GitHub Pages deployment)
 * This is set at build time via environment variable
 */
export function getBasePath(): string {
  // Check environment variable first (set during GitHub Actions build)
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH
  }
  
  // Client-side: check if we're on GitHub Pages
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    if (pathname.startsWith('/khafif')) {
      return '/khafif'
    }
  }
  
  // For local development or if basePath is not needed
  return ''
}

/**
 * Prefix an image path with the base path for GitHub Pages
 */
export function getImagePath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // If basePath exists, prepend it; otherwise use the path as-is
  return basePath ? `${basePath}${cleanPath}` : cleanPath
}

