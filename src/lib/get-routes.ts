import fs from 'fs'
import path from 'path'

export interface RouteInfo {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

/**
 * Recursively scan the app directory to find all page routes
 */
export function getAllRoutes(): RouteInfo[] {
  const routes: RouteInfo[] = []
  const appDir = path.join(process.cwd(), 'src', 'app')

  // Function to recursively scan directories
  function scanDirectory(dir: string, routePath: string = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true })

    for (const item of items) {
      // Skip special Next.js files and directories
      if (
        item.name.startsWith('_') ||
        item.name.startsWith('.') ||
        item.name === 'api' ||
        item.name === 'metadata.ts' ||
        item.name === 'sitemap.ts' ||
        item.name === 'robots.ts' ||
        item.name === 'layout.tsx' ||
        item.name === 'globals.css' ||
        item.name === 'favicon.ico' ||
        item.name === 'opengraph-image.tsx'
      ) {
        continue
      }

      if (item.isDirectory()) {
        const newPath = routePath ? `${routePath}/${item.name}` : `/${item.name}`
        scanDirectory(path.join(dir, item.name), newPath)
      } else if (item.name === 'page.tsx' || item.name === 'page.ts' || item.name === 'page.jsx' || item.name === 'page.js') {
        // Found a page file
        const route = routePath || '/'

        // Determine priority and change frequency based on route
        let priority = 0.5
        let changeFrequency: RouteInfo['changeFrequency'] = 'weekly'

        if (route === '/') {
          priority = 1.0
          changeFrequency = 'weekly'
        } else if (route.includes('privacy') || route.includes('terms') || route.includes('legal')) {
          priority = 0.3
          changeFrequency = 'yearly'
        } else if (route.includes('blog') || route.includes('news')) {
          priority = 0.7
          changeFrequency = 'daily'
        } else if (route === '/flow' || route === '/estate' || route === '/health') {
          priority = 0.8
          changeFrequency = 'monthly'
        }

        routes.push({
          path: route,
          priority,
          changeFrequency
        })
      }
    }
  }

  // Start scanning from the app directory
  scanDirectory(appDir)

  // Sort routes by priority (highest first) and then alphabetically
  routes.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority
    }
    return a.path.localeCompare(b.path)
  })

  return routes
}

/**
 * Get the base URL from environment or fallback
 */
export function getBaseUrl(): string {
  // Check for environment variables first
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Fallback to the production URL
  return 'https://klaim.ai'
}