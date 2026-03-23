const CACHE_NAME = 'hak-pwa-v2'
const APP_SHELL = [
  '/',
  '/app.webmanifest',
  '/static/tv-home.css',
  '/static/tv-home.js',
  '/static/player-app.bundle.js',
  '/static/pwa-icon-192.png',
  '/static/pwa-icon-512.png',
  '/static/pwa-icon-192.svg',
  '/static/pwa-icon-512.svg',
  '/static/fonts/NetflixSans-Light.woff2',
  '/static/fonts/NetflixSans-Regular.woff2',
  '/static/fonts/NetflixSans-Medium.woff2',
  '/static/fonts/NetflixSans-Bold.woff2',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key === CACHE_NAME) return Promise.resolve()
          return caches.delete(key)
        })
      )
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, '/'))
    return
  }

  if (url.pathname.startsWith('/static/') || url.pathname === '/app.webmanifest') {
    event.respondWith(cacheFirst(request))
    return
  }

  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request))
  }
})

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request)
  if (cached) return cached

  const response = await fetch(request)
  if (response && response.ok) {
    cache.put(request, response.clone())
  }
  return response
}

async function networkFirst(request, fallbackUrl = '') {
  const cache = await caches.open(CACHE_NAME)
  try {
    const response = await fetch(request)
    if (response && response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (_error) {
    const cached = await cache.match(request)
    if (cached) return cached
    if (fallbackUrl) {
      const fallback = await cache.match(fallbackUrl)
      if (fallback) return fallback
    }
    throw _error
  }
}
