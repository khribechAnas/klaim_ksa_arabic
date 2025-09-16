import { MetadataRoute } from 'next'
import { getAllRoutes, getBaseUrl } from '@/lib/get-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const currentDate = new Date().toISOString()

  // Dynamically get all routes from the app directory
  const routes = getAllRoutes()

  // Convert routes to sitemap format
  const sitemapEntries: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return sitemapEntries
}