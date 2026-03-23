# ARRWA TV Browser + Resolver

TV-first Netflix-inspired browse UI layered on top of the existing ARRWA/VidLink resolver.

## What is included

- `/` serves a responsive home screen with hero art, horizontal rails, and a title-details overlay
- D-pad friendly focus behavior for nav, hero buttons, rails, modal actions, season controls, and episode rows
- `/api/catalog` returns TMDB-backed shelves with an automatic fallback demo catalog when TMDB is unavailable
- `/api/details` returns movie or TV metadata plus episode lists for the overlay
- `/player` keeps the built-in HLS player that resolves streams through `/extract`
- `/extract` and `/resolve` keep the original resolver flow intact

## Setup

```powershell
cd D:\skeyp\arrwa
npm install
npm start
```

A local `.env` is now supported automatically. `.env.example` includes the required TMDB variables.

For Android/Termux, use `TERMUX.md` as the setup guide and run `npm run start:android`.

## Main routes

```text
GET /
GET /player
GET /api/catalog
GET /api/details?tmdb_id=106480&type=tv&season=1
GET /extract?tmdb_id=106480&type=tv&season=1&episode=1
GET /resolve?tmdb_id=106480&type=tv&season=1&episode=1
GET /health
```

## Notes

- `type=movie` only needs `tmdb_id`
- `type=tv` uses `tmdb_id`, `season`, and `episode` for playback
- when TMDB is unreachable the home screen falls back to a built-in demo catalog so the UI still works
- the player page still validates the final manifest unless `no_validate=1` is supplied
