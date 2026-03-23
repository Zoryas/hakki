import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { TVPlayer, useTVPlayerStore } from 'react-tv-player';
import {
  faBackward,
  faClosedCaptioning,
  faForward,
  faGaugeHigh,
  faLanguage,
  faList,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';

const boot = window.__ARRWA_PLAYER_BOOT__ || {};
const initial = boot.initial || {};
const PLAYER_RETURN_KEY = 'arrwa:player-return';
const PLAYER_PREVIEW_KEY = 'arrwa:player-preview';
const EMPTY_SUBTITLES = [{ id: 'off', index: -1, label: 'Off', meta: 'No subtitles' }];
const DEFAULT_SEEK_PRESET_ID = 'seek-10';
const SEEK_PRESETS = [
  { id: 'seek-5', label: '5 sec', meta: 'Precise seeking', steps: [5, 5, 10, 15, 20, 30] },
  { id: 'seek-10', label: '10 sec', meta: 'Standard seeking', steps: [10, 10, 15, 20, 30, 45, 60] },
  { id: 'seek-30', label: '30 sec', meta: 'Quick jumps', steps: [30, 30, 45, 60, 90, 120, 180] },
  { id: 'seek-60', label: '1 min', meta: 'Large jumps', steps: [60, 60, 90, 120, 180, 240, 300] },
  { id: 'seek-180', label: '3 min', meta: 'Chapter-sized jumps', steps: [180, 180, 240, 300, 360, 420, 600] },
  { id: 'seek-300', label: '5 min', meta: 'Fast skipping', steps: [300, 300, 420, 600, 900, 1200, 1500] },
];
const PLAYER_FONT_FACE_STYLES = `
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
`;
const GLOBAL_STYLES = `${PLAYER_FONT_FACE_STYLES}
@keyframes arrwaPlayerSpin { to { transform: rotate(360deg); } }`;
const CONTINUE_WATCHING_KEY = 'hak:continue-watching';
const SUBTITLE_SETTINGS_KEY = 'hak:subtitle-settings';
const SUBTITLE_FONT_SIZE_OPTIONS = [
  { id: 'size-sm', label: 'Small', meta: 'Compact captions', value: '1.15rem' },
  { id: 'size-md', label: 'Medium', meta: 'Balanced size', value: '1.45rem' },
  { id: 'size-lg', label: 'Large', meta: '10-foot readable', value: '1.85rem' },
  { id: 'size-xl', label: 'Extra Large', meta: 'Maximum legibility', value: '2.2rem' },
  { id: 'size-2xl', label: 'Huge', meta: 'Very large subtitles', value: '2.7rem' },
  { id: 'size-3xl', label: 'Cinema', meta: 'Largest subtitle option', value: '3.2rem' },
];
const SUBTITLE_SCALE_OPTIONS = [
  { id: 'scale-85', label: '85%', meta: 'Slightly smaller', value: 0.85 },
  { id: 'scale-100', label: '100%', meta: 'Original scale', value: 1 },
  { id: 'scale-125', label: '125%', meta: 'Comfortably larger', value: 1.25 },
  { id: 'scale-150', label: '150%', meta: 'Large TV boost', value: 1.5 },
  { id: 'scale-175', label: '175%', meta: 'Extra couch distance', value: 1.75 },
  { id: 'scale-200', label: '200%', meta: 'Maximum scaling', value: 2 },
];
const SUBTITLE_FONT_FAMILY_OPTIONS = [
  { id: 'font-sans', label: 'Netflix Sans', meta: 'Netflix-style subtitle face', value: '"Netflix Sans", "Helvetica Neue", Arial, sans-serif' },
  { id: 'font-serif', label: 'Serif', meta: 'Book-like subtitles', value: 'Georgia, "Times New Roman", serif' },
  { id: 'font-mono', label: 'Mono', meta: 'Fixed-width captions', value: '"Courier New", monospace' },
];
const SUBTITLE_COLOR_OPTIONS = [
  { id: 'color-white', label: 'White', meta: 'Neutral default', value: '#ffffff' },
  { id: 'color-yellow', label: 'Yellow', meta: 'Classic subtitle tone', value: '#f9e26b' },
  { id: 'color-cyan', label: 'Cyan', meta: 'Cool contrast', value: '#9be7ff' },
];
const SUBTITLE_BACKGROUND_OPTIONS = [
  { id: 'bg-clear', label: 'Clear', meta: 'No backdrop', value: 'transparent' },
  { id: 'bg-soft', label: 'Soft', meta: 'Gentle dark backing', value: 'rgba(0, 0, 0, 0.52)' },
  { id: 'bg-solid', label: 'Solid', meta: 'Highest contrast', value: 'rgba(0, 0, 0, 0.82)' },
];
const SUBTITLE_SHIFT_OPTIONS = [
  { id: 'shift-neg4', label: '4 sec earlier', meta: 'Show captions sooner', value: -4 },
  { id: 'shift-neg2', label: '2 sec earlier', meta: 'Slightly ahead', value: -2 },
  { id: 'shift-neg1', label: '1 sec earlier', meta: 'Fine-tune early', value: -1 },
  { id: 'shift-0', label: 'On time', meta: 'Match the stream', value: 0 },
  { id: 'shift-pos1', label: '1 sec later', meta: 'Fine-tune late', value: 1 },
  { id: 'shift-pos2', label: '2 sec later', meta: 'Delay subtitles', value: 2 },
  { id: 'shift-pos4', label: '4 sec later', meta: 'Strong delay', value: 4 },
];
const SUBTITLE_MARGIN_OPTIONS = [
  { id: 'margin-6', label: '6% Bottom', meta: 'Closest to the lower edge', value: 94 },
  { id: 'margin-10', label: '10% Bottom', meta: 'Balanced lower-third placement', value: 90 },
  { id: 'margin-14', label: '14% Bottom', meta: 'Raised above busy UI', value: 86 },
  { id: 'margin-18', label: '18% Bottom', meta: 'Higher on the screen', value: 82 },
  { id: 'margin-22', label: '22% Bottom', meta: 'Highest safe subtitle line', value: 78 },
];
const DEFAULT_SUBTITLE_SETTINGS = {
  fontSizeId: 'size-lg',
  scaleId: 'scale-100',
  fontFamilyId: 'font-sans',
  colorId: 'color-white',
  backgroundId: 'bg-soft',
  shiftId: 'shift-0',
  marginId: 'margin-10',
};

const shellStyles = {
  frame: {
    position: 'fixed',
    inset: 0,
    background: '#000',
    color: '#fff',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeItems: 'center',
    padding: '5vw',
    zIndex: 8,
  },
  previewBackdrop: {
    position: 'absolute',
    inset: 0,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: 'scale(1.04)',
    filter: 'blur(16px) saturate(1.05)',
    opacity: 0.9,
  },
  previewScrim: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.48), rgba(0,0,0,0.9) 52%, rgba(0,0,0,0.96))',
  },
  loadingPanel: {
    position: 'relative',
    width: 'min(24rem, 100%)',
    display: 'grid',
    justifyItems: 'center',
    gap: '1rem',
    padding: '1.9rem 1.6rem',
    borderRadius: '1.6rem',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(8, 8, 8, 0.72)',
    boxShadow: '0 22px 52px rgba(0,0,0,0.52)',
    backdropFilter: 'blur(18px)',
    textAlign: 'center',
  },
  previewCard: {
    width: 'min(22rem, 72vw)',
    aspectRatio: '16 / 9',
    borderRadius: '1.1rem',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.14)',
    boxShadow: '0 20px 46px rgba(0,0,0,0.4)',
    background: 'rgba(255,255,255,0.04)',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  loadingBrand: {
    color: '#e50914',
    fontSize: '1.5rem',
    fontWeight: 900,
    letterSpacing: '-0.12em',
    textTransform: 'uppercase',
  },
  loadingRing: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    border: '5px solid rgba(229, 9, 20, 0.2)',
    borderTopColor: '#e50914',
    animation: 'arrwaPlayerSpin 0.82s linear infinite',
  },
  loadingTitle: {
    margin: 0,
    fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
    fontWeight: 800,
    lineHeight: 1.12,
  },
  loadingSubTitle: {
    margin: 0,
    color: 'rgba(255,255,255,0.72)',
    fontSize: '0.98rem',
    lineHeight: 1.45,
  },
  meta: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.6rem',
  },
  pill: {
    padding: '0.5rem 0.9rem',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.16)',
    color: 'rgba(255,255,255,0.88)',
    background: 'rgba(255,255,255,0.06)',
    fontSize: '0.92rem',
    fontWeight: 600,
  },
  errorPanel: {
    position: 'relative',
    width: 'min(34rem, 100%)',
    display: 'grid',
    gap: '1rem',
    padding: '2rem 1.8rem',
    borderRadius: '1.6rem',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(8, 8, 8, 0.78)',
    boxShadow: '0 22px 52px rgba(0,0,0,0.52)',
    backdropFilter: 'blur(18px)',
  },
  errorKicker: {
    margin: 0,
    fontSize: '0.88rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.64)',
  },
  errorTitle: {
    margin: 0,
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    lineHeight: 1.08,
    fontWeight: 800,
  },
  errorBody: {
    margin: 0,
    color: 'rgba(255,255,255,0.78)',
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '0.25rem',
  },
  button: {
    minWidth: '8.5rem',
    border: 'none',
    borderRadius: '999px',
    padding: '0.95rem 1.35rem',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'transform 120ms ease, box-shadow 120ms ease, background 120ms ease',
  },
  primaryButton: {
    background: '#fff',
    color: '#050505',
  },
  secondaryButton: {
    background: 'rgba(255,255,255,0.14)',
    color: '#fff',
  },
  buttonFocused: {
    boxShadow: '0 0 0 2px rgba(255,255,255,0.95), 0 0 0 7px rgba(229, 9, 20, 0.95)',
    transform: 'translateY(-1px)',
  },
  menu: {
    position: 'absolute',
    top: '8vh',
    right: '3vw',
    width: 'min(28rem, 40vw)',
    maxHeight: '78vh',
    overflowY: 'auto',
    padding: '1.15rem',
    borderRadius: '1.35rem',
    background: 'rgba(10, 10, 10, 0.92)',
    border: '1px solid rgba(255,255,255,0.14)',
    boxShadow: '0 22px 54px rgba(0, 0, 0, 0.52)',
    backdropFilter: 'blur(18px)',
    zIndex: 12,
  },
  menuTitle: {
    margin: 0,
    fontSize: '1.4rem',
    fontWeight: 800,
  },
  menuHint: {
    margin: '0.55rem 0 1rem',
    fontSize: '0.95rem',
    lineHeight: 1.45,
    color: 'rgba(255,255,255,0.68)',
  },
  menuList: {
    display: 'grid',
    gap: '0.55rem',
  },
  menuItem: {
    width: '100%',
    padding: '0.95rem 1rem',
    borderRadius: '1rem',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: 600,
  },
  menuItemFocused: {
    borderColor: 'rgba(229, 9, 20, 0.95)',
    boxShadow: '0 0 0 2px rgba(255,255,255,0.92), 0 0 0 7px rgba(229, 9, 20, 0.95)',
    background: 'rgba(255,255,255,0.08)',
  },
  menuItemSelected: {
    color: '#ffffff',
  },
  menuMeta: {
    display: 'block',
    marginTop: '0.3rem',
    color: 'rgba(255,255,255,0.62)',
    fontSize: '0.86rem',
    fontWeight: 500,
  },
};

function parseBool(value, fallback = false) {
  if (value == null) return fallback;
  const normalized = String(value).trim().toLowerCase();
  return normalized === '1' || normalized === 'true' || normalized === 'yes' || normalized === 'on';
}

function mapInput(event) {
  const code = event.keyCode || event.which;
  const key = event.key;
  if (key === 'ArrowUp' || code === 38) return 'UP';
  if (key === 'ArrowDown' || code === 40) return 'DOWN';
  if (key === 'ArrowLeft' || code === 37) return 'LEFT';
  if (key === 'ArrowRight' || code === 39) return 'RIGHT';
  if (key === 'Enter' || code === 13) return 'SELECT';
  if (
    key === 'Escape' ||
    key === 'Backspace' ||
    key === 'BrowserBack' ||
    key === 'GoBack' ||
    code === 8 ||
    code === 27 ||
    code === 461 ||
    code === 10009
  ) {
    return 'BACK';
  }
  return '';
}

function normalizeLanguage(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  if (raw.includes('english') || raw === 'en' || raw.startsWith('en-')) return 'en';
  if (raw.includes('korean') || raw === 'ko' || raw === 'kr' || raw.startsWith('ko-')) return 'ko';
  if (raw.includes('japanese') || raw === 'ja' || raw === 'jp' || raw.startsWith('ja-')) return 'ja';
  return raw.slice(0, 2);
}

function languageName(code) {
  const normalized = normalizeLanguage(code);
  if (normalized === 'en') return 'English';
  if (normalized === 'ko') return 'Korean';
  if (normalized === 'ja') return 'Japanese';
  return normalized ? normalized.toUpperCase() : 'Unknown';
}

function languageMatches(option, target) {
  const desired = normalizeLanguage(target);
  if (!desired) return false;
  const haystack = `${option.label || ''} ${option.language || ''} ${option.name || ''} ${option.lang || ''}`.toLowerCase();
  return haystack.includes(desired) || haystack.includes(languageName(desired).toLowerCase());
}

function buildExtractUrl() {
  const params = new URLSearchParams();
  params.set('tmdb_id', initial.tmdb_id || '');
  params.set('type', initial.type === 'tv' ? 'tv' : 'movie');
  params.set('multiLang', '1');
  if (initial.type === 'tv') {
    params.set('season', initial.season || '1');
    params.set('episode', initial.episode || '1');
  }
  return `/extract?${params.toString()}`;
}

function buildDetailsUrl() {
  const params = new URLSearchParams();
  params.set('tmdb_id', initial.tmdb_id || '');
  params.set('type', initial.type === 'tv' ? 'tv' : 'movie');
  if (initial.type === 'tv') {
    params.set('season', initial.season || '1');
  }
  return `/api/details?${params.toString()}`;
}

function buildPlayerUrl(season, episode) {
  const params = new URLSearchParams();
  params.set('tmdb_id', initial.tmdb_id || '');
  params.set('type', initial.type === 'tv' ? 'tv' : 'movie');
  params.set('multiLang', parseBool(initial.multiLang, true) ? '1' : '0');
  params.set('autoplay', parseBool(initial.autoplay, true) ? '1' : '0');
  if (initial.type === 'tv') {
    params.set('season', String(season || initial.season || '1'));
    params.set('episode', String(episode || initial.episode || '1'));
  }
  return `/player?${params.toString()}`;
}

function buildSubtitleTracks(subtitles = []) {
  const validTracks = subtitles.filter((entry) => entry && entry.url);
  const preferredIndex = validTracks.findIndex((entry) => languageMatches(entry, 'en'));
  const defaultIndex = preferredIndex >= 0 ? preferredIndex : (validTracks.length ? 0 : -1);
  return validTracks.map((entry, index) => {
    const language = String(entry.language || `Subtitle ${index + 1}`).trim();
    const code = normalizeLanguage(language) || 'en';
    return {
      kind: 'subtitles',
      src: entry.url,
      srcLang: code,
      label: language,
      default: index === defaultIndex,
    };
  });
}

function textTrackArray(media) {
  if (!media || !media.textTracks) return [];
  const tracks = [];
  for (let index = 0; index < media.textTracks.length; index += 1) {
    tracks.push(media.textTracks[index]);
  }
  return tracks;
}

function humanAudioLabel(track, index) {
  return track.name || track.label || languageName(track.lang || track.language) || `Track ${index + 1}`;
}

function keyLabel(season = initial.season, episode = initial.episode) {
  if (initial.type === 'tv') {
    return `S${season || '1'} E${episode || '1'}`;
  }
  return 'Movie';
}

function readSessionJson(key) {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function writeSessionJson(key, value) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (_error) {
    // ignore write failures in restricted environments
  }
}

function removeSessionKey(key) {
  try {
    window.sessionStorage.removeItem(key);
  } catch (_error) {
    // ignore removal failures in restricted environments
  }
}

function readLocalJson(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function writeLocalJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (_error) {
    // ignore local storage failures in restricted environments
  }
}

function readContinueWatchingStore() {
  return readLocalJson(CONTINUE_WATCHING_KEY) || {};
}

function writeContinueWatchingStore(store) {
  writeLocalJson(CONTINUE_WATCHING_KEY, store);
}

function episodeProgressKey(season, episode) {
  return `s${season}e${episode}`;
}

function readSubtitleSettings() {
  const stored = readLocalJson(SUBTITLE_SETTINGS_KEY) || {};
  return {
    ...DEFAULT_SUBTITLE_SETTINGS,
    ...stored,
  };
}

function findSettingOption(options, id) {
  return options.find((option) => option.id === id) || options[0];
}

function buildSubtitleCueStyles(settings) {
  const fontSize = findSettingOption(SUBTITLE_FONT_SIZE_OPTIONS, settings.fontSizeId);
  const scale = findSettingOption(SUBTITLE_SCALE_OPTIONS, settings.scaleId);
  const fontFamily = findSettingOption(SUBTITLE_FONT_FAMILY_OPTIONS, settings.fontFamilyId);
  const color = findSettingOption(SUBTITLE_COLOR_OPTIONS, settings.colorId);
  const background = findSettingOption(SUBTITLE_BACKGROUND_OPTIONS, settings.backgroundId);
  return `
video::cue {
  font-size: calc(${fontSize.value} * ${scale.value});
  font-family: ${fontFamily.value};
  color: ${color.value};
  background: ${background.value};
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.88);
}
`;
}

function readResumeTimeFromStore() {
  const direct = Number(initial.start || 0);
  if (Number.isFinite(direct) && direct > 0) return direct;
  if (!parseBool(initial.resume, false) || !initial.tmdb_id) return 0;

  const store = readContinueWatchingStore();
  const record = store[String(initial.tmdb_id)];
  if (!record) return 0;

  if (record.type === 'tv') {
    const season = String(initial.season || record.last_season_watched || '1');
    const episode = String(initial.episode || record.last_episode_watched || '1');
    const entry = record.show_progress && record.show_progress[episodeProgressKey(season, episode)];
    const watched = Number((entry && entry.progress && entry.progress.watched) || (record.progress && record.progress.watched) || 0);
    return Number.isFinite(watched) ? watched : 0;
  }

  const watched = Number((record.progress && record.progress.watched) || 0);
  return Number.isFinite(watched) ? watched : 0;
}

function clampResumeTime(startTime, duration) {
  const safeStart = Number(startTime || 0);
  if (!Number.isFinite(safeStart) || safeStart <= 0) return 0;
  if (!Number.isFinite(duration) || duration <= 0) return safeStart;
  return Math.max(0, Math.min(duration - 5, safeStart));
}

function cueArray(track) {
  if (!track || !track.cues) return [];
  const cues = [];
  for (let index = 0; index < track.cues.length; index += 1) {
    cues.push(track.cues[index]);
  }
  return cues;
}

function applyCueAdjustments(track, offsetSeconds, linePercent, cueSnapshotMap) {
  cueArray(track).forEach((cue) => {
    if (!cueSnapshotMap.has(cue)) {
      cueSnapshotMap.set(cue, {
        startTime: cue.startTime,
        endTime: cue.endTime,
        line: cue.line,
        snapToLines: cue.snapToLines,
      });
    }

    const original = cueSnapshotMap.get(cue);
    if (!original) return;

    const nextStart = Math.max(0, original.startTime + offsetSeconds);
    const nextEnd = Math.max(nextStart + 0.05, original.endTime + offsetSeconds);

    try {
      cue.startTime = nextStart;
      cue.endTime = nextEnd;
    } catch (_error) {
      // Some environments may not allow cue mutation.
    }

    try {
      cue.snapToLines = false;
      cue.line = linePercent;
    } catch (_error) {
      try {
        cue.snapToLines = original.snapToLines;
        cue.line = original.line;
      } catch (_innerError) {
        // Some environments may not allow cue positioning changes.
      }
    }
  });
}

function basePreviewState() {
  return {
    tmdbId: String(initial.tmdb_id || ''),
    type: initial.type === 'tv' ? 'tv' : 'movie',
    season: String(initial.season || '1'),
    episode: String(initial.episode || '1'),
    title: '',
    subtitle: initial.type === 'tv' ? keyLabel() : 'Movie',
    backdropUrl: '',
    cardImage: '',
  };
}

function readLaunchPreview() {
  const base = basePreviewState();
  const stored = readSessionJson(PLAYER_PREVIEW_KEY);
  if (!stored) return base;
  if (stored.tmdbId && String(stored.tmdbId) !== base.tmdbId) return base;
  if (stored.type && stored.type !== base.type) return base;
  return { ...base, ...stored };
}

function findEpisode(detail, episodeNumber = initial.episode || '1') {
  if (!detail || !Array.isArray(detail.episodes)) return null;
  return detail.episodes.find((episode) => String(episode.episodeNumber) === String(episodeNumber)) || null;
}

function mergePreview(current, detail, episode) {
  const merged = {
    ...(current || basePreviewState()),
    tmdbId: String(detail?.tmdbId || current?.tmdbId || initial.tmdb_id || ''),
    type: detail?.type || current?.type || (initial.type === 'tv' ? 'tv' : 'movie'),
    season: String(detail?.selectedSeason || current?.season || initial.season || '1'),
    episode: String(episode?.episodeNumber || current?.episode || initial.episode || '1'),
    title: detail?.title || current?.title || '',
    subtitle: episode?.name || current?.subtitle || (initial.type === 'tv' ? keyLabel() : 'Movie'),
    backdropUrl: detail?.backdropUrl || current?.backdropUrl || current?.cardImage || '',
    cardImage: episode?.stillUrl || detail?.cardImage || current?.cardImage || detail?.backdropUrl || '',
  };
  return merged;
}

function nextSeekAmount(preset) {
  const steps = preset?.steps || SEEK_PRESETS[1].steps;
  return Number(steps[0] || 10);
}

function backToBrowse() {
  window.location.replace('/');
}

function overlayBackgroundStyle(preview) {
  const image = preview?.backdropUrl || preview?.cardImage || '';
  return image ? { ...shellStyles.previewBackdrop, backgroundImage: `url("${image}")` } : shellStyles.previewBackdrop;
}

function LoadingScreen({ preview }) {
  const previewImage = preview?.cardImage || preview?.backdropUrl || '';

  return (
    <div style={shellStyles.overlay}>
      <style>{GLOBAL_STYLES}</style>
      {previewImage ? (
        <img
          src={previewImage}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      ) : (
        <div style={overlayBackgroundStyle(preview)} />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.6) 58%, rgba(0,0,0,0.82))',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, display: 'grid', placeItems: 'center' }}>
        <div style={shellStyles.loadingRing} aria-hidden="true" />
      </div>
    </div>
  );
}

function ErrorScreen({ error, onRetry, onBack, focusedIndex, preview }) {
  return (
    <div style={shellStyles.overlay}>
      <style>{GLOBAL_STYLES}</style>
      <div style={overlayBackgroundStyle(preview)} />
      <div style={shellStyles.previewScrim} />
      <div style={shellStyles.errorPanel}>
        <p style={shellStyles.errorKicker}>Playback Error</p>
        <h1 style={shellStyles.errorTitle}>The player could not start.</h1>
        <p style={shellStyles.errorBody}>{error || 'An unknown playback error occurred.'}</p>
        <div style={shellStyles.actions}>
          <button
            type="button"
            onClick={onRetry}
            style={{
              ...shellStyles.button,
              ...shellStyles.primaryButton,
              ...(focusedIndex === 0 ? shellStyles.buttonFocused : null),
            }}
          >
            Retry
          </button>
          <button
            type="button"
            onClick={onBack}
            style={{
              ...shellStyles.button,
              ...shellStyles.secondaryButton,
              ...(focusedIndex === 1 ? shellStyles.buttonFocused : null),
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

function menuTitle(kind, detail) {
  if (kind === 'audio') return 'Audio';
  if (kind === 'subtitles') return 'Subtitles';
  if (kind === 'seek') return 'Seek Speed';
  if (kind === 'subtitle-settings') return 'Subtitle Settings';
  if (kind === 'subtitle-font-size') return 'Subtitle Size';
  if (kind === 'subtitle-scale') return 'Subtitle Scale';
  if (kind === 'subtitle-font-family') return 'Subtitle Font';
  if (kind === 'subtitle-color') return 'Subtitle Color';
  if (kind === 'subtitle-background') return 'Subtitle Background';
  if (kind === 'subtitle-shift') return 'Subtitle Timing';
  if (kind === 'subtitle-margin') return 'Subtitle Margin';
  if (kind === 'episodes') return `Season ${detail?.selectedSeason || initial.season || '1'} Episodes`;
  return 'Options';
}

function menuHint(kind) {
  if (kind === 'audio') return 'Use Up and Down to switch language tracks.';
  if (kind === 'subtitles') return 'English is selected by default when available.';
  if (kind === 'seek') return 'Pick how aggressively left and right should jump through the stream.';
  if (kind === 'subtitle-settings') return 'Adjust caption size, scale, font, color, timing, and screen position.';
  if (kind === 'subtitle-font-size') return 'Choose a subtitle size that feels readable from the couch.';
  if (kind === 'subtitle-scale') return 'Scale the current subtitle size with percent-based sizing.';
  if (kind === 'subtitle-font-family') return 'Pick the subtitle font style.';
  if (kind === 'subtitle-color') return 'Choose the subtitle text color.';
  if (kind === 'subtitle-background') return 'Add or remove the subtitle backdrop.';
  if (kind === 'subtitle-shift') return 'Nudge subtitles earlier or later to match the stream.';
  if (kind === 'subtitle-margin') return 'Move subtitles higher or lower so they clear the player UI.';
  if (kind === 'episodes') return 'Choose another episode in the current season.';
  return 'Use Up and Down to choose, Enter to confirm, and Back to close.';
}

function TrackMenu({ menuState, options, detail, containerRef }) {
  if (!menuState) return null;
  return (
    <aside ref={containerRef} style={shellStyles.menu}>
      <h2 style={shellStyles.menuTitle}>{menuTitle(menuState.kind, detail)}</h2>
      <p style={shellStyles.menuHint}>{menuHint(menuState.kind)}</p>
      <div style={shellStyles.menuList}>
        {options.map((option, index) => {
          const isFocused = index === menuState.index;
          const isSelected = Boolean(option.selected);
          return (
            <button
              key={option.id || `${menuState.kind}-${index}`}
              type="button"
              data-menu-index={index}
              style={{
                ...shellStyles.menuItem,
                ...(isFocused ? shellStyles.menuItemFocused : null),
                ...(isSelected ? shellStyles.menuItemSelected : null),
              }}
            >
              <span>{option.label}</span>
              <small style={shellStyles.menuMeta}>{isSelected ? 'Selected' : option.meta || 'Available'}</small>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function PlayerApp() {
  const playerInstance = useTVPlayerStore((state) => state.player);
  const [stream, setStream] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(Boolean(initial.tmdb_id));
  const [playerReady, setPlayerReady] = useState(false);
  const [error, setError] = useState('');
  const [reloadKey, setReloadKey] = useState(0);
  const [audioOptions, setAudioOptions] = useState([]);
  const [audioSelection, setAudioSelection] = useState(-1);
  const [subtitleOptions, setSubtitleOptions] = useState(EMPTY_SUBTITLES);
  const [subtitleSelection, setSubtitleSelection] = useState(0);
  const [subtitleSettings, setSubtitleSettings] = useState(() => readSubtitleSettings());
  const [seekPresetIndex, setSeekPresetIndex] = useState(() => {
    const defaultIndex = SEEK_PRESETS.findIndex((preset) => preset.id === DEFAULT_SEEK_PRESET_ID);
    return defaultIndex >= 0 ? defaultIndex : 1;
  });
  const [menuState, setMenuState] = useState(null);
  const [errorFocusIndex, setErrorFocusIndex] = useState(0);
  const [launchPreview, setLaunchPreview] = useState(() => readLaunchPreview());
  const defaultSelectionRef = useRef({ audioKey: '', subtitleKey: '' });
  const seekStateRef = useRef({ direction: 0, count: 0, at: 0 });
  const lastSeekAtRef = useRef(0);
  const menuContainerRef = useRef(null);
  const cueSnapshotRef = useRef(new WeakMap());
  const progressWriteRef = useRef({ at: 0, watched: 0 });
  const resumeAppliedRef = useRef(false);

  useEffect(() => {
    const restore = readSessionJson(PLAYER_RETURN_KEY);
    const expectedType = initial.type === 'tv' ? 'tv' : 'movie';
    if (!restore) return;
    if (String(restore.tmdbId || '') !== String(initial.tmdb_id || '') || String(restore.type || '') !== expectedType) {
      removeSessionKey(PLAYER_RETURN_KEY);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadPlayer() {
      if (!initial.tmdb_id) {
        setError('Missing tmdb_id in the player URL.');
        setLoading(false);
        return;
      }

      setLoading(true);
      setPlayerReady(false);
      setError('');
      setMenuState(null);
      setStream(null);
      setDetails(null);

      const detailTask = fetch(buildDetailsUrl())
        .then((response) => response.json().then((payload) => ({ ok: response.ok, payload })))
        .catch(() => null)
        .then((result) => {
          if (cancelled || !result || !result.ok || !result.payload?.success) return null;
          const nextDetails = result.payload.details;
          setDetails(nextDetails);
          const nextEpisode = findEpisode(nextDetails);
          setLaunchPreview((current) => {
            const merged = mergePreview(current, nextDetails, nextEpisode);
            writeSessionJson(PLAYER_PREVIEW_KEY, merged);
            return merged;
          });
          return nextDetails;
        });

      try {
        const streamResponse = await fetch(buildExtractUrl());
        const streamPayload = await streamResponse.json();
        if (!streamResponse.ok || !streamPayload.success || !streamPayload.hls_url) {
          throw new Error(streamPayload.error || 'Unable to resolve the video stream.');
        }

        if (cancelled) return;
        setStream(streamPayload);
        await detailTask;
        if (cancelled) return;
        setLoading(false);
      } catch (loadError) {
        await detailTask;
        if (cancelled) return;
        setError(loadError instanceof Error ? loadError.message : String(loadError));
        setLoading(false);
      }
    }

    loadPlayer();
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  useEffect(() => {
    defaultSelectionRef.current = { audioKey: '', subtitleKey: '' };
    setAudioOptions([]);
    setAudioSelection(-1);
    setSubtitleOptions(EMPTY_SUBTITLES);
    setSubtitleSelection(0);
    setMenuState(null);
    setPlayerReady(false);
    seekStateRef.current = { direction: 0, count: 0, at: 0 };
    progressWriteRef.current = { at: 0, watched: 0 };
    resumeAppliedRef.current = false;
    cueSnapshotRef.current = new WeakMap();
  }, [stream?.hls_url]);

  useEffect(() => {
    writeLocalJson(SUBTITLE_SETTINGS_KEY, subtitleSettings);
  }, [subtitleSettings]);

  useEffect(() => {
    if (!playerInstance || !stream?.hls_url) return undefined;

    let active = true;
    let attempts = 0;

    const syncTracks = () => {
      if (!active) return;
      const hls = playerInstance.getInternalPlayer?.('hls');
      const media = playerInstance.getInternalPlayer?.();
      let foundTrackData = false;

      if (hls && Array.isArray(hls.audioTracks) && hls.audioTracks.length) {
        foundTrackData = true;
        const nextAudioOptions = hls.audioTracks.map((track, index) => ({
          id: `audio-${index}`,
          index,
          label: humanAudioLabel(track, index),
          language: track.lang || track.language || '',
          meta: languageName(track.lang || track.language),
        }));
        setAudioOptions(nextAudioOptions);

        let activeAudioIndex = typeof hls.audioTrack === 'number' && hls.audioTrack >= 0 ? hls.audioTrack : 0;
        if (defaultSelectionRef.current.audioKey !== stream.hls_url) {
          const preferredIndex = nextAudioOptions.findIndex((option) => languageMatches(option, details?.originalLanguage));
          if (preferredIndex >= 0) {
            hls.audioTrack = preferredIndex;
            activeAudioIndex = preferredIndex;
          }
          defaultSelectionRef.current.audioKey = stream.hls_url;
        }
        setAudioSelection(activeAudioIndex);
      }

      if (media && media.textTracks) {
        const tracks = textTrackArray(media);
        if (tracks.length || Array.isArray(stream.subtitles)) {
          foundTrackData = true;
        }
        const nextSubtitleOptions = [
          { id: 'off', index: -1, label: 'Off', meta: 'No subtitles' },
          ...tracks.map((track, index) => ({
            id: `subtitle-${index}`,
            index,
            label: track.label || languageName(track.language),
            language: track.language || '',
            meta: track.language ? languageName(track.language) : 'Subtitle track',
          })),
        ];
        setSubtitleOptions(nextSubtitleOptions);

        let activeSubtitleIndex = tracks.findIndex((track) => track.mode === 'showing');
        if (defaultSelectionRef.current.subtitleKey !== stream.hls_url) {
          const preferredIndex = tracks.findIndex((track) => languageMatches(track, 'en'));
          const nextIndex = preferredIndex >= 0 ? preferredIndex : (tracks.length ? 0 : -1);
          tracks.forEach((track, index) => {
            track.mode = index === nextIndex ? 'showing' : 'disabled';
          });
          activeSubtitleIndex = nextIndex;
          defaultSelectionRef.current.subtitleKey = stream.hls_url;
        }
        setSubtitleSelection(activeSubtitleIndex >= 0 ? activeSubtitleIndex + 1 : 0);
      }

      attempts += 1;
      if (foundTrackData || attempts > 40) {
        window.clearInterval(intervalId);
      }
    };

    const intervalId = window.setInterval(syncTracks, 250);
    syncTracks();

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, [details?.originalLanguage, playerInstance, stream?.hls_url, stream?.subtitles]);

  useEffect(() => {
    if (error) setErrorFocusIndex(0);
  }, [error]);

  const storedResumeTime = useMemo(() => readResumeTimeFromStore(), []);
  const selectedEpisode = useMemo(() => findEpisode(details), [details]);
  const subtitleTracks = useMemo(() => buildSubtitleTracks(stream?.subtitles || []), [stream]);
  const subtitleCueStyles = useMemo(() => buildSubtitleCueStyles(subtitleSettings), [subtitleSettings]);
  const currentSeekPreset = SEEK_PRESETS[seekPresetIndex] || SEEK_PRESETS[1];
  const currentSubtitleFontSize = useMemo(() => findSettingOption(SUBTITLE_FONT_SIZE_OPTIONS, subtitleSettings.fontSizeId), [subtitleSettings.fontSizeId]);
  const currentSubtitleScale = useMemo(() => findSettingOption(SUBTITLE_SCALE_OPTIONS, subtitleSettings.scaleId), [subtitleSettings.scaleId]);
  const currentSubtitleFontFamily = useMemo(() => findSettingOption(SUBTITLE_FONT_FAMILY_OPTIONS, subtitleSettings.fontFamilyId), [subtitleSettings.fontFamilyId]);
  const currentSubtitleColor = useMemo(() => findSettingOption(SUBTITLE_COLOR_OPTIONS, subtitleSettings.colorId), [subtitleSettings.colorId]);
  const currentSubtitleBackground = useMemo(() => findSettingOption(SUBTITLE_BACKGROUND_OPTIONS, subtitleSettings.backgroundId), [subtitleSettings.backgroundId]);
  const currentSubtitleShift = useMemo(() => findSettingOption(SUBTITLE_SHIFT_OPTIONS, subtitleSettings.shiftId), [subtitleSettings.shiftId]);
  const currentSubtitleMargin = useMemo(() => findSettingOption(SUBTITLE_MARGIN_OPTIONS, subtitleSettings.marginId), [subtitleSettings.marginId]);

  const currentAudioLabel = useMemo(() => {
    return audioOptions.find((option) => option.index === audioSelection)?.label || 'Audio';
  }, [audioOptions, audioSelection]);

  const currentSubtitleLabel = useMemo(() => {
    return subtitleOptions[subtitleSelection]?.label || 'Subtitles';
  }, [subtitleOptions, subtitleSelection]);

  const currentSubtitleSettingsLabel = useMemo(() => {
    return `${currentSubtitleScale.label} / ${currentSubtitleMargin.label}`;
  }, [currentSubtitleMargin.label, currentSubtitleScale.label]);

  const currentEpisodeLabel = useMemo(() => {
    if (initial.type !== 'tv') return 'Episodes';
    if (!selectedEpisode) return `Episode ${initial.episode || '1'}`;
    return `E${selectedEpisode.episodeNumber}`;
  }, [selectedEpisode]);

  useEffect(() => {
    window.__HAK_SEEK_SECONDS__ = nextSeekAmount(currentSeekPreset);
  }, [currentSeekPreset]);

  const persistPlaybackProgress = useCallback((watchedSeconds, durationSeconds, options = {}) => {
    const watched = Number(watchedSeconds || 0);
    const duration = Number(durationSeconds || 0);
    if (!initial.tmdb_id || !Number.isFinite(watched) || watched <= 0) return;
    if (!Number.isFinite(duration) || duration <= 0) return;

    const store = readContinueWatchingStore();
    const key = String(initial.tmdb_id);
    const completed = Boolean(options.completed) || watched >= duration * 0.97 || duration - watched <= 45;

    if (completed) {
      if (store[key]) {
        delete store[key];
        writeContinueWatchingStore(store);
      }
      return;
    }

    const previous = store[key] || {};
    const title = details?.title || launchPreview.title || (initial.type === 'tv' ? 'TV Show' : 'Movie');
    const season = String(details?.selectedSeason || initial.season || previous.last_season_watched || '1');
    const episode = String(initial.episode || previous.last_episode_watched || '1');
    const posterPath = details?.cardImage || launchPreview.cardImage || previous.poster_path || '';
    const backdropPath = details?.backdropUrl || launchPreview.backdropUrl || previous.backdrop_path || '';

    const nextRecord = {
      ...previous,
      id: Number(initial.tmdb_id || previous.id || 0),
      type: initial.type === 'tv' ? 'tv' : 'movie',
      title,
      poster_path: posterPath,
      backdrop_path: backdropPath,
      overview: details?.overview || previous.overview || '',
      genres: Array.isArray(details?.genres) ? details.genres : (previous.genres || []),
      year: details?.year || previous.year || '',
      rating: details?.rating || previous.rating || '',
      progress: {
        watched,
        duration,
      },
      last_updated: Date.now(),
    };

    if (initial.type === 'tv') {
      const progressKey = episodeProgressKey(season, episode);
      nextRecord.last_season_watched = season;
      nextRecord.last_episode_watched = episode;
      nextRecord.show_progress = {
        ...(previous.show_progress || {}),
        [progressKey]: {
          season,
          episode,
          title: selectedEpisode?.name || '',
          progress: {
            watched,
            duration,
          },
        },
      };
    }

    store[key] = nextRecord;
    writeContinueWatchingStore(store);
  }, [details, initial.episode, initial.season, initial.tmdb_id, initial.type, launchPreview.backdropUrl, launchPreview.cardImage, launchPreview.title, selectedEpisode?.name]);

  const persistCurrentProgress = useCallback((options = {}) => {
    if (!playerInstance) return;
    const watched = Number(playerInstance.getCurrentTime?.() || 0);
    const duration = Number(playerInstance.getDuration?.() || 0);
    if (!options.force && watched < 5) return;
    persistPlaybackProgress(watched, duration, options);
  }, [persistPlaybackProgress, playerInstance]);

  const handleProgress = useCallback((progressState) => {
    const watched = Number(progressState?.playedSeconds || 0);
    if (!Number.isFinite(watched) || watched < 5) return;
    const now = Date.now();
    if (now - progressWriteRef.current.at < 4000 && Math.abs(watched - progressWriteRef.current.watched) < 5) return;
    progressWriteRef.current = { at: now, watched };
    const duration = Number(playerInstance?.getDuration?.() || 0);
    persistPlaybackProgress(watched, duration);
  }, [persistPlaybackProgress, playerInstance]);

  useEffect(() => {
    if (!playerInstance || !stream?.hls_url) return undefined;
    const offset = Number(currentSubtitleShift.value || 0);
    const linePercent = Number(currentSubtitleMargin.value || 90);
    let attempts = 0;

    const syncCueShift = () => {
      const media = playerInstance.getInternalPlayer?.();
      const tracks = textTrackArray(media);
      tracks.forEach((track) => {
        if (track.kind === 'subtitles' || track.kind === 'captions') {
          applyCueAdjustments(track, offset, linePercent, cueSnapshotRef.current);
        }
      });
      attempts += 1;
      if (tracks.some((track) => cueArray(track).length) || attempts > 20) {
        window.clearInterval(intervalId);
      }
    };

    const intervalId = window.setInterval(syncCueShift, 400);
    syncCueShift();
    return () => window.clearInterval(intervalId);
  }, [currentSubtitleMargin.value, currentSubtitleShift.value, playerInstance, stream?.hls_url]);

  useEffect(() => {
    if (!playerReady || !playerInstance || resumeAppliedRef.current) return;
    const resumeAt = clampResumeTime(storedResumeTime, Number(playerInstance.getDuration?.() || 0));
    if (resumeAt > 0) {
      playerInstance.seekTo(resumeAt, 'seconds');
    }
    resumeAppliedRef.current = true;
  }, [playerInstance, playerReady, storedResumeTime]);

  const handleBackToBrowse = useCallback(() => {
    persistCurrentProgress({ force: true });
    backToBrowse();
  }, [persistCurrentProgress]);

  const handleSeek = useCallback((direction) => {
    if (!playerInstance) return;
    const now = Date.now();
    if (now - lastSeekAtRef.current < 220) return;
    lastSeekAtRef.current = now;
    const amount = nextSeekAmount(currentSeekPreset);
    const currentTime = Number(playerInstance.getCurrentTime?.() || 0);
    const duration = Number(playerInstance.getDuration?.() || 0);
    const nextTime = Math.max(0, duration ? Math.min(duration - 1, currentTime + amount * direction) : currentTime + amount * direction);
    playerInstance.seekTo(nextTime, 'seconds');
  }, [currentSeekPreset, playerInstance]);

  const openSettingChoiceMenu = useCallback((kind, options, selectedId, parentIndex) => {
    const index = Math.max(0, options.findIndex((option) => option.id === selectedId));
    setMenuState({ kind, index, parentKind: 'subtitle-settings', parentIndex });
  }, []);

  const openMenu = useCallback((kind) => {
    if (kind === 'audio') {
      if (audioOptions.length <= 1) return;
      const index = Math.max(0, audioOptions.findIndex((option) => option.index === audioSelection));
      setMenuState({ kind, index });
      return;
    }

    if (kind === 'subtitles') {
      if (subtitleOptions.length <= 1) return;
      setMenuState({ kind, index: subtitleSelection });
      return;
    }

    if (kind === 'seek') {
      setMenuState({ kind, index: seekPresetIndex });
      return;
    }

    if (kind === 'subtitle-settings') {
      setMenuState({ kind, index: 0 });
      return;
    }

    if (kind === 'episodes') {
      if (initial.type !== 'tv' || !details?.episodes?.length) return;
      const index = Math.max(0, details.episodes.findIndex((episode) => String(episode.episodeNumber) === String(initial.episode || '1')));
      setMenuState({ kind, index });
    }
  }, [audioOptions, audioSelection, details, initial.episode, initial.type, seekPresetIndex, subtitleOptions, subtitleSelection]);

  const applyAudioSelection = useCallback((optionIndex) => {
    const hls = playerInstance?.getInternalPlayer?.('hls');
    const selected = audioOptions[optionIndex];
    if (!hls || !selected) return;
    hls.audioTrack = selected.index;
    setAudioSelection(selected.index);
    setMenuState(null);
  }, [audioOptions, playerInstance]);

  const applySubtitleSelection = useCallback((optionIndex) => {
    const media = playerInstance?.getInternalPlayer?.();
    if (!media) return;
    const selected = subtitleOptions[optionIndex] || subtitleOptions[0];
    const tracks = textTrackArray(media);
    tracks.forEach((track, index) => {
      track.mode = index === selected.index ? 'showing' : 'disabled';
    });
    setSubtitleSelection(optionIndex);
    setMenuState(null);
  }, [playerInstance, subtitleOptions]);

  const applySeekPreset = useCallback((optionIndex) => {
    setSeekPresetIndex(optionIndex);
    seekStateRef.current = { direction: 0, count: 0, at: 0 };
    setMenuState(null);
  }, []);

  const applySubtitleSettingsMenuSelection = useCallback((optionIndex) => {
    const groups = [
      { kind: 'subtitle-font-size', options: SUBTITLE_FONT_SIZE_OPTIONS, selectedId: subtitleSettings.fontSizeId },
      { kind: 'subtitle-scale', options: SUBTITLE_SCALE_OPTIONS, selectedId: subtitleSettings.scaleId },
      { kind: 'subtitle-font-family', options: SUBTITLE_FONT_FAMILY_OPTIONS, selectedId: subtitleSettings.fontFamilyId },
      { kind: 'subtitle-color', options: SUBTITLE_COLOR_OPTIONS, selectedId: subtitleSettings.colorId },
      { kind: 'subtitle-background', options: SUBTITLE_BACKGROUND_OPTIONS, selectedId: subtitleSettings.backgroundId },
      { kind: 'subtitle-shift', options: SUBTITLE_SHIFT_OPTIONS, selectedId: subtitleSettings.shiftId },
      { kind: 'subtitle-margin', options: SUBTITLE_MARGIN_OPTIONS, selectedId: subtitleSettings.marginId },
    ];
    const nextGroup = groups[optionIndex];
    if (!nextGroup) return;
    openSettingChoiceMenu(nextGroup.kind, nextGroup.options, nextGroup.selectedId, optionIndex);
  }, [openSettingChoiceMenu, subtitleSettings.backgroundId, subtitleSettings.colorId, subtitleSettings.fontFamilyId, subtitleSettings.fontSizeId, subtitleSettings.marginId, subtitleSettings.scaleId, subtitleSettings.shiftId]);

  const applySubtitleSettingsSelection = useCallback((kind, optionIndex) => {
    const mapping = {
      'subtitle-font-size': { key: 'fontSizeId', options: SUBTITLE_FONT_SIZE_OPTIONS },
      'subtitle-scale': { key: 'scaleId', options: SUBTITLE_SCALE_OPTIONS },
      'subtitle-font-family': { key: 'fontFamilyId', options: SUBTITLE_FONT_FAMILY_OPTIONS },
      'subtitle-color': { key: 'colorId', options: SUBTITLE_COLOR_OPTIONS },
      'subtitle-background': { key: 'backgroundId', options: SUBTITLE_BACKGROUND_OPTIONS },
      'subtitle-shift': { key: 'shiftId', options: SUBTITLE_SHIFT_OPTIONS },
      'subtitle-margin': { key: 'marginId', options: SUBTITLE_MARGIN_OPTIONS },
    };
    const group = mapping[kind];
    const selected = group?.options?.[optionIndex];
    if (!group || !selected) return;
    setSubtitleSettings((current) => ({
      ...current,
      [group.key]: selected.id,
    }));
    const parentIndex = typeof menuState?.parentIndex === 'number' ? menuState.parentIndex : 0;
    setMenuState({ kind: 'subtitle-settings', index: parentIndex });
  }, [menuState?.parentIndex]);

  const applyEpisodeSelection = useCallback((optionIndex) => {
    const nextEpisode = details?.episodes?.[optionIndex];
    if (!nextEpisode) return;
    if (String(nextEpisode.episodeNumber) === String(initial.episode || '1')) {
      setMenuState(null);
      return;
    }
    persistCurrentProgress({ force: true });
    const nextPreview = mergePreview(launchPreview, details, nextEpisode);
    setLaunchPreview(nextPreview);
    writeSessionJson(PLAYER_PREVIEW_KEY, nextPreview);
    const restore = readSessionJson(PLAYER_RETURN_KEY);
    if (restore) {
      writeSessionJson(PLAYER_RETURN_KEY, {
        ...restore,
        season: Number(details?.selectedSeason || initial.season || 1),
        tmdbId: Number(initial.tmdb_id || restore.tmdbId || 0),
        type: initial.type === 'tv' ? 'tv' : 'movie',
        createdAt: Date.now(),
      });
    }
    window.location.replace(buildPlayerUrl(details?.selectedSeason || initial.season || 1, nextEpisode.episodeNumber));
  }, [details, initial.episode, initial.season, initial.tmdb_id, initial.type, launchPreview, persistCurrentProgress]);

  const menuOptions = useMemo(() => {
    if (!menuState) return [];
    if (menuState.kind === 'audio') {
      return audioOptions.map((option) => ({
        ...option,
        selected: option.index === audioSelection,
      }));
    }
    if (menuState.kind === 'subtitles') {
      return subtitleOptions.map((option, index) => ({
        ...option,
        selected: index === subtitleSelection,
      }));
    }
    if (menuState.kind === 'seek') {
      return SEEK_PRESETS.map((preset, index) => ({
        id: preset.id,
        label: preset.label,
        meta: preset.meta,
        selected: index === seekPresetIndex,
      }));
    }
    if (menuState.kind === 'subtitle-settings') {
      return [
        { id: 'subtitle-font-size', label: 'Text Size', meta: currentSubtitleFontSize.label },
        { id: 'subtitle-scale', label: 'Scale %', meta: currentSubtitleScale.label },
        { id: 'subtitle-font-family', label: 'Font', meta: currentSubtitleFontFamily.label },
        { id: 'subtitle-color', label: 'Color', meta: currentSubtitleColor.label },
        { id: 'subtitle-background', label: 'Background', meta: currentSubtitleBackground.label },
        { id: 'subtitle-shift', label: 'Time Shift', meta: currentSubtitleShift.label },
        { id: 'subtitle-margin', label: 'Bottom Margin', meta: currentSubtitleMargin.label },
      ];
    }
    if (menuState.kind === 'subtitle-font-size') {
      return SUBTITLE_FONT_SIZE_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.fontSizeId }));
    }
    if (menuState.kind === 'subtitle-scale') {
      return SUBTITLE_SCALE_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.scaleId }));
    }
    if (menuState.kind === 'subtitle-font-family') {
      return SUBTITLE_FONT_FAMILY_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.fontFamilyId }));
    }
    if (menuState.kind === 'subtitle-color') {
      return SUBTITLE_COLOR_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.colorId }));
    }
    if (menuState.kind === 'subtitle-background') {
      return SUBTITLE_BACKGROUND_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.backgroundId }));
    }
    if (menuState.kind === 'subtitle-shift') {
      return SUBTITLE_SHIFT_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.shiftId }));
    }
    if (menuState.kind === 'subtitle-margin') {
      return SUBTITLE_MARGIN_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.marginId }));
    }
    if (menuState.kind === 'episodes') {
      return (details?.episodes || []).map((episode) => ({
        id: `episode-${episode.episodeNumber}`,
        label: `E${episode.episodeNumber} ${episode.name || 'Episode'}`,
        meta: episode.runtimeLabel || 'Episode',
        selected: String(episode.episodeNumber) === String(initial.episode || '1'),
      }));
    }
    return [];
  }, [audioOptions, audioSelection, currentSubtitleBackground.label, currentSubtitleColor.label, currentSubtitleFontFamily.label, currentSubtitleFontSize.label, currentSubtitleMargin.label, currentSubtitleScale.label, currentSubtitleShift.label, details, initial.episode, menuState, seekPresetIndex, subtitleOptions, subtitleSelection, subtitleSettings.backgroundId, subtitleSettings.colorId, subtitleSettings.fontFamilyId, subtitleSettings.fontSizeId, subtitleSettings.marginId, subtitleSettings.scaleId, subtitleSettings.shiftId]);
  useEffect(() => {
    if (!menuState || !menuContainerRef.current) return;
    const focusedNode = menuContainerRef.current.querySelector(`[data-menu-index="${menuState.index}"]`);
    if (focusedNode && typeof focusedNode.scrollIntoView === 'function') {
      focusedNode.scrollIntoView({ block: 'nearest' });
    }
  }, [menuState]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const action = mapInput(event);
      if (!action) return;

      if (menuState) {
        if (action === 'BACK' || action === 'LEFT') {
          event.preventDefault();
          if (menuState.parentKind) {
            setMenuState({ kind: menuState.parentKind, index: menuState.parentIndex || 0 });
          } else {
            setMenuState(null);
          }
          return;
        }
        if (action === 'UP' || action === 'DOWN') {
          event.preventDefault();
          setMenuState((current) => {
            if (!current) return current;
            const total = menuOptions.length;
            if (!total) return current;
            const delta = action === 'UP' ? -1 : 1;
            return {
              ...current,
              index: (current.index + delta + total) % total,
            };
          });
          return;
        }
        if (action === 'SELECT') {
          event.preventDefault();
          if (menuState.kind === 'audio') applyAudioSelection(menuState.index);
          if (menuState.kind === 'subtitles') applySubtitleSelection(menuState.index);
          if (menuState.kind === 'seek') applySeekPreset(menuState.index);
          if (menuState.kind === 'subtitle-settings') applySubtitleSettingsMenuSelection(menuState.index);
          if (
            menuState.kind === 'subtitle-font-size' ||
            menuState.kind === 'subtitle-scale' ||
            menuState.kind === 'subtitle-font-family' ||
            menuState.kind === 'subtitle-color' ||
            menuState.kind === 'subtitle-background' ||
            menuState.kind === 'subtitle-shift' ||
            menuState.kind === 'subtitle-margin'
          ) {
            applySubtitleSettingsSelection(menuState.kind, menuState.index);
          }
          if (menuState.kind === 'episodes') applyEpisodeSelection(menuState.index);
        }
        return;
      }

      if (error || (!loading && !stream?.hls_url)) {
        if (action === 'BACK') {
          event.preventDefault();
          handleBackToBrowse();
          return;
        }
        if (action === 'LEFT' || action === 'UP') {
          event.preventDefault();
          setErrorFocusIndex(0);
          return;
        }
        if (action === 'RIGHT' || action === 'DOWN') {
          event.preventDefault();
          setErrorFocusIndex(1);
          return;
        }
        if (action === 'SELECT') {
          event.preventDefault();
          if (errorFocusIndex === 0) {
            setReloadKey((value) => value + 1);
          } else {
            handleBackToBrowse();
          }
        }
        return;
      }

      if (loading || !playerReady) {
        if (action === 'BACK') {
          event.preventDefault();
          handleBackToBrowse();
        }
        return;
      }

      if (action === 'BACK') {
        event.preventDefault();
        handleBackToBrowse();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    applyAudioSelection,
    applyEpisodeSelection,
    applySeekPreset,
    applySubtitleSelection,
    applySubtitleSettingsMenuSelection,
    applySubtitleSettingsSelection,
    error,
    errorFocusIndex,
    handleBackToBrowse,
    loading,
    menuOptions.length,
    menuState,
    playerReady,
    stream?.hls_url,
  ]);

  const title = details?.title || launchPreview.title || (initial.type === 'tv' ? 'TV Show' : 'Movie');
  const subTitle = initial.type === 'tv'
    ? [keyLabel(details?.selectedSeason || initial.season, initial.episode), selectedEpisode?.name || launchPreview.subtitle].filter(Boolean).join(' - ')
    : [details?.year, details?.rating].filter(Boolean).join(' - ');

  const customButtons = useMemo(() => {
    const buttons = [];

    if (initial.type === 'tv' && details?.episodes?.length) {
      buttons.push({
        action: 'custom',
        align: 'left',
        label: `Episodes: ${currentEpisodeLabel}`,
        faIcon: faList,
        onPress: () => openMenu('episodes'),
      });
    }

    buttons.push(
      {
        action: 'custom',
        align: 'left',
        label: `Seek: ${currentSeekPreset.label}`,
        faIcon: faGaugeHigh,
        onPress: () => openMenu('seek'),
      },
      {
        action: 'custom',
        align: 'left',
        label: `Audio: ${currentAudioLabel}`,
        faIcon: faLanguage,
        onPress: () => openMenu('audio'),
        disable: audioOptions.length <= 1,
      },
      {
        action: 'custom',
        align: 'center',
        label: 'Seek Back',
        faIcon: faBackward,
        onPress: () => handleSeek(-1),
      },
      { action: 'playpause', align: 'center' },
      {
        action: 'custom',
        align: 'center',
        label: 'Seek Forward',
        faIcon: faForward,
        onPress: () => handleSeek(1),
      },
      {
        action: 'custom',
        align: 'right',
        label: `Subs: ${currentSubtitleLabel}`,
        faIcon: faClosedCaptioning,
        onPress: () => openMenu('subtitles'),
        isSelectedFill: subtitleSelection > 0,
        disable: subtitleOptions.length <= 1,
      },
      {
        action: 'custom',
        align: 'right',
        label: `Style: ${currentSubtitleSettingsLabel}`,
        faIcon: faSliders,
        onPress: () => openMenu('subtitle-settings'),
      },
      { action: 'mute', align: 'right' },
    );

    return buttons;
  }, [
    currentAudioLabel,
    currentEpisodeLabel,
    currentSeekPreset.label,
    currentSubtitleLabel,
    currentSubtitleSettingsLabel,
    details?.episodes?.length,
    handleSeek,
    initial.type,
    openMenu,
    subtitleOptions.length,
    subtitleSelection,
    audioOptions.length,
  ]);

  const showLoadingOverlay = loading || !stream?.hls_url || !playerReady;
  const showErrorScreen = Boolean(error || (!loading && !stream?.hls_url));

  if (showErrorScreen) {
    return (
      <ErrorScreen
        error={error || 'Unable to load the fullscreen player.'}
        preview={launchPreview}
        focusedIndex={errorFocusIndex}
        onRetry={() => setReloadKey((value) => value + 1)}
        onBack={handleBackToBrowse}
      />
    );
  }

  return (
    <div style={shellStyles.frame}>
      <style>{`${GLOBAL_STYLES}
${subtitleCueStyles}`}</style>
      {stream?.hls_url ? (
        <TVPlayer
          key={stream.hls_url}
          url={stream.hls_url}
          playing={parseBool(initial.autoplay, true)}
          title={title}
          subTitle={subTitle}
          width="100%"
          height="100%"
          style={{ width: '100%', height: '100%' }}
          customButtons={customButtons}
          disableNav={Boolean(menuState || loading || !playerReady)}
          hideControlsOnArrowUp
          config={{
            file: {
              forceHLS: true,
              tracks: subtitleTracks,
              hlsOptions: {
                enableWorker: true,
                lowLatencyMode: false,
              },
              attributes: {
                playsInline: true,
                crossOrigin: 'anonymous',
                autoPlay: parseBool(initial.autoplay, true),
              },
            },
          }}
          onStart={() => setPlayerReady(true)}
          onPlay={() => setPlayerReady(true)}
          onPause={() => persistCurrentProgress({ force: true })}
          onProgress={handleProgress}
          onEnded={() => persistCurrentProgress({ completed: true, force: true })}
          onError={(playerError) => {
            const nextError = playerError instanceof Error
              ? playerError.message
              : 'The video could not be played.';
            setError(nextError);
            setPlayerReady(false);
          }}
        />
      ) : null}
      {showLoadingOverlay ? <LoadingScreen preview={launchPreview} /> : null}
      <TrackMenu menuState={menuState} options={menuOptions} detail={details} containerRef={menuContainerRef} />
    </div>
  );
}

const rootNode = document.getElementById('player-root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<PlayerApp />);
}
