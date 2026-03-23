
(() => {
  const cfg = window.__ARRWA_APP_CONFIG__ || {}
  const root = document.querySelector('[data-app-root]')
  const overlay = document.getElementById('details-root')
  const FALLBACK_NAV = [
    { label: 'Search', target: 'search', icon: 'search' },
    { label: 'Home', target: 'home', icon: 'home' },
  ]
  const SEARCH_KEYBOARD = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['CLEAR', 'SPACE', 'BACK'],
  ]
  const SEARCH_DEBOUNCE_MS = 1500
  const PLAYER_RETURN_KEY = 'arrwa:player-return'
  const PLAYER_PREVIEW_KEY = 'arrwa:player-preview'
  const CONTINUE_WATCHING_KEY = 'hak:continue-watching'
  const WATCHLIST_KEY = 'hak:watchlist'
  const MY_LIST_HIDDEN_KEY = 'hak:my-list-hidden'
  const PWA_SERVICE_WORKER_PATH = '/app-sw.js'
  const state = {
    catalog: null,
    catalogSource: null,
    modal: null,
    cache: new Map(),
    focusId: '',
    scope: 'home',
    view: 'home',
    lastHome: 'hero-play',
    lastSearch: 'search-key-0-0',
    lastNav: 'nav-home',
    searchQuery: '',
    searchIndex: [],
    searchCache: new Map(),
    searchResults: [],
    searchLoading: false,
    searchPending: false,
    searchError: '',
    searchRequestId: 0,
    searchDebounceTimer: 0,
    pwaPrompt: null,
    pwaInstallHint: false,
    pwaInstalled: false,
  }

  const KEY = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT',
    Enter: 'SELECT',
    Escape: 'BACK',
    Backspace: 'BACK',
    BrowserBack: 'BACK',
    GoBack: 'BACK',
    MediaPlayPause: 'PLAY',
  }

  const CODE = {
    4: 'BACK',
    8: 'BACK',
    13: 'SELECT',
    19: 'UP',
    20: 'DOWN',
    21: 'LEFT',
    22: 'RIGHT',
    23: 'SELECT',
    27: 'BACK',
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN',
    66: 'SELECT',
    85: 'PLAY',
    96: 'SELECT',
    97: 'BACK',
    111: 'BACK',
    126: 'PLAY',
    127: 'PLAY',
    415: 'PLAY',
    461: 'BACK',
    10009: 'BACK',
  }

  if (!root || !overlay) return
  boot()

  function boot() {
    bind()
    loading()
    loadCatalog()
  }

  function bind() {
    state.pwaInstalled = isStandaloneMode()
    state.pwaInstallHint = shouldOfferManualInstallHint()
    syncEnvironmentClasses()
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    document.addEventListener('focusin', (event) => {
      const node = event.target.closest('[data-focus-id]')
      if (node) syncFocus(node.dataset.focusId)
    })
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onAppInstalled)
    window.addEventListener('resize', syncEnvironmentClasses)
    window.addEventListener('orientationchange', syncEnvironmentClasses)
    if ('serviceWorker' in navigator && canUseNativeInstallPrompt()) {
      window.addEventListener('load', registerPwaServiceWorker, { once: true })
    }
    const standaloneMedia = getStandaloneMedia()
    if (standaloneMedia) {
      const syncStandalone = () => syncStandaloneMode()
      if (typeof standaloneMedia.addEventListener === 'function') standaloneMedia.addEventListener('change', syncStandalone)
      else if (typeof standaloneMedia.addListener === 'function') standaloneMedia.addListener(syncStandalone)
    }
  }

  function getStandaloneMedia() {
    if (!window.matchMedia) return null
    try {
      return window.matchMedia('(display-mode: standalone)')
    } catch (_error) {
      return null
    }
  }

  function isStandaloneMode() {
    const standaloneMedia = getStandaloneMedia()
    return Boolean(
      (standaloneMedia && standaloneMedia.matches) ||
      window.navigator.standalone ||
      String(document.referrer || '').startsWith('android-app://')
    )
  }

  function browserUserAgent() {
    return String(window.navigator.userAgent || '')
  }

  function isAndroidEnvironment() {
    return /android/i.test(browserUserAgent())
  }

  function isTvEnvironment() {
    return /android tv|googletv|google tv|smart-tv|smarttv|hbbtv|aft[a-z0-9_-]+|bravia|shield android tv|inettvbrowser|viera|netcast|web0s|webos.tv|roku|tizen/i.test(browserUserAgent())
  }

  function isLocalOrigin() {
    const host = String(window.location.hostname || '').toLowerCase()
    return host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '[::1]'
  }

  function tvLayoutOverride() {
    try {
      const value = new URLSearchParams(window.location.search).get('tv')
      if (value == null || value === '') return null
      if (value === '1' || value === 'true' || value === 'yes' || value === 'on') return true
      if (value === '0' || value === 'false' || value === 'no' || value === 'off') return false
    } catch (_error) {
      return null
    }
    return null
  }

  function shouldUseTvLayout() {
    const override = tvLayoutOverride()
    if (override !== null) return override
    if (isTvEnvironment()) return true
    const wide = (window.innerWidth || 0) >= 960
    const tall = (window.innerHeight || 0) >= 540
    const landscape = !window.matchMedia || window.matchMedia('(orientation: landscape)').matches
    const coarsePointer = window.matchMedia ? window.matchMedia('(pointer: coarse)').matches : false
    return wide && tall && landscape && !coarsePointer
  }

  function syncEnvironmentClasses() {
    document.body.classList.toggle('is-tv-layout', shouldUseTvLayout())
    document.body.classList.toggle('is-android-browser', isAndroidEnvironment())
  }

  function canUseNativeInstallPrompt() {
    return Boolean(window.isSecureContext || isLocalOrigin())
  }

  function shouldOfferManualInstallHint() {
    return isAndroidEnvironment() || shouldUseTvLayout() || canUseNativeInstallPrompt()
  }

  function shouldShowPwaInstall() {
    return !state.pwaInstalled && (Boolean(state.pwaPrompt) || state.pwaInstallHint)
  }

  function refreshPwaInstallUi(previousVisible, force = false) {
    const nextVisible = shouldShowPwaInstall()
    if (!force && previousVisible === nextVisible) return
    if (!state.catalog || state.modal) return

    const preferredFocus = !nextVisible && state.focusId === 'nav-install'
      ? state.view === 'search' ? 'nav-search' : 'nav-home'
      : state.focusId || (state.view === 'search' ? state.lastSearch : state.lastHome) || (state.view === 'search' ? 'nav-search' : 'hero-play')
    const scrollTop = window.scrollY
    const scrollLeft = window.scrollX

    renderApp(preferredFocus)
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollTop, left: scrollLeft, behavior: 'auto' })
    })
  }

  function registerPwaServiceWorker() {
    navigator.serviceWorker.register(PWA_SERVICE_WORKER_PATH).catch((error) => {
      console.warn('[pwa] service worker registration failed', error)
    })
  }

  function onBeforeInstallPrompt(event) {
    const wasVisible = shouldShowPwaInstall()
    event.preventDefault()
    state.pwaPrompt = event
    state.pwaInstallHint = true
    refreshPwaInstallUi(wasVisible)
  }

  function onAppInstalled() {
    const wasVisible = shouldShowPwaInstall()
    state.pwaInstalled = true
    state.pwaPrompt = null
    state.pwaInstallHint = false
    refreshPwaInstallUi(wasVisible)
  }

  function syncStandaloneMode() {
    const wasVisible = shouldShowPwaInstall()
    state.pwaInstalled = isStandaloneMode()
    if (state.pwaInstalled) {
      state.pwaPrompt = null
      state.pwaInstallHint = false
    }
    refreshPwaInstallUi(wasVisible)
  }

  function showPwaInstallHint() {
    if (!canUseNativeInstallPrompt()) {
      window.alert('Install prompts are blocked on local network addresses like this one. To install HAK as an app, open it on the same device with http://127.0.0.1:4100 or serve it over HTTPS. On Android TV you can still keep using the browser, and some TV browsers may offer a manual shortcut in their menu.')
      return
    }

    window.alert('Open the browser menu and choose "Install app" or "Add to Home screen" to pin HAK on Android.')
  }

  async function triggerPwaInstall() {
    if (state.pwaInstalled) return
    if (!state.pwaPrompt) {
      showPwaInstallHint()
      return
    }

    const wasVisible = shouldShowPwaInstall()
    const promptEvent = state.pwaPrompt
    state.pwaPrompt = null

    try {
      await promptEvent.prompt()
      const choice = await promptEvent.userChoice
      if (choice && choice.outcome === 'accepted') {
        state.pwaInstalled = true
        state.pwaInstallHint = false
      } else {
        state.pwaInstallHint = true
      }
    } catch (_error) {
      state.pwaInstallHint = true
    }

    refreshPwaInstallUi(wasVisible)
  }

  function loading() {
    document.body.classList.remove('modal-open', 'search-open')
    root.innerHTML = `
      <div class="loading-state">
        <div class="screen-noise"></div>
        <div class="loading-panel is-minimal">
          <div class="loading-ring" aria-hidden="true"></div>
        </div>
      </div>
    `
    overlay.innerHTML = ''
  }

  async function loadCatalog() {
    try {
      const response = await fetch(cfg.catalogUrl || '/api/catalog')
      const payload = await response.json()
      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Unable to load the catalog.')
      }
      state.catalogSource = payload.catalog
      state.catalog = catalogWithContinueWatching(payload.catalog)
      state.searchIndex = buildSearchIndex(state.catalog)
      const restore = consumePlayerReturn()
      if (restore) {
        if (restore.item && restore.item.key && !state.searchIndex.find((entry) => entry.key === restore.item.key)) {
          state.searchIndex.push(restore.item)
        }
        state.view = restore.originView === 'search' ? 'search' : 'home'
        state.searchQuery = restore.searchQuery || ''
        if (state.view === 'search' && state.searchQuery) {
          state.searchResults = localSearchResults(normalizedQuery(state.searchQuery))
        }
        renderApp(restore.origin || (state.view === 'search' ? 'search-key-0-0' : 'hero-play'))
        requestAnimationFrame(() => openDetails(restore.key, restore.origin, restore))
        return
      }
      renderApp(state.lastHome)
    } catch (error) {
      drawError(error instanceof Error ? error.message : String(error))
    }
  }

  function drawError(message) {
    document.body.classList.remove('modal-open', 'search-open')
    state.scope = 'home'
    state.view = 'home'
    state.modal = null
    root.innerHTML = `
      <div class="error-state">
        <div class="screen-noise"></div>
        <div class="error-panel">
          <div class="loading-brand">HAK</div>
          <h1>Home screen unavailable.</h1>
          <p class="error-copy">${esc(message)}</p>
          <button class="retry-button focusable" type="button" data-action="reload" data-focus-id="retry" data-focus-scope="home">Try Again</button>
        </div>
      </div>
    `
    overlay.innerHTML = ''
    requestAnimationFrame(() => focus('retry'))
  }

  function renderApp(preferred) {
    if (!state.catalog) return
    document.body.classList.toggle('search-open', state.view === 'search')
    root.innerHTML = `
      <div class="screen-noise"></div>
      <div class="app-shell is-${escAttr(state.view)}">
        ${sidebarHtml()}
        <div class="content-shell">
          ${state.view === 'search' ? searchViewHtml() : homeViewHtml()}
        </div>
      </div>
    `
    drawModal()
    if (state.modal) return

    state.scope = state.view
    if (state.view === 'search') {
      mapSearch()
      requestAnimationFrame(() => {
        if (!focus(resolveSearchFocus(preferred))) focus(searchFallbackFocus())
      })
      return
    }

    mapHome(state.catalog.sections || [])
    requestAnimationFrame(() => {
      if (!focus(preferred || state.lastHome || 'hero-play')) focus('hero-play')
    })
  }
  function sidebarHtml() {
    const items = navItems()
    return `
      <aside class="side-rail" aria-label="Primary navigation">
        <div class="rail-brand">HAK</div>
        <nav class="rail-nav" aria-label="Primary">
          ${items.map((item, index) => railButtonHtml(item, index)).join('')}
        </nav>
        ${railFooterHtml()}
      </aside>
    `
  }

  function railButtonHtml(item, index) {
    const target = cleanTarget(item.target || item.label || `nav-${index}`)
    const isCurrent = state.view === 'search' ? target === 'search' : target === 'home'
    return `
      <button class="rail-button focusable ${isCurrent ? 'is-current' : ''}" type="button" data-action="jump" data-target="${escAttr(target)}" data-focus-id="nav-${escAttr(target)}" data-focus-scope="${escAttr(state.view)}">
        <span class="rail-icon" aria-hidden="true">${navIcon(item.icon || target)}</span>
        <span class="rail-label">${esc(item.label)}</span>
      </button>
    `
  }

  function railFooterHtml() {
    if (!shouldShowPwaInstall()) return ''
    return `
      <div class="rail-footer">
        <button class="rail-button rail-button-install focusable" type="button" data-action="install-pwa" data-focus-id="nav-install" data-focus-scope="${escAttr(state.view)}" aria-label="Install HAK app">
          <span class="rail-icon" aria-hidden="true">${navIcon('install')}</span>
          <span class="rail-label">Install App</span>
        </button>
      </div>
    `
  }

  function homeViewHtml() {
    const hero = state.catalog.hero || {}
    const rows = state.catalog.sections || []
    return `
      <main class="screen-home">
        ${heroHtml(hero)}
        <div class="rows-shell">${rows.map((row, rowIndex) => rowHtml(row, rowIndex)).join('')}</div>
      </main>
    `
  }

  function searchViewHtml() {
    const hero = state.catalog.hero || {}
    const results = getSearchResults()
    const genres = searchGenres()
    const hasQuery = Boolean(normalizedQuery(state.searchQuery))
    const countLabel = hasQuery
      ? state.searchPending
        ? 'Waiting for you to finish typing...'
        : state.searchLoading
          ? 'Searching TMDB...'
          : `${results.length} matches`
      : `${results.length} picks`

    return `
      <main class="screen-search">
        <div class="search-backdrop" style="${art(hero.art)}">
          ${hero.backdropUrl ? `<img src="${escAttr(hero.backdropUrl)}" alt="${escAttr(hero.title || 'Featured title')} backdrop" />` : ''}
        </div>
        <section class="search-stage">
          <div class="search-console">
            <div class="search-kicker">Search</div>
            <div class="search-query">${esc(state.searchQuery || 'Start typing to search titles, genres, and storylines')}</div>
            <p class="search-hint">Use the on-screen keyboard with the D-pad to search TMDB from across the room.</p>
            ${state.searchError ? `<p class="search-status">${esc(state.searchError)}</p>` : ''}
            <div class="search-keyboard" aria-label="Search keyboard">
              ${SEARCH_KEYBOARD.map((row, rowIndex) => `
                <div class="search-key-row" style="--key-columns:${row.length}">
                  ${row.map((key, columnIndex) => searchKeyHtml(key, rowIndex, columnIndex)).join('')}
                </div>
              `).join('')}
            </div>
            <div class="search-genre-panel">
              <div class="search-genre-title">Browse Genres</div>
              <div class="search-genre-list">${genres.map((genre) => `<span class="search-genre-pill">${esc(genre)}</span>`).join('')}</div>
            </div>
          </div>
          <div class="search-results-panel">
            <div class="row-header">
              <h2 class="row-title">${esc(hasQuery ? 'Search Results' : 'Top Searches')}</h2>
              <div class="row-count">${esc(countLabel)}</div>
            </div>
            ${results.length
              ? `<div class="search-results-grid">${results.map((item, index) => searchCardHtml(item, index)).join('')}</div>`
              : `<div class="search-empty"><h3>${esc(hasQuery ? 'No matches found' : 'No picks loaded')}</h3><p>${esc(hasQuery ? 'Try another title, keyword, or genre.' : 'Open the keyboard to search for a movie or TV show.')}</p></div>`}
          </div>
        </section>
      </main>
    `
  }

  function searchKeyHtml(key, rowIndex, columnIndex) {
    const action = key === 'BACK' ? 'search-backspace' : key === 'CLEAR' ? 'search-clear' : 'search-key'
    const value = key === 'SPACE' ? ' ' : key
    const label = key === 'SPACE' ? 'Space' : key === 'BACK' ? 'Back' : key === 'CLEAR' ? 'Clear' : key
    const valueAttr = action === 'search-key' ? ` data-value="${escAttr(value)}"` : ''
    return `
      <button class="search-key focusable${key.length > 1 ? ' is-wide' : ''}" type="button" data-action="${action}"${valueAttr} data-focus-id="search-key-${rowIndex}-${columnIndex}" data-focus-scope="search">${esc(label)}</button>
    `
  }

  function heroHtml(hero) {
    const meta = [hero.year, hero.seasonLabel || hero.runtimeLabel, hero.rating]
      .filter(Boolean)
      .map((value) => `<span class="meta-pill">${esc(value)}</span>`)
      .join('')

    return `
      <section class="hero" data-section-id="home">
        <div class="hero-art" style="${art(hero.art)}">
          ${hero.backdropUrl ? `<img src="${escAttr(hero.backdropUrl)}" alt="${escAttr(hero.title)} backdrop" />` : ''}
        </div>
        <div class="hero-content">
          <div class="hero-kicker">${esc(hero.eyebrow || 'Featured Tonight')}</div>
          <h1 class="hero-title">${esc(hero.title || 'HAK TV')}</h1>
          ${meta ? `<div class="hero-meta">${meta}</div>` : ''}
          <p class="hero-overview">${esc(shorten(hero.overview || 'A TV-first home built for browsing from the couch.', 320))}</p>
          <div class="hero-actions">
            <a class="hero-button is-primary focusable" href="${escAttr(hero.playHref || '#')}" data-focus-id="hero-play" data-focus-scope="home">Play</a>
            <button class="hero-button is-secondary focusable" type="button" data-action="details" data-key="${escAttr(hero.key || '')}" data-focus-id="hero-info" data-focus-scope="home">More Info</button>
          </div>
        </div>
        <div class="hero-rating">${esc(hero.rating || hero.badge || 'TV Mode')}</div>
      </section>
    `
  }

  function rowHtml(row, rowIndex) {
    return `
      <section class="row" data-section-id="${escAttr(row.id)}">
        <div class="row-header">
          <h2 class="row-title">${esc(row.title)}</h2>
          <div class="row-count">${esc(String((row.items || []).length) + ' picks')}</div>
        </div>
        <div class="row-track" role="list">
          ${(row.items || []).map((item, itemIndex) => cardHtml(item, rowIndex, itemIndex, row.id, 'home')).join('')}
        </div>
      </section>
    `
  }

  function cardHtml(item, rowIndex, itemIndex, sectionId, scope = 'home') {
    const focusId = scope === 'search' ? `search-card-${itemIndex}` : focusKey(rowIndex, itemIndex)
    const rowAttr = scope === 'home' ? ` data-row-index="${escAttr(rowIndex)}" data-item-index="${escAttr(itemIndex)}"` : ''
    return `
      <button class="tile-button focusable${scope === 'search' ? ' search-card' : ''}" type="button" role="listitem" data-action="details" data-key="${escAttr(item.key)}"${rowAttr} data-section-id="${escAttr(sectionId || '')}" data-focus-id="${escAttr(focusId)}" data-focus-scope="${escAttr(scope)}">
        <div class="tile-art" style="${art(item.art)}">
          ${item.cardImage ? `<img src="${escAttr(item.cardImage)}" alt="${escAttr(item.title)} artwork" loading="lazy" />` : `<div class="tile-placeholder"><div class="tile-monogram">${esc(monogram(item.title))}</div></div>`}
        </div>
        <div class="tile-content">
          <div class="tile-title">${esc(item.title)}</div>
        </div>
      </button>
    `
  }

  function searchCardHtml(item, index) {
    return cardHtml(item, null, index, 'search-results', 'search')
  }
  function drawModal() {
    if (!state.modal) {
      overlay.innerHTML = ''
      document.body.classList.remove('modal-open')
      state.scope = state.view
      return
    }

    const item = state.modal.item || {}
    const detail = state.modal.detail || item
    const playLabel = primaryActionLabel(detail, item)
    const showRemoveFromContinueWatching = hasContinueWatchingRecord(item)
    const showRemoveFromMyList = isInMyList(item)
    document.body.classList.add('modal-open')
    state.scope = 'modal'

    overlay.innerHTML = `
      <div class="details-overlay">
        <div class="details-panel" role="dialog" aria-modal="true" aria-label="${escAttr(detail.title || 'Title details')}">
          <button class="details-close focusable" type="button" data-action="close" data-focus-id="modal-close" data-focus-scope="modal" aria-label="Close details">x</button>
          <div class="details-hero">
            <div class="details-hero-art" style="${art(detail.art || item.art)}">
              ${detail.backdropUrl ? `<img src="${escAttr(detail.backdropUrl)}" alt="${escAttr(detail.title)}" />` : ''}
            </div>
            <div class="details-hero-content">
              <h2 class="details-title">${esc(detail.title || 'Loading...')}</h2>
              ${modalMeta(detail)}
              <div class="details-actions">
                <a class="detail-button is-primary focusable" href="${escAttr(detail.playHref || item.playHref || '#')}" data-focus-id="modal-play" data-focus-scope="modal">${esc(playLabel)}</a>
                ${showRemoveFromContinueWatching ? `<button class="detail-button is-secondary focusable" type="button" data-action="remove-continue-watching" data-focus-id="modal-remove-continue" data-focus-scope="modal">Remove from Continue Watching</button>` : ''}
                ${showRemoveFromMyList ? `<button class="detail-button is-secondary focusable" type="button" data-action="remove-my-list" data-focus-id="modal-remove-my-list" data-focus-scope="modal">Remove from My List</button>` : ''}
              </div>
            </div>
          </div>
          ${state.modal.error ? `<div class="details-section"><p class="details-status is-error">${esc(state.modal.error)}</p></div>` : modalBody(detail)}
        </div>
      </div>
    `

    mapModal(detail)
    requestAnimationFrame(() => focus(state.modal.pref || (state.modal.loading ? 'modal-close' : 'modal-play')))
  }

  function modalMeta(detail) {
    const meta = []
    ;[detail.year, detail.seasonLabel || detail.runtimeLabel, detail.rating, detail.quality].filter(Boolean).forEach((value) => {
      meta.push(`<span class="meta-pill">${esc(value)}</span>`)
    })
    return meta.length ? `<div class="hero-meta">${meta.join('')}</div>` : ''
  }

  function modalBody(detail) {
    const summary = detailOverview(detail)
    if (detail.type !== 'tv') {
      return `${summary}
        <section class="details-section details-status-block">
          <p class="details-status">Use the main action above to jump straight into the player.</p>
        </section>
      `
    }

    return `${summary}
      <section class="details-section details-episodes">
        <div class="section-header">
          <div class="section-heading">
            <h3 class="section-title">Episodes</h3>
            <div class="section-submeta">
              <span class="section-season-label">${esc('Season ' + String(detail.selectedSeason || 1))}</span>
              ${detail.rating ? `<span class="section-rating">${esc(detail.rating)}</span>` : ''}
              ${detail.runtimeLabel ? `<span>${esc(detail.runtimeLabel)}</span>` : ''}
            </div>
          </div>
          ${seasonControl(detail)}
        </div>
        <div class="episode-list">${(detail.episodes || []).map((episode, index) => episodeHtml(episode, index)).join('')}</div>
      </section>
    `
  }

  function detailOverview(detail) {
    return `
      <section class="details-summary">
        <div class="details-summary-main">
          <h3 class="details-summary-title">${esc(detail.type === 'tv' ? 'Storyline' : 'Overview')}</h3>
          <p class="details-summary-copy">${esc(detail.shortSynopsis || detail.overview || 'Open a title to inspect the details and jump straight into playback.')}</p>
        </div>
        <aside class="details-summary-side">
          ${detailFact('Cast', (detail.cast || []).join(', ') || 'Cast information is unavailable for this title.')}
          ${detailFact('Genres', (detail.genres || []).join(', ') || 'Genre information is unavailable for this title.')}
          ${detailFact(detail.type === 'tv' ? 'Seasons' : 'Format', detail.type === 'tv' ? totalSeasonLabel(detail) : detail.runtimeLabel || detail.typeLabel || 'Feature')}
        </aside>
      </section>
    `
  }

  function totalSeasonLabel(detail) {
    const totalSeasons = Number(detail.totalSeasons || 0)
    if (totalSeasons > 0) return totalSeasons === 1 ? '1 Season' : `${totalSeasons} Seasons`
    return detail.seasonLabel || detail.typeLabel || 'Series'
  }

  function detailFact(label, value) {
    return `
      <div class="details-fact">
        <div class="details-fact-label">${esc(label)}</div>
        <div class="details-fact-value">${esc(value)}</div>
      </div>
    `
  }

  function seasonControl(detail) {
    const seasons = detail.seasonOptions || []
    const selectedSeason = detail.selectedSeason || seasons[0]?.seasonNumber || 1
    if (seasons.length <= 1) return `<div class="season-label">${esc('Season ' + String(selectedSeason))}</div>`

    const open = Boolean(state.modal && state.modal.seasonMenuOpen)
    return `
      <div class="season-switch${open ? ' is-open' : ''}">
        <button class="season-trigger focusable" type="button" data-action="toggle-season-menu" data-focus-id="modal-season-trigger" data-focus-scope="modal" aria-haspopup="listbox" aria-expanded="${open ? 'true' : 'false'}">
          <span>${esc('Season ' + String(selectedSeason))}</span>
          <span class="season-caret" aria-hidden="true"></span>
        </button>
        ${open ? `
          <div class="season-menu" role="listbox" aria-label="Available seasons">
            ${seasons.map((entry) => {
              const seasonNumber = entry.seasonNumber
              const selected = seasonNumber === selectedSeason
              return `
                <button class="season-option focusable${selected ? ' is-selected' : ''}" type="button" data-action="select-season" data-season="${escAttr(seasonNumber)}" data-focus-id="modal-season-option-${escAttr(seasonNumber)}" data-focus-scope="modal" role="option" aria-selected="${selected ? 'true' : 'false'}">
                  ${esc('Season ' + String(seasonNumber))}
                </button>
              `
            }).join('')}
          </div>
        ` : ''}
      </div>
    `
  }

  function episodeHtml(episode, index) {
    return `
      <a class="episode-link focusable" href="${escAttr(episode.playHref || '#')}" data-focus-id="modal-episode-${index}" data-focus-scope="modal">
        <div class="episode-number">${esc(String(episode.episodeNumber || index + 1))}</div>
        <div class="episode-thumb" style="${art(episode.art || { start: '#172033', end: '#334155', accent: '#7dd3fc' })}">
          ${episode.stillUrl ? `<img src="${escAttr(episode.stillUrl)}" alt="${escAttr(episode.name)}" loading="lazy" />` : ''}
        </div>
        <div class="episode-copy">
          <div class="episode-title">${esc(episode.name || 'Episode')}</div>
          <div class="episode-description">${esc(shorten(episode.overview || 'Remote-friendly episode summary unavailable.', 220))}</div>
        </div>
        <div class="episode-runtime">${esc(episode.runtimeLabel || '42m')}</div>
      </a>
    `
  }

  function mapHome(rows) {
    const nav = navButtons()
    const heroPlay = root.querySelector('[data-focus-id="hero-play"]')
    const heroInfo = root.querySelector('[data-focus-id="hero-info"]')

    nav.forEach((node, index) => {
      const target = node.dataset.target || ''
      tag(node, {
        up: index > 0 ? nav[index - 1].dataset.focusId : '',
        down: index < nav.length - 1 ? nav[index + 1].dataset.focusId : '',
        right: homeEntryForTarget(target, rows) || 'hero-play',
      })
    })

    if (heroPlay) tag(heroPlay, { left: 'nav-home', up: 'nav-home', right: heroInfo ? 'hero-info' : '', down: firstCardId(rows, 0, 0) })
    if (heroInfo) tag(heroInfo, { left: heroPlay ? 'hero-play' : 'nav-home', up: 'nav-home', down: rows[0] && rows[0].items && rows[0].items.length ? focusKey(0, Math.min(1, rows[0].items.length - 1)) : firstCardId(rows, 0, 0) })

    rows.forEach((row, rowIndex) => {
      const previousItems = rowIndex > 0 ? rows[rowIndex - 1].items || [] : []
      const nextItems = rowIndex < rows.length - 1 ? rows[rowIndex + 1].items || [] : []
      const items = row.items || []
      const railReturn = navIdForSection(row.id)
      items.forEach((_item, itemIndex) => {
        const node = root.querySelector(`[data-focus-id="${focusKey(rowIndex, itemIndex)}"]`)
        if (!node) return
        tag(node, {
          left: itemIndex > 0 ? focusKey(rowIndex, itemIndex - 1) : railReturn,
          right: itemIndex < items.length - 1 ? focusKey(rowIndex, itemIndex + 1) : '',
          up: rowIndex === 0 ? (itemIndex === 0 ? 'hero-play' : heroInfo ? 'hero-info' : 'hero-play') : focusKey(rowIndex - 1, clamp(itemIndex, previousItems.length)),
          down: rowIndex < rows.length - 1 ? focusKey(rowIndex + 1, clamp(itemIndex, nextItems.length)) : '',
        })
      })
    })
  }

  function mapSearch() {
    const nav = navButtons()
    const results = getSearchResults()
    const columns = searchResultColumns()

    nav.forEach((node, index) => {
      tag(node, {
        up: index > 0 ? nav[index - 1].dataset.focusId : '',
        down: index < nav.length - 1 ? nav[index + 1].dataset.focusId : '',
        right: 'search-key-0-0',
      })
    })

    SEARCH_KEYBOARD.forEach((row, rowIndex) => {
      row.forEach((_key, columnIndex) => {
        const node = root.querySelector(`[data-focus-id="search-key-${rowIndex}-${columnIndex}"]`)
        if (!node) return
        const previousRow = rowIndex > 0 ? SEARCH_KEYBOARD[rowIndex - 1] : null
        const nextRow = rowIndex < SEARCH_KEYBOARD.length - 1 ? SEARCH_KEYBOARD[rowIndex + 1] : null
        const resultBridge = searchCardBridgeForKeyboard(rowIndex, columnIndex, results, columns)
        tag(node, {
          left: columnIndex > 0 ? `search-key-${rowIndex}-${columnIndex - 1}` : 'nav-search',
          right: columnIndex < row.length - 1 ? `search-key-${rowIndex}-${columnIndex + 1}` : resultBridge,
          up: previousRow ? `search-key-${rowIndex - 1}-${Math.min(columnIndex, previousRow.length - 1)}` : 'nav-search',
          down: nextRow ? `search-key-${rowIndex + 1}-${Math.min(columnIndex, nextRow.length - 1)}` : resultBridge,
        })
      })
    })

    const resultNodes = Array.from(root.querySelectorAll('[data-focus-id^="search-card-"]'))
    resultNodes.forEach((node, index) => {
      const column = index % columns
      tag(node, {
        left: column > 0 ? `search-card-${index - 1}` : keyboardBridgeForResult(index, columns, 'edge'),
        right: column < columns - 1 && index + 1 < resultNodes.length ? `search-card-${index + 1}` : '',
        up: index < columns ? keyboardBridgeForResult(index, columns, 'column') : `search-card-${index - columns}`,
        down: index + columns < resultNodes.length ? `search-card-${index + columns}` : '',
      })
    })
  }

  function mapModal(detail) {
    const close = overlay.querySelector('[data-focus-id="modal-close"]')
    const play = overlay.querySelector('[data-focus-id="modal-play"]')
    const removeContinue = overlay.querySelector('[data-focus-id="modal-remove-continue"]')
    const removeMyList = overlay.querySelector('[data-focus-id="modal-remove-my-list"]')
    const actionNodes = [play, removeContinue, removeMyList].filter(Boolean)
    const seasonTrigger = overlay.querySelector('[data-focus-id="modal-season-trigger"]')
    const seasonOptions = Array.from(overlay.querySelectorAll('[data-focus-id^="modal-season-option-"]'))
    const episodes = Array.from(overlay.querySelectorAll('[data-focus-id^="modal-episode-"]'))
    const firstSeasonOption = seasonOptions[0] ? seasonOptions[0].dataset.focusId : ''
    const lastSeasonOption = seasonOptions.length ? seasonOptions[seasonOptions.length - 1].dataset.focusId : ''
    const seasonEntry = firstSeasonOption || (episodes[0] ? 'modal-episode-0' : '')
    const actionEntry = actionNodes[0]?.dataset.focusId || (seasonTrigger ? 'modal-season-trigger' : episodes[0] ? 'modal-episode-0' : '')
    const lastActionId = actionNodes[actionNodes.length - 1]?.dataset.focusId || ''
    const episodeEntry = lastSeasonOption || (seasonTrigger ? 'modal-season-trigger' : lastActionId || 'modal-close')
    if (close) tag(close, { down: actionEntry })
    actionNodes.forEach((node, index) => {
      tag(node, {
        up: 'modal-close',
        left: index > 0 ? actionNodes[index - 1].dataset.focusId : '',
        right: index < actionNodes.length - 1 ? actionNodes[index + 1].dataset.focusId : '',
        down: seasonTrigger ? 'modal-season-trigger' : episodes[0] ? 'modal-episode-0' : '',
      })
    })
    if (seasonTrigger) tag(seasonTrigger, { up: lastActionId || 'modal-close', down: seasonEntry })
    seasonOptions.forEach((node, index) => {
      tag(node, {
        up: index === 0 ? (seasonTrigger ? 'modal-season-trigger' : lastActionId || 'modal-close') : seasonOptions[index - 1].dataset.focusId,
        down: index < seasonOptions.length - 1 ? seasonOptions[index + 1].dataset.focusId : episodes[0] ? 'modal-episode-0' : '',
      })
    })
    episodes.forEach((node, index) => {
      tag(node, {
        up: index === 0 ? episodeEntry : `modal-episode-${index - 1}`,
        down: index < episodes.length - 1 ? `modal-episode-${index + 1}` : '',
      })
    })
  }

  function tag(node, edges) {
    if (!node) return
    node.classList.add('focusable')
    node.tabIndex = -1
    node.dataset.focusUp = edges.up || ''
    node.dataset.focusDown = edges.down || ''
    node.dataset.focusLeft = edges.left || ''
    node.dataset.focusRight = edges.right || ''
  }
  async function openDetails(key, origin, options = {}) {
    if (!state.catalog) return
    const item = options.item || findItem(key)
    if (!item) return

    state.modal = {
      key,
      item,
      detail: null,
      pref: 'modal-close',
      loading: true,
      error: '',
      season: Number(options.season || item.defaultSeason || 1),
      seasonMenuOpen: false,
      origin: origin || state.focusId || (state.view === 'search' ? state.lastSearch : state.lastHome) || 'hero-play',
      originView: options.originView || state.view,
    }
    drawModal()

    try {
      const detail = await getDetail(item, state.modal.season)
      if (!state.modal || state.modal.key !== key) return
      state.modal.detail = applyResumeToDetail(detail)
      state.modal.loading = false
      state.modal.pref = 'modal-play'
      drawModal()
    } catch (error) {
      if (!state.modal || state.modal.key !== key) return
      state.modal.loading = false
      state.modal.error = error instanceof Error ? error.message : String(error)
      drawModal()
    }
  }

  async function getDetail(item, season) {
    const cacheKey = `${item.key}:s${season || 1}`
    if (state.cache.has(cacheKey)) return state.cache.get(cacheKey)
    const params = new URLSearchParams()
    params.set('tmdb_id', String(item.tmdbId))
    params.set('type', item.type)
    if (item.type === 'tv') params.set('season', String(season || 1))

    const response = await fetch((cfg.detailsUrl || '/api/details') + '?' + params.toString())
    const payload = await response.json()
    if (!response.ok || !payload.success) throw new Error(payload.error || 'Unable to open title details.')
    state.cache.set(cacheKey, payload.details)
    return payload.details
  }

  function toggleSeasonMenu(forceOpen) {
    if (!state.modal || !state.modal.detail || state.modal.detail.type !== 'tv') return
    const seasons = state.modal.detail.seasonOptions || []
    if (seasons.length <= 1) return
    const nextOpen = typeof forceOpen === 'boolean' ? forceOpen : !state.modal.seasonMenuOpen
    state.modal.seasonMenuOpen = nextOpen
    state.modal.pref = nextOpen ? `modal-season-option-${state.modal.detail.selectedSeason || seasons[0].seasonNumber}` : 'modal-season-trigger'
    drawModal()
  }

  async function selectSeason(season) {
    const seasonNumber = Number(season || 0)
    if (!state.modal || !state.modal.item || !seasonNumber) return
    if (state.modal.detail && state.modal.detail.selectedSeason === seasonNumber) {
      state.modal.seasonMenuOpen = false
      state.modal.pref = 'modal-season-trigger'
      drawModal()
      return
    }

    state.modal.pref = 'modal-season-trigger'
    state.modal.loading = true
    state.modal.error = ''
    state.modal.season = seasonNumber
    state.modal.seasonMenuOpen = false
    drawModal()

    try {
      const detail = await getDetail(state.modal.item, seasonNumber)
      if (!state.modal) return
      state.modal.detail = applyResumeToDetail(detail)
      state.modal.loading = false
      state.modal.error = ''
      drawModal()
    } catch (error) {
      if (!state.modal) return
      state.modal.loading = false
      state.modal.error = error instanceof Error ? error.message : String(error)
      drawModal()
    }
  }

  function refreshOpenModalAfterCatalogChange() {
    if (!state.modal) return
    const currentSeason = Number(state.modal.detail?.selectedSeason || state.modal.season || state.modal.item?.defaultSeason || 1)
    const cacheKey = `${state.modal.key}:s${currentSeason}`
    const cachedDetail = state.cache.get(cacheKey)
    const fallbackItem = syncPlaybackItem(state.modal.item)
    state.modal.item = findItem(state.modal.key) || fallbackItem
    state.modal.detail = applyResumeToDetail(stripPlaybackProgressFromDetail(cachedDetail || state.modal.detail || fallbackItem))
    state.modal.pref = 'modal-play'
  }

  function removeCurrentTitleFromMyList() {
    if (!state.modal || !state.modal.item) return
    if (!removeFromMyList(state.modal.item)) return
    refreshCatalogState()
    refreshOpenModalAfterCatalogChange()
    drawModal()
  }

  function removeCurrentTitleFromContinueWatching() {
    if (!state.modal || !state.modal.item) return
    if (!removeFromContinueWatching(state.modal.item)) return
    refreshCatalogState()
    refreshOpenModalAfterCatalogChange()
    drawModal()
  }

  function closeModal() {
    if (!state.modal) return
    const restore = state.modal.origin || (state.modal.originView === 'search' ? state.lastSearch : state.lastHome) || 'hero-play'
    state.view = state.modal.originView || 'home'
    state.modal = null
    renderApp(restore)
  }

  function onClick(event) {
    const actionNode = event.target.closest('[data-action]')
    const focusNode = event.target.closest('[data-focus-id]')
    const playerLink = event.target.closest('a[href^="/player"]')
    if (focusNode) focus(focusNode.dataset.focusId, false)
    if (playerLink) rememberPlayerLaunch(playerLink)
    if (!actionNode) return

    const action = actionNode.dataset.action
    if (action === 'reload') return loading(), loadCatalog()
    if (action === 'jump') return jump(actionNode.dataset.target || 'home')
    if (action === 'search-key') return appendSearch(actionNode.dataset.value || '', actionNode.dataset.focusId)
    if (action === 'search-backspace') return trimSearch(actionNode.dataset.focusId)
    if (action === 'search-clear') return clearSearch(actionNode.dataset.focusId)
    if (action === 'details') return openDetails(actionNode.dataset.key, actionNode.dataset.focusId || (focusNode && focusNode.dataset.focusId))
    if (action === 'close') return closeModal()
    if (action === 'toggle-season-menu') return toggleSeasonMenu()
    if (action === 'select-season') return selectSeason(Number(actionNode.dataset.season || '0'))
    if (action === 'install-pwa') return triggerPwaInstall()
    if (action === 'remove-continue-watching') return removeCurrentTitleFromContinueWatching()
    if (action === 'remove-my-list') return removeCurrentTitleFromMyList()
  }

  function onKey(event) {
    const action = KEY[event.key] || CODE[event.keyCode || event.which || 0]
    if (!action) return

    if (action === 'BACK') {
      event.preventDefault()
      if (state.modal && state.modal.seasonMenuOpen) return toggleSeasonMenu(false)
      if (state.modal) return closeModal()
      if (state.view === 'search') {
        state.view = 'home'
        renderApp('hero-play')
        requestAnimationFrame(() => scrollSection(root.querySelector('[data-section-id="home"]')))
      }
      return
    }

    if (action === 'SELECT') {
      const active = currentNode()
      if (active) {
        event.preventDefault()
        active.click()
      }
      return
    }

    if (action === 'PLAY') {
      const active = state.scope === 'modal' ? overlay.querySelector('[data-focus-id="modal-play"]') : root.querySelector('[data-focus-id="hero-play"]')
      if (active) {
        event.preventDefault()
        active.click()
      }
      return
    }

    event.preventDefault()
    move(action.toLowerCase())
  }

  function move(direction) {
    const active = currentNode()
    if (!active) {
      focus(state.scope === 'modal' ? 'modal-close' : state.view === 'search' ? state.lastSearch || 'search-key-0-0' : state.lastHome || 'hero-play')
      return
    }
    const nextId = active.dataset['focus' + direction.charAt(0).toUpperCase() + direction.slice(1)]
    if (nextId) focus(nextId)
  }

  function currentNode() {
    const scope = state.scope === 'modal' ? overlay : root
    return scope.querySelector(`[data-focus-id="${state.focusId}"]`)
  }

  function focus(id, scroll = true) {
    const scope = state.scope === 'modal' ? overlay : root
    const target = scope.querySelector(`[data-focus-id="${id}"]`)
    if (!target) return false
    state.focusId = id
    if (state.scope !== 'modal') {
      if (state.view === 'search') state.lastSearch = id
      else state.lastHome = id
    }
    syncFocus(id)
    target.focus({ preventScroll: true })
    if (scroll) scrollFocusTarget(target)
    return true
  }

  function scrollFocusTarget(target) {
    const behavior = motionBehavior()
    const hero = target.closest('.hero')
    if (hero && target.closest('.hero-actions')) {
      scrollSection(hero)
      return
    }

    const searchStage = target.closest('.search-stage')
    if (searchStage && target.closest('.search-console')) {
      scrollSection(searchStage.closest('.screen-search') || searchStage)
      return
    }

    if (target.closest('.side-rail')) {
      target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior })
      return
    }

    const rowTrack = target.closest('.row-track')
    if (rowTrack) {
      alignHorizontalScroller(rowTrack, target, behavior)
      target.closest('.row')?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior })
      return
    }

    target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior })
  }

  function alignHorizontalScroller(scroller, target, behavior) {
    const scrollerRect = scroller.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const styles = window.getComputedStyle(scroller)
    const paddingStart = parseFloat(styles.scrollPaddingInlineStart || styles.scrollPaddingLeft || '0') || 0
    const paddingEnd = parseFloat(styles.scrollPaddingInlineEnd || styles.scrollPaddingRight || '0') || 0
    const targetStart = targetRect.left - scrollerRect.left + scroller.scrollLeft
    const targetEnd = targetStart + targetRect.width
    const viewStart = scroller.scrollLeft + paddingStart
    const viewEnd = scroller.scrollLeft + scroller.clientWidth - paddingEnd
    let nextLeft = null

    if (targetStart < viewStart + 4) nextLeft = Math.max(0, targetStart - paddingStart)
    else if (targetEnd > viewEnd - 4) nextLeft = Math.max(0, targetStart - paddingStart)

    if (nextLeft !== null && Math.abs(nextLeft - scroller.scrollLeft) > 2) {
      scroller.scrollTo({ left: nextLeft, behavior })
    }
  }

  function motionBehavior() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  }

  function syncFocus(id) {
    document.querySelectorAll('.focusable.is-focused').forEach((node) => node.classList.remove('is-focused'))
    const active = document.querySelector(`[data-focus-id="${id}"]`)
    if (!active) return
    active.classList.add('is-focused')
    state.focusId = id
    if (active.dataset.focusScope === 'search') state.lastSearch = id
    if (active.dataset.focusScope === 'home') state.lastHome = id
    if (id.startsWith('nav-')) state.lastNav = id
  }

  function jump(target) {
    const normalized = cleanTarget(target || 'home')
    if (normalized === 'search') {
      state.view = 'search'
      renderApp('search-key-0-0')
      return requestAnimationFrame(() => scrollSection(root.querySelector('.screen-search')))
    }

    state.view = 'home'
    if (normalized === 'home') {
      renderApp('hero-play')
      return requestAnimationFrame(() => scrollSection(root.querySelector('[data-section-id="home"]')))
    }

    const targetFocus = focusForSection(normalized)
    renderApp(targetFocus || 'hero-play')
    requestAnimationFrame(() => scrollSection(root.querySelector(`[data-section-id="${normalized}"]`)))
  }

  function scrollSection(section, offset = 0) {
    if (!section) return
    const top = Math.max(0, window.scrollY + section.getBoundingClientRect().top - offset)
    window.scrollTo({ top, left: 0, behavior: motionBehavior() })
  }

  function appendSearch(value, preferred) {
    const token = value === ' ' ? ' ' : cleanText(value).slice(0, 1)
    if (!token) return
    state.searchQuery = `${state.searchQuery}${token}`.replace(/\s{2,}/g, ' ').slice(0, 42).trimStart()
    refreshSearch(preferred || 'search-key-0-0')
  }

  function trimSearch(preferred) {
    state.searchQuery = state.searchQuery.slice(0, -1)
    refreshSearch(preferred || 'search-key-0-0')
  }

  function clearSearch(preferred) {
    state.searchQuery = ''
    refreshSearch(preferred || 'search-key-0-0')
  }

  function refreshSearch(preferred) {
    const query = normalizedQuery(state.searchQuery)
    if (state.searchDebounceTimer) {
      clearTimeout(state.searchDebounceTimer)
      state.searchDebounceTimer = 0
    }
    state.searchRequestId += 1
    const requestId = state.searchRequestId
    if (!query) {
      state.searchResults = []
      state.searchLoading = false
      state.searchPending = false
      state.searchError = ''
      renderApp(resolveSearchFocus(preferred))
      return
    }

    const cached = state.searchCache.get(query)
    if (cached) {
      state.searchResults = cached
      state.searchLoading = false
      state.searchPending = false
      state.searchError = ''
      mergeSearchItems(cached)
      renderApp(resolveSearchFocus(preferred))
      return
    }

    state.searchLoading = false
    state.searchPending = true
    state.searchError = ''
    renderApp(resolveSearchFocus(preferred))

    state.searchDebounceTimer = window.setTimeout(() => {
      if (requestId !== state.searchRequestId || normalizedQuery(state.searchQuery) !== query) return
      state.searchDebounceTimer = 0
      state.searchPending = false
      state.searchLoading = true
      if (state.view === 'search') renderApp(resolveSearchFocus(preferred))

      fetchSearchResults(query)
        .then((payload) => {
          if (requestId !== state.searchRequestId || normalizedQuery(state.searchQuery) !== query) return
          const localItems = localSearchResults(query)
          const remoteItems = Array.isArray(payload.results) ? payload.results : []
          const items = mergeResultLists(remoteItems, localItems)
          state.searchCache.set(query, items)
          state.searchResults = items
          state.searchLoading = false
          state.searchError = payload.source === 'fallback'
            ? (items.length ? 'Live TMDB search is unavailable right now. Showing browse matches.' : 'Live TMDB search is unavailable right now. No local matches were found.')
            : ''
          mergeSearchItems(items)
          if (state.view === 'search') renderApp(resolveSearchFocus(preferred))
        })
        .catch(() => {
          if (requestId !== state.searchRequestId || normalizedQuery(state.searchQuery) !== query) return
          state.searchResults = localSearchResults(query)
          state.searchLoading = false
          state.searchError = 'Live TMDB search is unavailable right now. Showing local matches.'
          if (state.view === 'search') renderApp(resolveSearchFocus(preferred))
        })
    }, SEARCH_DEBOUNCE_MS)
  }
  async function fetchSearchResults(query) {
    const params = new URLSearchParams({ query })
    const response = await fetch((cfg.searchUrl || '/api/search') + '?' + params.toString())
    const payload = await response.json()
    if (!response.ok || !payload.success) {
      throw new Error(payload.error || 'Unable to search TMDB right now.')
    }
    return payload
  }

  function buildSearchIndex(catalog) {
    const entries = []
    const seen = new Set()
    const push = (item) => {
      if (!item || !item.key || seen.has(item.key)) return
      seen.add(item.key)
      entries.push(item)
    }
    push(catalog.hero)
    ;(catalog.sections || []).forEach((row) => (row.items || []).forEach(push))
    return entries
  }

  function refreshCatalogState() {
    const nextCatalog = catalogWithContinueWatching(state.catalogSource || state.catalog)
    const nextSearchIndex = buildSearchIndex(nextCatalog)
    const seen = new Set(nextSearchIndex.map((item) => item.key))

    for (const item of state.searchIndex || []) {
      const nextItem = syncPlaybackItem(item)
      if (!nextItem || !nextItem.key || seen.has(nextItem.key)) continue
      seen.add(nextItem.key)
      nextSearchIndex.push(nextItem)
    }

    const byKey = new Map(nextSearchIndex.map((item) => [item.key, item]))
    state.catalog = nextCatalog
    state.searchIndex = nextSearchIndex
    state.searchResults = (state.searchResults || []).map((item) => byKey.get(item.key) || syncPlaybackItem(item))
  }

  function searchGenres() {
    const found = []
    const seen = new Set()
    for (const item of state.searchIndex) {
      for (const genre of item.genres || []) {
        const label = cleanText(genre).trim()
        const key = label.toLowerCase()
        if (!label || seen.has(key)) continue
        seen.add(key)
        found.push(label)
      }
    }
    return found.length ? found.slice(0, 12) : ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Mystery', 'Romance', 'Sci-Fi']
  }

  function getSearchResults() {
    const query = normalizedQuery(state.searchQuery)
    if (!query) return topSearches().slice(0, 16)
    return state.searchResults.slice(0, 18)
  }

  function topSearches() {
    const fromRow = (state.catalog.sections || []).find((row) => row.id === 'top-searches')
    return fromRow && fromRow.items && fromRow.items.length ? fromRow.items : state.searchIndex
  }

  function localSearchResults(query) {
    const terms = String(query || '').split(/\s+/).filter(Boolean)
    return state.searchIndex.filter((item) => matchesSearch(item, terms)).slice(0, 18)
  }

  function mergeResultLists(primary = [], secondary = []) {
    const merged = []
    const seen = new Set()
    const push = (item) => {
      if (!item || !item.key || seen.has(item.key)) return
      seen.add(item.key)
      merged.push(item)
    }
    ;(primary || []).forEach(push)
    ;(secondary || []).forEach(push)
    return merged
  }

  function mergeSearchItems(items) {
    const seen = new Set(state.searchIndex.map((item) => item.key))
    for (const item of items || []) {
      if (!item || !item.key || seen.has(item.key)) continue
      seen.add(item.key)
      state.searchIndex.push(item)
    }
  }

  function matchesSearch(item, terms) {
    const haystack = [item.title, item.overview, ...(item.genres || [])].join(' ').toLowerCase()
    return terms.every((term) => haystack.includes(term))
  }

  function normalizedQuery(value) {
    return cleanText(value).trim().toLowerCase()
  }

  function resolveSearchFocus(preferred) {
    const activeFocus = state.focusId || ''
    if (/^(nav-|search-key-|search-card-)/.test(activeFocus)) return activeFocus
    return preferred || state.lastSearch || 'search-key-0-0'
  }

  function navItems() {
    const catalogNav = Array.isArray(state.catalog?.nav) ? state.catalog.nav : []
    const searchItem = catalogNav.find((item) => cleanTarget(item.target || item.label) === 'search') || FALLBACK_NAV[0]
    const homeItem = catalogNav.find((item) => cleanTarget(item.target || item.label) === 'home') || FALLBACK_NAV[1]
    return [
      { ...searchItem, target: 'search', icon: searchItem.icon || 'search' },
      { ...homeItem, target: 'home', icon: homeItem.icon || 'home' },
    ]
  }

  function navButtons() {
    return Array.from(root.querySelectorAll('[data-focus-id^="nav-"]'))
  }

  function iconForTarget(target) {
    if (target === 'search') return 'search'
    if (target === 'home') return 'home'
    if (target === 'install') return 'download'
    if (target === 'next-watch') return 'tv'
    if (target === 'my-list') return 'movies'
    if (target === 'top-searches') return 'spark'
    return 'languages'
  }

  function navIcon(target) {
    const icon = iconForTarget(target)
    if (icon === 'search') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10.5 3a7.5 7.5 0 1 0 4.73 13.32l4.22 4.23 1.55-1.55-4.23-4.22A7.5 7.5 0 0 0 10.5 3m0 2.2a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6"/></svg>'
    if (icon === 'download') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 3h2v8.17l2.59-2.58L17 10l-5 5-5-5 1.41-1.41L11 11.17zm-6 13h14v2H5z"/></svg>'
    if (icon === 'tv') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 4h10l-1.6 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.6zm-2 4v9h14V8z"/></svg>'
    if (icon === 'movies') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m1 2v10h14V7zm2 1.2h2v2H7zm0 3.8h2v2H7zm0 3.8h2v1.2H7zm8.5-5.85 2.9 1.85-2.9 1.85z"/></svg>'
    if (icon === 'spark') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2 2.1 6.15L20 10l-5.9 1.85L12 18l-2.1-6.15L4 10l5.9-1.85z"/></svg>'
    if (icon === 'languages') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.8 4h2.4l4.8 12h-2.4l-1-2.7h-5.2L10.4 16H8zm1.2 3.3-1.9 4.2h3.6zM3.2 6h5.5v2H7.1c-.2 1.5-.8 2.9-1.7 4 1 .8 2.1 1.4 3.3 1.9L7.8 16c-1.3-.5-2.5-1.2-3.6-2.1-.9.7-1.8 1.3-2.8 1.8l-.9-1.8c.9-.4 1.7-.9 2.5-1.5C2 11.5 1.4 10.2 1 8.9h2.1c.3.9.8 1.8 1.4 2.5.7-.9 1.1-1.9 1.3-3H3.2z"/></svg>'
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3.3 4 9v11.7h5.8v-6.9h4.4v6.9H20V9z"/></svg>'
  }

  function homeEntryForTarget(target, rows) {
    if (target === 'home' || target === 'search') return 'hero-play'
    const rowIndex = findRowIndex(rows, target)
    return rowIndex === -1 ? 'hero-play' : focusKey(rowIndex, 0)
  }

  function navIdForSection(sectionId) {
    const candidate = `nav-${cleanTarget(sectionId)}`
    return root.querySelector(`[data-focus-id="${candidate}"]`) ? candidate : 'nav-home'
  }

  function focusForSection(sectionId) {
    const rowIndex = findRowIndex(state.catalog?.sections || [], sectionId)
    return rowIndex === -1 ? '' : focusKey(rowIndex, 0)
  }

  function findRowIndex(rows, sectionId) {
    return rows.findIndex((row) => cleanTarget(row.id) === cleanTarget(sectionId))
  }

  function firstCardId(rows, rowIndex, itemIndex) {
    if (!rows[rowIndex] || !(rows[rowIndex].items || []).length) return ''
    return focusKey(rowIndex, Math.min(itemIndex, rows[rowIndex].items.length - 1))
  }

  function keyboardAnchorForColumn(column) {
    const rowIndex = SEARCH_KEYBOARD.length - 1
    const row = SEARCH_KEYBOARD[rowIndex]
    return `search-key-${rowIndex}-${Math.min(column, row.length - 1)}`
  }

  function searchCardBridgeForKeyboard(rowIndex, columnIndex, results, columns) {
    if (!results.length) return ''
    return 'search-card-0'
  }

  function keyboardBridgeForResult(index, columns, mode = 'edge') {
    const rowIndex = Math.min(Math.floor(index / columns), SEARCH_KEYBOARD.length - 1)
    const row = SEARCH_KEYBOARD[rowIndex] || SEARCH_KEYBOARD[0]
    if (!row || !row.length) return 'search-key-0-0'
    if (mode === 'column') {
      const ratio = columns > 1 ? (index % columns) / (columns - 1) : 0
      const column = Math.min(row.length - 1, Math.round(ratio * (row.length - 1)))
      return `search-key-${rowIndex}-${column}`
    }
    return `search-key-${rowIndex}-${row.length - 1}`
  }

  function searchResultColumns() {
    const width = window.innerWidth || 1920
    if (width >= 3700) return 5
    if (width <= 900) return 2
    return 4
  }

  function findItem(key) {
    return state.searchResults.find((entry) => entry.key === key) || state.searchIndex.find((entry) => entry.key === key) || null
  }

  function searchFallbackFocus() {
    return root.querySelector('[data-focus-id="search-key-0-0"]') ? 'search-key-0-0' : (root.querySelector('[data-focus-id^="search-card-"]')?.dataset.focusId || 'nav-search')
  }

  function rememberPlayerLaunch(linkNode) {
    const href = linkNode.getAttribute('href') || ''
    if (!href) return
    const url = new URL(href, window.location.origin)
    const tmdbId = url.searchParams.get('tmdb_id') || ''
    const type = (url.searchParams.get('type') || 'movie').toLowerCase()
    const season = url.searchParams.get('season') || '1'
    const episode = url.searchParams.get('episode') || '1'
    const detail = state.modal?.detail || state.modal?.item || state.catalog?.hero || null
    const item = state.modal?.item || detail
    const currentEpisode = detail && Array.isArray(detail.episodes)
      ? detail.episodes.find((entry) => String(entry.episodeNumber) === String(episode))
      : null

    writeSessionJson(PLAYER_PREVIEW_KEY, {
      tmdbId: String(tmdbId || detail?.tmdbId || item?.tmdbId || ''),
      type,
      season: String(season),
      episode: String(episode),
      title: detail?.title || item?.title || '',
      subtitle: currentEpisode?.name || '',
      backdropUrl: detail?.backdropUrl || item?.backdropUrl || '',
      cardImage: currentEpisode?.stillUrl || detail?.cardImage || item?.cardImage || '',
    })

    if (!state.modal) {
      removeSessionKey(PLAYER_RETURN_KEY)
      return
    }

    writeSessionJson(PLAYER_RETURN_KEY, {
      key: state.modal.key,
      item: state.modal.item,
      origin: state.modal.origin || state.focusId || 'hero-play',
      originView: state.modal.originView || state.view,
      searchQuery: state.searchQuery || '',
      season: Number(state.modal.season || season || 1),
      tmdbId: Number(tmdbId || detail?.tmdbId || item?.tmdbId || 0),
      type,
      createdAt: Date.now(),
    })
  }

  function consumePlayerReturn() {
    const restore = readSessionJson(PLAYER_RETURN_KEY)
    removeSessionKey(PLAYER_RETURN_KEY)
    if (!restore || !restore.key) return null
    if (restore.createdAt && Date.now() - Number(restore.createdAt) > 1000 * 60 * 30) return null
    return restore
  }

  function readSessionJson(key) {
    try {
      const raw = window.sessionStorage.getItem(key)
      return raw ? JSON.parse(raw) : null
    } catch (_error) {
      return null
    }
  }

  function writeSessionJson(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (_error) {
      // ignore storage failures in constrained webview environments
    }
  }

  function removeSessionKey(key) {
    try {
      window.sessionStorage.removeItem(key)
    } catch (_error) {
      // ignore storage failures in constrained webview environments
    }
  }

  
  function readLocalJson(key) {
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? JSON.parse(raw) : null
    } catch (_error) {
      return null
    }
  }

  function writeLocalJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (_error) {
      // ignore storage failures in constrained webview environments
    }
  }

  function titleStorageKeys(itemOrTmdbId, type, keyValue) {
    const item = itemOrTmdbId && typeof itemOrTmdbId === 'object' ? itemOrTmdbId : null
    const tmdbId = String(item ? (item.tmdbId || item.tmdb_id || item.id || '') : (itemOrTmdbId || '')).trim()
    const normalizedType = String(item ? (item.type || type || '') : (type || '')).trim().toLowerCase()
    const directKey = String(item ? (item.key || keyValue || '') : (keyValue || '')).trim()
    const typedKey = tmdbId ? `${normalizedType === 'tv' ? 'tv' : 'movie'}:${tmdbId}` : ''
    return [directKey, typedKey, tmdbId].filter(Boolean)
  }

  function matchesStoredTitle(entry, item) {
    const keys = titleStorageKeys(item)
    if (!entry || !keys.length) return false
    if (typeof entry === 'string' || typeof entry === 'number') return keys.includes(String(entry))

    const entryKey = String(entry.key || '').trim()
    const entryId = String(entry.tmdbId || entry.tmdb_id || entry.id || '').trim()
    const entryType = String(entry.type || '').trim().toLowerCase()

    if (entryKey && keys.includes(entryKey)) return true
    if (!entryId || !keys.includes(entryId)) return false
    return !entryType || entryType === String(item.type || '').trim().toLowerCase()
  }

  function readMyListHiddenStore() {
    return readLocalJson(MY_LIST_HIDDEN_KEY) || {}
  }

  function writeMyListHiddenStore(store) {
    writeLocalJson(MY_LIST_HIDDEN_KEY, store)
  }

  function isHiddenFromMyList(item) {
    const hidden = readMyListHiddenStore()
    return titleStorageKeys(item).some((key) => Boolean(hidden[key]))
  }

  function readWatchlistStore() {
    return readLocalJson(WATCHLIST_KEY) || {}
  }

  function writeWatchlistStore(store) {
    writeLocalJson(WATCHLIST_KEY, store)
  }

  function removeFromPersistedWatchlist(item) {
    const store = readWatchlistStore()
    if (Array.isArray(store)) {
      const nextStore = store.filter((entry) => !matchesStoredTitle(entry, item))
      if (nextStore.length !== store.length) writeWatchlistStore(nextStore)
      return
    }

    const nextStore = { ...store }
    let changed = false
    titleStorageKeys(item).forEach((key) => {
      if (!nextStore[key]) return
      delete nextStore[key]
      changed = true
    })
    if (changed) writeWatchlistStore(nextStore)
  }

  function isInMyList(item, catalog = state.catalog) {
    if (!item || !item.key || !catalog) return false
    const myListRow = (catalog.sections || []).find((row) => cleanTarget(row.id) === 'my-list')
    return Boolean(myListRow && (myListRow.items || []).some((entry) => entry.key === item.key))
  }

  function removeFromMyList(item) {
    if (!item) return false
    const hidden = { ...readMyListHiddenStore() }
    let changed = false
    titleStorageKeys(item).forEach((key) => {
      if (hidden[key]) return
      hidden[key] = true
      changed = true
    })
    if (changed) writeMyListHiddenStore(hidden)
    removeFromPersistedWatchlist(item)
    return changed
  }

  function readContinueWatchingStore() {
    return readLocalJson(CONTINUE_WATCHING_KEY) || {}
  }

  function readContinueWatchingRecord(tmdbId, type) {
    if (!tmdbId) return null
    const record = readContinueWatchingStore()[String(tmdbId)]
    if (!record) return null
    if (type && String(record.type || '') !== String(type)) return null
    return record
  }

  function hasContinueWatchingRecord(item) {
    return Boolean(item && readContinueWatchingRecord(item.tmdbId, item.type))
  }

  function writeContinueWatchingStore(store) {
    writeLocalJson(CONTINUE_WATCHING_KEY, store)
  }

  function removeFromContinueWatching(item) {
    if (!item || !item.tmdbId) return false
    const store = { ...readContinueWatchingStore() }
    const key = String(item.tmdbId)
    if (!store[key]) return false
    delete store[key]
    writeContinueWatchingStore(store)
    return true
  }

  function buildPlayerHrefWithProgress(tmdbId, type, options = {}) {
    const params = new URLSearchParams()
    params.set('tmdb_id', String(tmdbId || ''))
    params.set('type', type === 'tv' ? 'tv' : 'movie')
    params.set('multiLang', '1')
    params.set('autoplay', '1')
    if (type === 'tv') {
      params.set('season', String(options.season || '1'))
      params.set('episode', String(options.episode || '1'))
    }
    if (options.resume) params.set('resume', '1')
    if (Number(options.start || 0) > 0) params.set('start', String(Math.floor(Number(options.start || 0))))
    return '/player?' + params.toString()
  }

  function stripPlaybackProgressHref(href) {
    const raw = String(href || '').trim()
    if (!raw) return raw
    try {
      const url = new URL(raw, window.location.origin)
      url.searchParams.delete('resume')
      url.searchParams.delete('start')
      return url.pathname + url.search
    } catch (_error) {
      return raw
    }
  }

  function syncPlaybackItem(item) {
    if (!item) return item
    const baseItem = item.playHref
      ? { ...item, playHref: stripPlaybackProgressHref(item.playHref) }
      : item
    return decorateItemWithProgress(baseItem)
  }

  function stripPlaybackProgressFromDetail(detail) {
    if (!detail) return detail
    return {
      ...detail,
      playHref: stripPlaybackProgressHref(detail.playHref),
      episodes: Array.isArray(detail.episodes)
        ? detail.episodes.map((entry) => ({
            ...entry,
            playHref: stripPlaybackProgressHref(entry.playHref),
          }))
        : detail.episodes,
    }
  }

  function continueProgressLabel(record) {
    const progress = record && record.progress
    const watched = Number(progress && progress.watched)
    const duration = Number(progress && progress.duration)
    if (!Number.isFinite(watched) || watched <= 0 || !Number.isFinite(duration) || duration <= 0) return ''
    const percent = Math.max(1, Math.min(99, Math.round((watched / duration) * 100)))
    if (record.type === 'tv') {
      const season = record.last_season_watched || '1'
      const episode = record.last_episode_watched || '1'
      return 'Resume S' + season + ' E' + episode + ' / ' + percent + '% watched'
    }
    return 'Resume movie / ' + percent + '% watched'
  }

  function primaryActionLabel(detail, item) {
    const href = String((detail && detail.playHref) || (item && item.playHref) || '')
    return href.includes('resume=1') ? 'Continue Watching' : 'Play'
  }

  function continueItemFromRecord(record) {
    const tmdbId = Number(record && record.id)
    if (!tmdbId) return null
    const type = record.type === 'tv' ? 'tv' : 'movie'
    const season = String(record.last_season_watched || '1')
    const episode = String(record.last_episode_watched || '1')
    const watched = Number(record.progress && record.progress.watched)
    return {
      key: type + ':' + tmdbId,
      tmdbId,
      type,
      title: cleanText(record.title || 'Untitled'),
      overview: cleanText(continueProgressLabel(record)),
      genres: Array.isArray(record.genres) ? record.genres : [],
      year: cleanText(record.year || ''),
      rating: cleanText(record.rating || ''),
      quality: 'HD',
      art: artPalette(tmdbId),
      backdropUrl: record.backdrop_path || record.poster_path || '',
      cardImage: record.poster_path || record.backdrop_path || '',
      defaultSeason: type === 'tv' ? Number(season || 1) : 1,
      playHref: buildPlayerHrefWithProgress(tmdbId, type, {
        season,
        episode,
        resume: true,
        start: watched,
      }),
    }
  }

  function decorateItemWithProgress(item) {
    if (!item || !item.tmdbId || !item.key) return item
    const record = readContinueWatchingRecord(item.tmdbId, item.type)
    if (!record) return item
    const season = String(record.last_season_watched || item.defaultSeason || '1')
    const episode = String(record.last_episode_watched || '1')
    const watched = Number(record.progress && record.progress.watched)
    return {
      ...item,
      defaultSeason: item.type === 'tv' ? Number(season || 1) : item.defaultSeason,
      playHref: buildPlayerHrefWithProgress(item.tmdbId, item.type, {
        season,
        episode,
        resume: true,
        start: watched,
      }),
    }
  }

  function catalogWithContinueWatching(catalog) {
    if (!catalog) return catalog
    const hero = syncPlaybackItem(catalog.hero)
    const sections = (catalog.sections || [])
      .map((row) => ({
        ...row,
        items: (row.items || []).map(syncPlaybackItem),
      }))
      .map((row) => (
        cleanTarget(row.id) === 'my-list'
          ? {
              ...row,
              items: (row.items || []).filter((item) => !isHiddenFromMyList(item)),
            }
          : row
      ))
      .filter((row) => (row.items || []).length)
    const records = Object.values(readContinueWatchingStore())
      .sort((left, right) => Number(right && right.last_updated) - Number(left && left.last_updated))
      .map(continueItemFromRecord)
      .filter(Boolean)

    if (records.length) {
      sections.unshift({
        id: 'continue-watching',
        title: 'Continue Watching',
        subtitle: 'Pick up right where you left off.',
        items: records.slice(0, 15),
      })
    }

    return {
      ...catalog,
      hero,
      sections,
    }
  }

  function applyResumeToDetail(detail) {
    const nextDetail = stripPlaybackProgressFromDetail(detail)
    if (!nextDetail || !nextDetail.tmdbId) return nextDetail
    const record = readContinueWatchingRecord(nextDetail.tmdbId, nextDetail.type)
    if (!record) return nextDetail
    const season = String(record.last_season_watched || nextDetail.selectedSeason || '1')
    const episode = String(record.last_episode_watched || '1')
    const watched = Number(record.progress && record.progress.watched)
    const resumedDetail = {
      ...nextDetail,
      playHref: buildPlayerHrefWithProgress(nextDetail.tmdbId, nextDetail.type, {
        season,
        episode,
        resume: true,
        start: watched,
      }),
    }
    if (nextDetail.type === 'tv' && String(nextDetail.selectedSeason || '1') === season) {
      resumedDetail.episodes = (nextDetail.episodes || []).map((entry) => (
        String(entry.episodeNumber) === episode
          ? {
              ...entry,
              playHref: buildPlayerHrefWithProgress(nextDetail.tmdbId, nextDetail.type, {
                season,
                episode,
                resume: true,
                start: watched,
              }),
            }
          : entry
      ))
    }
    return resumedDetail
  }

function artPalette(seed) {
    const palettes = [
      { start: '#0f172a', end: '#1d4ed8', accent: '#93c5fd' },
      { start: '#1f0a0f', end: '#e50914', accent: '#fca5a5' },
      { start: '#10261d', end: '#10b981', accent: '#86efac' },
      { start: '#271239', end: '#8b5cf6', accent: '#d8b4fe' },
      { start: '#36210a', end: '#f59e0b', accent: '#fde68a' },
      { start: '#172033', end: '#334155', accent: '#7dd3fc' },
    ]
    const index = Math.abs(Number(seed) || 0) % palettes.length
    return palettes[index]
  }

  function focusKey(rowIndex, itemIndex) {
    return `card-${rowIndex}-${itemIndex}`
  }

  function clamp(index, length) {
    if (!length) return 0
    return Math.max(0, Math.min(index, length - 1))
  }

  function cleanTarget(value) {
    return String(value || '').trim().toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '') || 'home'
  }

  function art(value) {
    const color = value || {}
    return `--art-start:${escAttr(color.start || '#0f172a')};--art-end:${escAttr(color.end || '#111827')};--art-accent:${escAttr(color.accent || '#60a5fa')}`
  }

  function monogram(value) {
    return String(value || '?').trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0).toUpperCase()).join('')
  }

  function shorten(value, length) {
    const text = cleanText(value)
    const limit = Math.max(0, Number(length) || 0)
    const characters = Array.from(text)
    if (!limit || characters.length <= limit) return text
    const suffix = limit > 3 ? '...' : '.'.repeat(limit)
    const preview = characters.slice(0, Math.max(limit - suffix.length, 0)).join('').trimEnd()
    const wordSafe = preview.replace(/\s+\S*$/, '').trimEnd()
    const bestPreview = wordSafe && wordSafe.length >= Math.floor((limit - suffix.length) * 0.65) ? wordSafe : preview
    return bestPreview + suffix
  }

  function cleanText(value) {
    return String(value == null ? '' : value).replace(/\uFFFD+/g, '...')
  }

  function esc(value) {
    return cleanText(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
  }

  function escAttr(value) {
    return esc(value).replace(/`/g, '&#96;')
  }
})()



