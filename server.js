const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { Readable } = require('node:stream');
const vm = require('node:vm');
const { performance } = require('node:perf_hooks');
const { TextEncoder, TextDecoder } = require('node:util');
const { webcrypto } = require('node:crypto');
const sodium = require('libsodium-wrappers');

function loadDotEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;

  const source = fs.readFileSync(envPath, 'utf8');
  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const match = rawLine.match(/^\s*([A-Za-z0-9_.-]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;

    let value = match[2] || '';
    if ((value.startsWith('\"') && value.endsWith('\"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (process.env[match[1]] == null) {
      process.env[match[1]] = value;
    }
  }
}

loadDotEnv();

const PORT = Number(process.env.PORT || 4100);
const HOST = (process.env.HOST || '127.0.0.1').trim() || '127.0.0.1';
const VIDLINK_BASE = (process.env.VIDLINK_BASE || 'https://vidlink.pro').replace(/\/$/, '');
const DEFAULT_USER_AGENT =
  process.env.USER_AGENT ||
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36';
const BOOTSTRAP_TIMEOUT_MS = Number(process.env.BOOTSTRAP_TIMEOUT_MS || 10000);
const REQUEST_TIMEOUT_MS = Number(process.env.REQUEST_TIMEOUT_MS || 20000);
const STREAM_PROXY_ENABLED = parseBoolean(process.env.STREAM_PROXY_ENABLED, true);
const STATIC_ROOT = path.join(__dirname, 'public');
const STATIC_MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.otf': 'font/otf',
};
const TMDB_API_KEY = (process.env.TMDB_API_KEY || '').trim();
const TMDB_API_BASE = (process.env.TMDB_API_BASE || 'https://api.themoviedb.org/3').replace(/\/$/, '');
const TMDB_IMAGE_BASE = (process.env.TMDB_IMAGE_BASE || 'https://image.tmdb.org/t/p').replace(/\/$/, '');
const TMDB_LANGUAGE = process.env.TMDB_LANGUAGE || 'en-US';
const TMDB_REGION = process.env.TMDB_REGION || 'US';
const CATALOG_CACHE_MS = Number(process.env.CATALOG_CACHE_MS || 300000);
const DETAILS_CACHE_MS = Number(process.env.DETAILS_CACHE_MS || 300000);
const SEARCH_CACHE_MS = Number(process.env.SEARCH_CACHE_MS || 120000);
const NAV_ITEMS = [
  { label: 'Search', target: 'search', icon: 'search' },
  { label: 'Home', target: 'home', icon: 'home' },
];
const TMDB_GENRE_LOOKUP = {
  movie: {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    878: 'Sci-Fi',
    9648: 'Mystery',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
  },
  tv: {
    16: 'Animation',
    18: 'Drama',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    9648: 'Mystery',
    10751: 'Family',
    10759: 'Action',
    10762: 'Kids',
    10765: 'Sci-Fi',
    10766: 'Soap',
    10768: 'War',
  },
};

function genreNamesFromIds(type, ids = []) {
  const lookup = TMDB_GENRE_LOOKUP[type] || {};
  return ids
    .map((id) => lookup[id])
    .filter(Boolean)
    .slice(0, 4);
}
const HOME_ROWS = [
  { id: 'next-watch', title: 'Your Next Watch', subtitle: 'Fresh series picks for a couch-first home.', path: '/trending/tv/week', type: 'tv' },
  { id: 'my-list', title: 'My List', subtitle: 'Movie-forward picks with direct playback links.', path: '/movie/popular', type: 'movie' },
  { id: 'top-searches', title: 'Top Searches', subtitle: 'What people are opening right now.', path: '/trending/all/day', type: 'multi' },
];
let catalogCache = null;
const detailCache = new Map();
const searchCache = new Map();

let tokenEnginePromise = null;
let tokenRuntimePromise = null;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseBoolean(value, fallback = false) {
  if (value == null) return fallback;
  const normalized = String(value).trim().toLowerCase();
  return normalized === '1' || normalized === 'true' || normalized === 'yes' || normalized === 'on';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function serializeForScript(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

function installBrowserLikeGlobals() {
  globalThis.window = globalThis;
  globalThis.self = globalThis;
  globalThis.global = globalThis;
  globalThis.crypto = globalThis.crypto || webcrypto;
  globalThis.performance = globalThis.performance || performance;
  globalThis.TextEncoder = globalThis.TextEncoder || TextEncoder;
  globalThis.TextDecoder = globalThis.TextDecoder || TextDecoder;
  globalThis.navigator = globalThis.navigator || {
    userAgent: DEFAULT_USER_AGENT,
    language: 'en-US',
    languages: ['en-US', 'en'],
    platform: 'Win32',
  };
  globalThis.location = globalThis.location || new URL(VIDLINK_BASE);
  globalThis.atob =
    globalThis.atob ||
    ((value) => Buffer.from(String(value), 'base64').toString('binary'));
  globalThis.btoa =
    globalThis.btoa ||
    ((value) => Buffer.from(String(value), 'binary').toString('base64'));
}

async function fetchWithTimeout(url, options = {}, timeoutMs = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'user-agent': DEFAULT_USER_AGENT,
        accept: '*/*',
        ...options.headers,
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function loadVidlinkRuntime() {
  installBrowserLikeGlobals();

  if (typeof globalThis.Dm === 'function') {
    return globalThis.Dm;
  }

  if (!tokenRuntimePromise) {
    tokenRuntimePromise = (async () => {
      const response = await fetchWithTimeout(`${VIDLINK_BASE}/script.js`, {
        headers: {
          referer: `${VIDLINK_BASE}/`,
          origin: VIDLINK_BASE,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to load script.js (${response.status})`);
      }

      const source = await response.text();
      vm.runInThisContext(source, { filename: 'vidlink-script.js' });

      if (typeof globalThis.Dm !== 'function') {
        throw new Error('script.js loaded but globalThis.Dm was not registered');
      }

      return globalThis.Dm;
    })().catch((error) => {
      tokenRuntimePromise = null;
      throw error;
    });
  }

  return tokenRuntimePromise;
}

async function startTokenEngine() {
  installBrowserLikeGlobals();
  await sodium.ready;
  globalThis.sodium = sodium;

  const Dm = await loadVidlinkRuntime();
  const go = new Dm();

  const wasmResponse = await fetchWithTimeout(`${VIDLINK_BASE}/fu.wasm`, {
    headers: {
      referer: `${VIDLINK_BASE}/`,
      origin: VIDLINK_BASE,
    },
  });

  if (!wasmResponse.ok) {
    throw new Error(`Failed to load fu.wasm (${wasmResponse.status})`);
  }

  const wasmBinary = await wasmResponse.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(wasmBinary, go.importObject);

  go.run(instance).catch((error) => {
    if (typeof globalThis.getAdv !== 'function') {
      console.error('[vidlink] fu.wasm runtime failed before getAdv was ready:', error);
    }
  });

  const deadline = Date.now() + BOOTSTRAP_TIMEOUT_MS;
  while (Date.now() < deadline) {
    if (typeof globalThis.getAdv === 'function') {
      return globalThis.getAdv;
    }
    await delay(25);
  }

  throw new Error('fu.wasm initialized but getAdv was not registered in time');
}

async function ensureTokenFunction() {
  if (typeof globalThis.getAdv === 'function') {
    return globalThis.getAdv;
  }

  if (!tokenEnginePromise) {
    tokenEnginePromise = startTokenEngine().catch((error) => {
      tokenEnginePromise = null;
      throw error;
    });
  }

  await tokenEnginePromise;

  if (typeof globalThis.getAdv !== 'function') {
    throw new Error('getAdv is unavailable after bootstrapping fu.wasm');
  }

  return globalThis.getAdv;
}

function buildPageUrl({ tmdbId, type, season, episode }) {
  if (type === 'tv') {
    return `${VIDLINK_BASE}/tv/${tmdbId}/${season}/${episode}?primaryColor=3b82f6&autoplay=true`;
  }

  return `${VIDLINK_BASE}/movie/${tmdbId}?primaryColor=3b82f6&autoplay=true`;
}

function buildApiUrl({ token, type, season, episode, multiLang }) {
  const suffix = `?multiLang=${multiLang ? 1 : 0}`;

  if (type === 'tv') {
    return `${VIDLINK_BASE}/api/b/tv/${encodeURIComponent(token)}/${season}/${episode}${suffix}`;
  }

  return `${VIDLINK_BASE}/api/b/movie/${encodeURIComponent(token)}${suffix}`;
}

async function fetchStreamPayload({ tmdbId, type, season, episode, multiLang, debug }) {
  const trace = [];
  const getAdv = await ensureTokenFunction();
  const token = getAdv(String(tmdbId));

  trace.push({
    type: 'token',
    tmdbId: String(tmdbId),
    tokenPreview: typeof token === 'string' ? `${token.slice(0, 24)}...` : null,
  });

  if (!token || typeof token !== 'string') {
    throw new Error('getAdv did not return a valid token');
  }

  const pageUrl = buildPageUrl({ tmdbId, type, season, episode });
  const apiUrl = buildApiUrl({ token, type, season, episode, multiLang });

  const response = await fetchWithTimeout(apiUrl, {
    headers: {
      accept: 'application/json, text/plain, */*',
      referer: pageUrl,
      origin: VIDLINK_BASE,
    },
  });

  const text = await response.text();
  trace.push({
    type: 'api',
    url: apiUrl,
    status: response.status,
    contentType: response.headers.get('content-type') || null,
  });

  if (!response.ok) {
    throw new Error(`VidLink API returned ${response.status}: ${text.slice(0, 200)}`);
  }

  let payload;
  try {
    payload = JSON.parse(text);
  } catch (error) {
    throw new Error(`VidLink API did not return valid JSON: ${error.message}`);
  }

  const hlsUrl = payload?.stream?.playlist || null;
  const subtitles = Array.isArray(payload?.stream?.captions)
    ? payload.stream.captions.map((caption) => ({
        url: caption.url || caption.id || null,
        language: caption.language || null,
        type: caption.type || null,
      }))
    : [];

  const result = {
    token,
    page_url: pageUrl,
    api_url: apiUrl,
    source_id: payload?.sourceId || null,
    hls_url: hlsUrl,
    subtitles,
    trace,
  };

  if (debug) {
    result.payload = payload;
  }

  return result;
}

async function validateManifest(url, trace) {
  const response = await fetchWithTimeout(url, {
    headers: {
      referer: `${VIDLINK_BASE}/`,
      origin: VIDLINK_BASE,
    },
  });

  const text = await response.text();
  const looksLikeM3u8 = text.includes('#EXTM3U');

  trace.push({
    type: 'manifest',
    url,
    status: response.status,
    contentType: response.headers.get('content-type') || null,
    looksLikeM3u8,
  });

  if (!response.ok || !looksLikeM3u8) {
    throw new Error(`Manifest validation failed (${response.status})`);
  }

  return {
    status: response.status,
    contentType: response.headers.get('content-type') || null,
  };
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
  });
  response.end(JSON.stringify(payload, null, 2));
}

function sendHtml(response, statusCode, html) {
  response.writeHead(statusCode, {
    'content-type': 'text/html; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
  });
  response.end(html);
}

function createProxyUrl(targetUrl, referer = '') {
  const params = new URLSearchParams({ url: String(targetUrl) });
  if (referer) {
    params.set('ref', String(referer));
  }
  return `/proxy/media?${params.toString()}`;
}

function normalizeProxyTarget(rawUrl) {
  if (!rawUrl) {
    throw new Error('url is required');
  }

  let targetUrl;
  try {
    targetUrl = new URL(String(rawUrl));
  } catch (_error) {
    throw new Error('url must be an absolute http(s) URL');
  }

  if (targetUrl.protocol !== 'http:' && targetUrl.protocol !== 'https:') {
    throw new Error('url must use http or https');
  }

  return targetUrl;
}

function resolveAbsoluteUrl(rawValue, baseUrl) {
  try {
    return new URL(String(rawValue), baseUrl).toString();
  } catch (_error) {
    return String(rawValue);
  }
}

function rewriteManifestLine(line, manifestUrl, upstreamReferer = '') {
  const trimmed = line.trim();
  if (!trimmed) return line;
  const nextReferer = upstreamReferer || manifestUrl;

  if (trimmed.startsWith('#')) {
    return line.replace(/URI="([^"]+)"/g, (_match, rawValue) => {
      const absoluteUrl = resolveAbsoluteUrl(rawValue, manifestUrl);
      return `URI="${createProxyUrl(absoluteUrl, nextReferer)}"`;
    });
  }

  const absoluteUrl = resolveAbsoluteUrl(trimmed, manifestUrl);
  return createProxyUrl(absoluteUrl, nextReferer);
}

function rewriteManifest(text, manifestUrl, upstreamReferer = '') {
  return text
    .split(/\r?\n/)
    .map((line) => rewriteManifestLine(line, manifestUrl, upstreamReferer))
    .join('\n');
}

function shouldRewriteManifest(targetUrl, contentType) {
  const normalizedType = String(contentType || '').toLowerCase();
  return (
    targetUrl.pathname.toLowerCase().endsWith('.m3u8') ||
    normalizedType.includes('mpegurl') ||
    normalizedType.includes('vnd.apple.mpegurl')
  );
}

function buildProxyHeaders(request, targetUrl, referer = '') {
  const headers = {
    accept: request.headers.accept || '*/*',
  };

  if (request.headers.range) {
    headers.range = request.headers.range;
  }

  if (referer) {
    headers.referer = referer;
    try {
      headers.origin = new URL(referer).origin;
    } catch (_error) {
      headers.origin = targetUrl.origin;
    }
  } else {
    headers.referer = `${targetUrl.origin}/`;
    headers.origin = targetUrl.origin;
  }

  return headers;
}

function copyProxyHeader(sourceHeaders, targetHeaders, name) {
  const value = sourceHeaders.get(name);
  if (value) {
    targetHeaders[name] = value;
  }
}

async function handleMediaProxy(request, response, requestUrl) {
  const targetUrl = normalizeProxyTarget(requestUrl.searchParams.get('url'));
  const referer = requestUrl.searchParams.get('ref') || '';
  const upstream = await fetchWithTimeout(targetUrl, {
    headers: buildProxyHeaders(request, targetUrl, referer),
  });

  const contentType = upstream.headers.get('content-type') || '';
  if (!upstream.ok) {
    console.warn(`[proxy] upstream ${upstream.status} for ${targetUrl.toString()} (ref: ${referer || 'none'})`);
  }

  if (shouldRewriteManifest(targetUrl, contentType)) {
    const manifest = await upstream.text();
    const rewrittenManifest = upstream.ok ? rewriteManifest(manifest, targetUrl.toString(), referer) : manifest;

    response.writeHead(upstream.status, {
      'content-type': contentType || 'application/vnd.apple.mpegurl; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'content-type, range',
    });
    response.end(rewrittenManifest);
    return;
  }

  const responseHeaders = {
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type, range',
  };
  copyProxyHeader(upstream.headers, responseHeaders, 'content-type');
  copyProxyHeader(upstream.headers, responseHeaders, 'content-range');
  copyProxyHeader(upstream.headers, responseHeaders, 'accept-ranges');
  copyProxyHeader(upstream.headers, responseHeaders, 'etag');
  copyProxyHeader(upstream.headers, responseHeaders, 'last-modified');

  response.writeHead(upstream.status, responseHeaders);
  if (!upstream.body) {
    response.end();
    return;
  }

  Readable.fromWeb(upstream.body).pipe(response);
}

function normalizeParams(searchParams) {
  const tmdbId = searchParams.get('tmdb_id') || searchParams.get('id');
  const type = (searchParams.get('type') || 'movie').toLowerCase();
  const season = searchParams.get('season');
  const episode = searchParams.get('episode');
  const multiLang = parseBoolean(searchParams.get('multiLang') || searchParams.get('multi_lang'), false);
  const debug = parseBoolean(searchParams.get('debug'), false);
  const validate = !parseBoolean(searchParams.get('no_validate') || searchParams.get('skip_validate'), false);
  const direct = parseBoolean(searchParams.get('direct'), false);
  const proxy = direct ? false : parseBoolean(searchParams.get('proxy'), STREAM_PROXY_ENABLED);

  if (!tmdbId || !/^\d+$/.test(String(tmdbId))) {
    throw new Error('tmdb_id is required and must be numeric');
  }

  if (type !== 'movie' && type !== 'tv') {
    throw new Error("type must be 'movie' or 'tv'");
  }

  if (type === 'tv') {
    if (!season || !/^\d+$/.test(String(season))) {
      throw new Error('season is required for type=tv and must be numeric');
    }

    if (!episode || !/^\d+$/.test(String(episode))) {
      throw new Error('episode is required for type=tv and must be numeric');
    }
  }

  return {
    tmdbId: String(tmdbId),
    type,
    season: season ? String(season) : null,
    episode: episode ? String(episode) : null,
    multiLang,
    debug,
    validate,
    proxy,
  };
}

function titleKey(type, tmdbId) {
  return `${type}:${tmdbId}`;
}

function buildPlayerHref({ tmdbId, type, season = 1, episode = 1 }) {
  const params = new URLSearchParams({ tmdb_id: String(tmdbId), type });
  params.set('multiLang', '1');
  if (type === 'tv') {
    params.set('season', String(season));
    params.set('episode', String(episode));
  }
  return `/player?${params.toString()}`;
}

function artPalette(seed) {
  const palettes = [
    { start: '#0f172a', end: '#1d4ed8', accent: '#93c5fd' },
    { start: '#1f0a0f', end: '#e50914', accent: '#fca5a5' },
    { start: '#10261d', end: '#10b981', accent: '#86efac' },
    { start: '#271239', end: '#8b5cf6', accent: '#d8b4fe' },
    { start: '#36210a', end: '#f59e0b', accent: '#fde68a' },
    { start: '#172033', end: '#334155', accent: '#7dd3fc' },
  ];
  return palettes[Math.abs(Number(seed) || 0) % palettes.length];
}

function tmdbImage(pathname, size = 'w780') {
  return pathname ? `${TMDB_IMAGE_BASE}/${size}${pathname}` : '';
}

function createFallbackEpisodes(title, runtimeLabel, count) {
  const beats = [
    'A coded signal changes the rules of the town overnight.',
    'An uneasy alliance forms before the next outage hits.',
    'A clue hidden in plain sight pulls the team deeper in.',
    'The quietest character makes the boldest move yet.',
    'A close call forces everyone to reveal what they know.',
    'The last message reframes everything that came before.',
  ];

  return Array.from({ length: count }, (_, index) => ({
    episodeNumber: index + 1,
    name: `Episode ${index + 1}`,
    overview: `${title}: ${beats[index % beats.length]}`,
    runtimeLabel,
  }));
}

function buildFallbackLibrary() {
  return [
    {
      tmdbId: 900001,
      type: 'tv',
      title: 'Signal House',
      year: '2026',
      rating: 'TV-14',
      matchPercent: 98,
      quality: 'HD',
      typeLabel: 'Series',
      seasonLabel: '2 Seasons',
      overview: "A gifted teen uncovers a weather station that has been broadcasting the town's future in fragments.",
      shortSynopsis: 'Mystery, family stakes, and fast-start episodes built for a couch-first browse.',
      cast: ['Mara Flores', 'Julian Cross', 'Avery Chen'],
      genres: ['Sci-Fi', 'Drama', 'Mystery'],
      art: artPalette(1),
      defaultSeason: 1,
      seasonOptions: [{ seasonNumber: 1 }, { seasonNumber: 2 }],
      episodesBySeason: {
        1: createFallbackEpisodes('Signal House', '46m', 6),
        2: createFallbackEpisodes('Signal House', '44m', 4),
      },
    },
    {
      tmdbId: 900002,
      type: 'movie',
      title: 'Velvet Run',
      year: '2025',
      rating: 'PG-13',
      matchPercent: 94,
      quality: '4K',
      typeLabel: 'Movie',
      runtimeLabel: '1h 58m',
      overview: 'A courier with one night left in the city discovers the final package is a map to a missing witness.',
      shortSynopsis: 'A propulsive thriller with a glossy late-night look.',
      cast: ['Nico Hale', 'Tia Mercer', 'Dev Shah'],
      genres: ['Thriller', 'Action'],
      art: artPalette(2),
    },
    {
      tmdbId: 900003,
      type: 'movie',
      title: 'Old Harbor',
      year: '2024',
      rating: 'R',
      matchPercent: 91,
      quality: 'HD',
      typeLabel: 'Movie',
      runtimeLabel: '2h 04m',
      overview: 'Returning home for one weekend drags a burned-out journalist into a family deal that never really ended.',
      shortSynopsis: 'Brooding coastal crime drama with a long tail of consequences.',
      cast: ['Lena Park', 'Soren Pike', 'Ivy Torres'],
      genres: ['Crime', 'Drama'],
      art: artPalette(3),
    },
    {
      tmdbId: 900004,
      type: 'tv',
      title: 'Northbound',
      year: '2025',
      rating: 'TV-16',
      matchPercent: 96,
      quality: 'HD',
      typeLabel: 'Series',
      seasonLabel: '1 Season',
      overview: 'A rescue train crossing frozen territory becomes a moving city with no way back.',
      shortSynopsis: 'Lean survival storytelling designed for quick episode starts.',
      cast: ['Sami Reed', 'Jon Park', 'Elise Ward'],
      genres: ['Adventure', 'Drama'],
      art: artPalette(4),
      defaultSeason: 1,
      seasonOptions: [{ seasonNumber: 1 }],
      episodesBySeason: {
        1: createFallbackEpisodes('Northbound', '49m', 5),
      },
    },
    {
      tmdbId: 900005,
      type: 'movie',
      title: 'Copper Sky',
      year: '2026',
      rating: 'PG-13',
      matchPercent: 89,
      quality: '4K',
      typeLabel: 'Movie',
      runtimeLabel: '1h 47m',
      overview: 'An aerial photographer accidentally documents a secret launch site and becomes the next target.',
      shortSynopsis: 'High-altitude suspense with a cleaner, brighter visual palette.',
      cast: ['Rae Jordan', 'Miles Kwan', 'Clara West'],
      genres: ['Action', 'Mystery'],
      art: artPalette(5),
    },
    {
      tmdbId: 900006,
      type: 'tv',
      title: 'Static Hearts',
      year: '2024',
      rating: 'TV-PG',
      matchPercent: 92,
      quality: 'HD',
      typeLabel: 'Series',
      seasonLabel: '1 Season',
      overview: 'A tiny radio station becomes the emotional lifeline for a city learning how to restart.',
      shortSynopsis: 'Warm ensemble storytelling with shorter episodes and gentle stakes.',
      cast: ['Mina Cruz', 'Owen Blair', 'Gia Santos'],
      genres: ['Romance', 'Drama'],
      art: artPalette(6),
      defaultSeason: 1,
      seasonOptions: [{ seasonNumber: 1 }],
      episodesBySeason: {
        1: createFallbackEpisodes('Static Hearts', '38m', 5),
      },
    },
  ].map((item) => ({
    ...item,
    key: titleKey(item.type, item.tmdbId),
    playHref: buildPlayerHref({ tmdbId: item.tmdbId, type: item.type }),
  }));
}

const FALLBACK_LIBRARY = buildFallbackLibrary();
const FALLBACK_INDEX = new Map(FALLBACK_LIBRARY.map((item) => [item.key, item]));

function fallbackSummary(item) {
  return {
    key: item.key,
    tmdbId: item.tmdbId,
    type: item.type,
    title: item.title,
    overview: item.overview,
    genres: item.genres || [],
    year: item.year,
    rating: item.rating,
    matchPercent: item.matchPercent,
    typeLabel: item.typeLabel,
    seasonLabel: item.seasonLabel || '',
    runtimeLabel: item.runtimeLabel || '',
    badge: item.rating,
    eyebrow: item.genres && item.genres.length ? `${item.genres[0]} spotlight` : 'Featured Tonight',
    playHref: item.type === 'tv'
      ? buildPlayerHref({ tmdbId: item.tmdbId, type: item.type, season: item.defaultSeason || 1, episode: 1 })
      : buildPlayerHref({ tmdbId: item.tmdbId, type: item.type }),
    art: item.art,
    backdropUrl: item.backdropUrl || '',
    cardImage: item.cardImage || '',
  };
}

function buildFallbackCatalog(reason = '') {
  const pick = (...ids) => ids.map((id) => fallbackSummary(FALLBACK_INDEX.get(id))).filter(Boolean);
  const hero = fallbackSummary(FALLBACK_LIBRARY[0]);
  return {
    source: 'fallback',
    sourceLabel: reason ? 'Demo catalog mode' : 'Fallback catalog',
    nav: NAV_ITEMS,
    hero,
    sections: [
      { id: 'next-watch', title: 'Your Next Watch', subtitle: 'Fresh series picks for a couch-first home.', items: pick('tv:900001', 'tv:900004', 'tv:900006', 'movie:900002', 'movie:900003') },
      { id: 'my-list', title: 'My List', subtitle: 'Movie-forward picks with direct playback links.', items: pick('movie:900002', 'movie:900003', 'movie:900005', 'tv:900004', 'tv:900006') },
      { id: 'top-searches', title: 'Top Searches', subtitle: 'What people are opening right now.', items: pick('tv:900001', 'movie:900005', 'movie:900003', 'tv:900004', 'movie:900002') },
    ],
  };
}

function buildFallbackDetails(type, tmdbId, requestedSeason = 1) {
  const item = FALLBACK_INDEX.get(titleKey(type, tmdbId));
  if (!item) {
    throw new Error('Title not found in fallback catalog');
  }

  const selectedSeason = type === 'tv'
    ? (item.seasonOptions.find((entry) => entry.seasonNumber === requestedSeason)?.seasonNumber || item.seasonOptions[0]?.seasonNumber || 1)
    : null;

  const episodes = type === 'tv'
    ? (item.episodesBySeason[selectedSeason] || []).map((episode, index) => ({
        ...episode,
        art: artPalette(tmdbId + index + 7),
        playHref: buildPlayerHref({ tmdbId, type, season: selectedSeason, episode: episode.episodeNumber }),
      }))
    : [];

  return {
    ...fallbackSummary(item),
    shortSynopsis: item.shortSynopsis || item.overview,
    quality: item.quality || 'HD',
    cast: item.cast || [],
    genres: item.genres || [],
    totalSeasons: type === 'tv' ? Math.max(1, item.seasonOptions?.length || 1) : 0,
    seasonOptions: item.seasonOptions || [],
    selectedSeason,
    hasPreviousSeason: type === 'tv' && selectedSeason > (item.seasonOptions[0]?.seasonNumber || 1),
    hasNextSeason: type === 'tv' && selectedSeason < (item.seasonOptions[item.seasonOptions.length - 1]?.seasonNumber || selectedSeason),
    episodes,
    playHref: type === 'tv'
      ? buildPlayerHref({ tmdbId, type, season: selectedSeason, episode: 1 })
      : buildPlayerHref({ tmdbId, type }),
  };
}

function readCache(entry) {
  if (!entry || entry.expiresAt <= Date.now()) return null;
  return entry.data;
}

function writeCache(ttlMs, data) {
  return { expiresAt: Date.now() + ttlMs, data };
}

function normalizeCatalogItem(entry, fallbackType = 'movie', seed = 0) {
  const type = entry.media_type === 'movie' || entry.media_type === 'tv'
    ? entry.media_type
    : fallbackType;
  if (type !== 'movie' && type !== 'tv') return null;

  const tmdbId = Number(entry.id);
  const genres = genreNamesFromIds(type, entry.genre_ids || []);
  return {
    key: titleKey(type, tmdbId),
    tmdbId,
    type,
    title: entry.title || entry.name || 'Untitled',
    overview: entry.overview || '',
    genres,
    year: String(entry.release_date || entry.first_air_date || '').slice(0, 4) || '',
    rating: type === 'tv' ? 'TV' : 'Movie',
    matchPercent: entry.vote_average ? Math.max(70, Math.min(99, Math.round(entry.vote_average * 10))) : null,
    typeLabel: type === 'tv' ? 'Series' : 'Movie',
    seasonLabel: '',
    runtimeLabel: '',
    badge: type === 'tv' ? 'TV' : 'Film',
    eyebrow: genres[0] ? `${genres[0]} spotlight` : type === 'tv' ? 'Series spotlight' : 'Movie night',
    playHref: type === 'tv'
      ? buildPlayerHref({ tmdbId, type, season: 1, episode: 1 })
      : buildPlayerHref({ tmdbId, type }),
    art: artPalette(tmdbId || seed),
    backdropUrl: tmdbImage(entry.backdrop_path, 'w1280'),
    cardImage: tmdbImage(entry.poster_path, 'w780') || tmdbImage(entry.backdrop_path, 'w780'),
    defaultSeason: 1,
  };
}

function movieRating(detail) {
  const bucket = (detail.release_dates?.results || []).find((entry) => entry.iso_3166_1 === TMDB_REGION);
  return bucket?.release_dates?.find((entry) => entry.certification)?.certification || 'PG-13';
}

function tvRating(detail) {
  const bucket = (detail.content_ratings?.results || []).find((entry) => entry.iso_3166_1 === TMDB_REGION);
  return bucket?.rating || 'TV-14';
}

function renderHomePage() {
  const appConfig = serializeForScript({ catalogUrl: '/api/catalog', detailsUrl: '/api/details', searchUrl: '/api/search' });
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#0b0b0b" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <title>HAK TV</title>
  <link rel="manifest" href="/app.webmanifest" />
  <link rel="icon" href="/static/pwa-icon-192.png" type="image/png" />
  <link rel="apple-touch-icon" href="/static/pwa-icon-192.png" />
  <link rel="stylesheet" href="/static/tv-home.css" />
</head>
<body>
  <div class="tv-app" data-app-root></div>
  <div class="details-root" id="details-root"></div>
  <script>window.__ARRWA_APP_CONFIG__ = ${appConfig}</script>
  <script src="/static/tv-home.js" defer></script>
</body>
</html>`;
}

function sendStaticAsset(response, requestPath, extraHeaders = {}) {
  const relativePath = decodeURIComponent(requestPath.replace(/^\/static\//, ''));
  const assetPath = path.resolve(STATIC_ROOT, relativePath);
  if (!assetPath.startsWith(STATIC_ROOT)) {
    sendJson(response, 404, { success: false, error: 'Asset not found' });
    return;
  }

  try {
    const content = fs.readFileSync(assetPath);
    response.writeHead(200, {
      'content-type': STATIC_MIME_TYPES[path.extname(assetPath)] || 'application/octet-stream',
      ...extraHeaders,
    });
    response.end(content);
  } catch (_error) {
    sendJson(response, 404, { success: false, error: 'Asset not found' });
  }
}
async function fetchTmdbJson(resource, params = {}) {
  if (!TMDB_API_KEY) {
    throw new Error('TMDB_API_KEY is not configured');
  }

  const url = new URL(`${TMDB_API_BASE}${resource}`);
  url.searchParams.set('api_key', TMDB_API_KEY);
  url.searchParams.set('language', TMDB_LANGUAGE);
  url.searchParams.set('region', TMDB_REGION);
  for (const [key, value] of Object.entries(params)) {
    if (value != null && value !== '') {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetchWithTimeout(url.toString(), {
    headers: {
      accept: 'application/json',
    },
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`);
  }

  return JSON.parse(text);
}

function toHero(summary, detail) {
  if (!detail) return summary;
  return {
    ...summary,
    ...detail,
    eyebrow: detail.genres && detail.genres.length ? `${detail.genres[0]} spotlight` : summary.eyebrow,
  };
}

async function buildTmdbCatalog() {
  const rows = await Promise.all(
    HOME_ROWS.map(async (row, index) => {
      const payload = await fetchTmdbJson(row.path);
      const items = (payload.results || [])
        .map((entry, itemIndex) => normalizeCatalogItem(entry, row.type, index * 12 + itemIndex))
        .filter(Boolean)
        .slice(0, 15);

      return {
        id: row.id,
        title: row.title,
        subtitle: row.subtitle,
        items,
      };
    })
  );

  const available = rows.filter((row) => row.items.length);
  if (!available.length) {
    throw new Error('TMDB returned no catalog rows');
  }

  const heroBase = available[0].items.find((item) => item.backdropUrl) || available[0].items[0];
  let heroDetail = null;
  try {
    heroDetail = await getTitleDetails(heroBase.type, heroBase.tmdbId, 1);
  } catch (_error) {
    heroDetail = null;
  }

  return {
    source: 'tmdb',
    sourceLabel: 'Live TMDB Catalog',
    nav: NAV_ITEMS,
    hero: toHero(heroBase, heroDetail),
    sections: available,
  };
}

async function getCatalogPayload() {
  const cached = readCache(catalogCache);
  if (cached) return cached;

  try {
    const live = await buildTmdbCatalog();
    catalogCache = writeCache(CATALOG_CACHE_MS, live);
    return live;
  } catch (error) {
    const fallback = buildFallbackCatalog(error instanceof Error ? error.message : 'TMDB unavailable');
    catalogCache = writeCache(60000, fallback);
    return fallback;
  }
}

async function searchFallbackResults(query, limit = 18) {
  const terms = String(query || '').trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  const pool = [];
  const seen = new Set();
  const cachedCatalog = readCache(catalogCache) || await getCatalogPayload();
  const push = (item) => {
    if (!item || !item.key || seen.has(item.key)) return;
    seen.add(item.key);
    pool.push(item);
  };

  if (cachedCatalog) {
    push(cachedCatalog.hero);
    for (const row of cachedCatalog.sections || []) {
      for (const item of row.items || []) push(item);
    }
  }

  for (const item of FALLBACK_LIBRARY) push(fallbackSummary(item));

  return pool
    .filter((item) => {
      const haystack = [item.title, item.overview, ...(item.genres || [])].join(' ').toLowerCase();
      return terms.every((term) => haystack.includes(term));
    })
    .slice(0, limit);
}

function mergeSearchResults(primary = [], secondary = [], limit = 18) {
  const merged = [];
  const seen = new Set();
  const push = (item) => {
    if (!item || !item.key || seen.has(item.key)) return;
    seen.add(item.key);
    merged.push(item);
  };

  primary.forEach(push);
  secondary.forEach(push);
  return merged.slice(0, limit);
}

async function buildTmdbSearchResults(query, limit = 18) {
  const payload = await fetchTmdbJson('/search/multi', {
    query,
    page: 1,
    include_adult: false,
  });

  return (payload.results || [])
    .filter((entry) => entry && (entry.media_type === 'movie' || entry.media_type === 'tv'))
    .map((entry, index) => normalizeCatalogItem(entry, entry.media_type, 500 + index))
    .filter(Boolean)
    .slice(0, limit);
}

async function getSearchPayload(query, limit = 18) {
  const cacheKey = `${String(query || '').trim().toLowerCase()}:${limit}`;
  const cached = readCache(searchCache.get(cacheKey));
  if (cached) return cached;

  const localResults = await searchFallbackResults(query, limit);

  try {
    const liveResults = await buildTmdbSearchResults(query, limit);
    const live = {
      source: 'tmdb',
      results: mergeSearchResults(liveResults, localResults, limit),
    };
    searchCache.set(cacheKey, writeCache(SEARCH_CACHE_MS, live));
    return live;
  } catch (error) {
    const fallback = {
      source: 'fallback',
      error: error instanceof Error ? error.message : String(error),
      results: localResults,
    };
    searchCache.set(cacheKey, writeCache(60000, fallback));
    return fallback;
  }
}

function parseSearchParams(searchParams) {
  const query = String(searchParams.get('query') || searchParams.get('q') || '').trim();
  const limit = Math.max(1, Math.min(24, Number(searchParams.get('limit') || 18) || 18));
  if (!query) {
    throw new Error('query is required');
  }
  return { query, limit };
}

async function buildTmdbDetails(type, tmdbId, requestedSeason = 1) {
  if (type === 'tv') {
    const detail = await fetchTmdbJson(`/tv/${tmdbId}`, { append_to_response: 'credits,content_ratings' });
    const seasonOptions = (detail.seasons || [])
      .filter((entry) => entry.season_number > 0)
      .map((entry) => ({ seasonNumber: entry.season_number }));
    const totalSeasons = detail.number_of_seasons || seasonOptions.length || 1;
    const selectedSeason =
      seasonOptions.find((entry) => entry.seasonNumber === requestedSeason)?.seasonNumber ||
      seasonOptions[0]?.seasonNumber ||
      1;
    const season = await fetchTmdbJson(`/tv/${tmdbId}/season/${selectedSeason}`);

    return {
      key: titleKey(type, tmdbId),
      tmdbId,
      type,
      title: detail.name || 'Untitled',
      originalLanguage: detail.original_language || '',
      overview: detail.overview || '',
      shortSynopsis: detail.overview || '',
      year: String(detail.first_air_date || '').slice(0, 4) || '',
      rating: tvRating(detail),
      matchPercent: detail.vote_average ? Math.max(70, Math.min(99, Math.round(detail.vote_average * 10))) : null,
      quality: 'HD',
      typeLabel: 'Series',
      totalSeasons,
      seasonLabel: totalSeasons === 1 ? '1 Season' : `${totalSeasons} Seasons`,
      runtimeLabel:
        Array.isArray(detail.episode_run_time) && detail.episode_run_time[0]
          ? `${detail.episode_run_time[0]}m`
          : '',
      cast: (detail.credits?.cast || []).slice(0, 4).map((entry) => entry.name),
      genres: (detail.genres || []).slice(0, 4).map((entry) => entry.name),
      art: artPalette(tmdbId),
      backdropUrl: tmdbImage(detail.backdrop_path, 'w1280'),
      cardImage: tmdbImage(detail.poster_path, 'w780') || tmdbImage(detail.backdrop_path, 'w780'),
      playHref: buildPlayerHref({ tmdbId, type, season: selectedSeason, episode: 1 }),
      seasonOptions,
      selectedSeason,
      hasPreviousSeason: seasonOptions.length > 0 && selectedSeason > seasonOptions[0].seasonNumber,
      hasNextSeason:
        seasonOptions.length > 0 &&
        selectedSeason < seasonOptions[seasonOptions.length - 1].seasonNumber,
      episodes: (season.episodes || []).map((episode, index) => ({
        episodeNumber: episode.episode_number,
        name: episode.name || `Episode ${episode.episode_number}`,
        overview: episode.overview || '',
        runtimeLabel: episode.runtime
          ? `${episode.runtime}m`
          : Array.isArray(detail.episode_run_time) && detail.episode_run_time[0]
            ? `${detail.episode_run_time[0]}m`
            : '42m',
        stillUrl: tmdbImage(episode.still_path, 'w500'),
        art: artPalette(tmdbId + index + 11),
        playHref: buildPlayerHref({
          tmdbId,
          type,
          season: selectedSeason,
          episode: episode.episode_number,
        }),
      })),
    };
  }

  const detail = await fetchTmdbJson(`/movie/${tmdbId}`, { append_to_response: 'credits,release_dates' });
  return {
    key: titleKey(type, tmdbId),
    tmdbId,
    type,
    title: detail.title || 'Untitled',
    originalLanguage: detail.original_language || '',
    overview: detail.overview || '',
    shortSynopsis: detail.overview || '',
    year: String(detail.release_date || '').slice(0, 4) || '',
    rating: movieRating(detail),
    matchPercent: detail.vote_average ? Math.max(70, Math.min(99, Math.round(detail.vote_average * 10))) : null,
    quality: 'HD',
    typeLabel: 'Movie',
    totalSeasons: 0,
    runtimeLabel: detail.runtime ? `${detail.runtime}m` : '',
    cast: (detail.credits?.cast || []).slice(0, 4).map((entry) => entry.name),
    genres: (detail.genres || []).slice(0, 4).map((entry) => entry.name),
    art: artPalette(tmdbId),
    backdropUrl: tmdbImage(detail.backdrop_path, 'w1280'),
    cardImage: tmdbImage(detail.poster_path, 'w780') || tmdbImage(detail.backdrop_path, 'w780'),
    playHref: buildPlayerHref({ tmdbId, type }),
    seasonOptions: [],
    selectedSeason: null,
    hasPreviousSeason: false,
    hasNextSeason: false,
    episodes: [],
  };
}

async function getTitleDetails(type, tmdbId, requestedSeason = 1) {
  const cacheKey = `detail:${type}:${tmdbId}:${requestedSeason}`;
  const cached = readCache(detailCache.get(cacheKey));
  if (cached) return cached;

  const detail = FALLBACK_INDEX.has(titleKey(type, tmdbId))
    ? buildFallbackDetails(type, tmdbId, requestedSeason)
    : await buildTmdbDetails(type, tmdbId, requestedSeason);

  detailCache.set(cacheKey, writeCache(DETAILS_CACHE_MS, detail));
  return detail;
}

function parseDetailParams(searchParams) {
  const tmdbId = Number(searchParams.get('tmdb_id') || searchParams.get('id') || 0);
  const type = (searchParams.get('type') || 'movie').toLowerCase();
  const season = Number(searchParams.get('season') || 1);
  if (!tmdbId || !['movie', 'tv'].includes(type)) {
    throw new Error('tmdb_id and a valid type are required');
  }
  return { tmdbId, type, season };
}
function getPlayerInitialState(searchParams) {
  return {
    tmdb_id: searchParams.get('tmdb_id') || searchParams.get('id') || '',
    type: (searchParams.get('type') || 'movie').toLowerCase() === 'tv' ? 'tv' : 'movie',
    season: searchParams.get('season') || '1',
    episode: searchParams.get('episode') || '1',
    multiLang: parseBoolean(searchParams.get('multiLang') || searchParams.get('multi_lang'), true),
    autoplay: parseBoolean(searchParams.get('autoplay'), true),
    resume: parseBoolean(searchParams.get('resume'), false),
    start: searchParams.get('start') || '0',
  };
}

function renderPlayerPage(searchParams) {
  const initial = getPlayerInitialState(searchParams);
  const initialScript = serializeForScript({ initial });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HAK Player</title>
  <style>
    @font-face {
      font-family: "Netflix Sans";
      src: url("/static/fonts/NetflixSans-Light.woff2") format("woff2");
      font-style: normal;
      font-weight: 300;
      font-display: swap;
    }

    @font-face {
      font-family: "Netflix Sans";
      src: url("/static/fonts/NetflixSans-Regular.woff2") format("woff2");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "Netflix Sans";
      src: url("/static/fonts/NetflixSans-Medium.woff2") format("woff2");
      font-style: normal;
      font-weight: 500;
      font-display: swap;
    }

    @font-face {
      font-family: "Netflix Sans";
      src: url("/static/fonts/NetflixSans-Bold.woff2") format("woff2");
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }

    @font-face {
      font-family: "Netflix Sans";
      src: url("/static/fonts/NetflixSans-Bold.woff2") format("woff2");
      font-style: normal;
      font-weight: 900;
      font-display: swap;
    }

    :root {
      color-scheme: dark;
      background: #000;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background: #000;
      color: #fff;
      font-family: "Netflix Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    body {
      position: fixed;
      inset: 0;
    }

    #player-root {
      width: 100%;
      height: 100%;
      background: #000;
    }
  </style>
</head>
<body>
  <div id="player-root"></div>
  <script>
    window.__ARRWA_PLAYER_BOOT__ = ${initialScript};
  </script>
  <script src="/static/player-app.bundle.js" defer></script>
</body>
</html>`;
}

async function handleExtract(requestUrl) {
  const params = normalizeParams(requestUrl.searchParams);
  const result = await fetchStreamPayload(params);

  if (!result.hls_url) {
    throw new Error('VidLink API responded but no HLS playlist was present');
  }

  let manifest = null;
  if (params.validate) {
    manifest = await validateManifest(result.hls_url, result.trace);
  }

  const absoluteHlsUrl = resolveAbsoluteUrl(result.hls_url, result.page_url);
  const hlsUrl = params.proxy ? createProxyUrl(absoluteHlsUrl, result.page_url) : absoluteHlsUrl;
  const subtitles = result.subtitles.map((entry) => {
    if (!params.proxy || !entry?.url) return entry;
    return {
      ...entry,
      url: createProxyUrl(resolveAbsoluteUrl(entry.url, result.page_url), result.page_url),
    };
  });

  return {
    success: true,
    hls_url: hlsUrl,
    subtitles,
    source_id: result.source_id,
    proxied: params.proxy,
    raw_hls_url: params.debug ? result.hls_url : undefined,
    token: params.debug ? result.token : undefined,
    api_url: params.debug ? result.api_url : undefined,
    page_url: params.debug ? result.page_url : undefined,
    manifest,
    trace: params.debug ? result.trace : undefined,
    payload: params.debug ? result.payload : undefined,
  };
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

    if (request.method === 'OPTIONS') {
      sendJson(response, 204, {});
      return;
    }

    if (requestUrl.pathname === '/health') {
      sendJson(response, 200, {
        ok: true,
        service: 'hak-hls-resolver',
        runtime_ready: typeof globalThis.getAdv === 'function',
        tmdb_configured: Boolean(TMDB_API_KEY),
      });
      return;
    }

    if (requestUrl.pathname.startsWith('/static/')) {
      sendStaticAsset(response, requestUrl.pathname);
      return;
    }

    if (requestUrl.pathname === '/app.webmanifest') {
      sendStaticAsset(response, '/static/app.webmanifest', {
        'cache-control': 'public, max-age=300',
      });
      return;
    }

    if (requestUrl.pathname === '/app-sw.js') {
      sendStaticAsset(response, '/static/app-sw.js', {
        'cache-control': 'no-cache',
        'service-worker-allowed': '/',
      });
      return;
    }

    if (requestUrl.pathname === '/proxy/media') {
      await handleMediaProxy(request, response, requestUrl);
      return;
    }

    if (requestUrl.pathname === '/api/catalog') {
      sendJson(response, 200, {
        success: true,
        catalog: await getCatalogPayload(),
      });
      return;
    }

    if (requestUrl.pathname === '/api/details') {
      try {
        const detailParams = parseDetailParams(requestUrl.searchParams);
        sendJson(response, 200, {
          success: true,
          details: await getTitleDetails(detailParams.type, detailParams.tmdbId, detailParams.season),
        });
      } catch (error) {
        sendJson(response, 400, {
          success: false,
          error: error instanceof Error ? error.message : String(error),
          usage: '/api/details?tmdb_id=106480&type=tv&season=1',
          notes: [
            'tmdb_id is required',
            "type must be 'movie' or 'tv'",
            'season is only used for TV details and defaults to 1',
          ],
          examples: [
            '/api/details?tmdb_id=106480&type=tv&season=1',
            '/api/details?tmdb_id=900001&type=tv&season=1',
            '/api/details?tmdb_id=900002&type=movie',
          ],
        });
      }
      return;
    }

    if (requestUrl.pathname === '/api/search') {
      try {
        const searchParams = parseSearchParams(requestUrl.searchParams);
        const payload = await getSearchPayload(searchParams.query, searchParams.limit);
        sendJson(response, 200, {
          success: true,
          ...payload,
        });
      } catch (error) {
        sendJson(response, 400, {
          success: false,
          error: error instanceof Error ? error.message : String(error),
          usage: '/api/search?query=one%20piece&limit=18',
          notes: [
            'query is required',
            'limit is optional and capped at 24',
          ],
        });
      }
      return;
    }

    if (requestUrl.pathname === '/') {
      sendHtml(response, 200, renderHomePage());
      return;
    }

    if (requestUrl.pathname === '/player') {
      sendHtml(response, 200, renderPlayerPage(requestUrl.searchParams));
      return;
    }

    if (requestUrl.pathname !== '/extract' && requestUrl.pathname !== '/resolve') {
      sendJson(response, 404, {
        success: false,
        error: 'Not found',
        available_endpoints: ['/', '/player', '/app.webmanifest', '/app-sw.js', '/api/catalog', '/api/details', '/api/search', '/extract', '/resolve', '/proxy/media', '/health'],
      });
      return;
    }

    const payload = await handleExtract(requestUrl);
    sendJson(response, 200, payload);
  } catch (error) {
    sendJson(response, 500, {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
});

server.listen(PORT, HOST, () => {
  const displayHost = HOST === '0.0.0.0' ? '127.0.0.1' : HOST;
  console.log(`HAK resolver listening on http://${displayHost}:${PORT}`);
  if (HOST === '0.0.0.0') {
    console.log(`LAN access enabled on 0.0.0.0:${PORT}`);
  }
});








