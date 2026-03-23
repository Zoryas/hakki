# Run In Termux

This project works in Termux because it is a Node.js server with a browser UI.

## Requirements

- Android device with Termux installed from GitHub or F-Droid
- Node.js 20 or newer
- Internet access for TMDB and stream resolving

## 1. Install packages

```sh
pkg update && pkg upgrade
pkg install git nodejs-lts
```

Check Node:

```sh
node -v
```

You want `v20` or newer.

## 2. Clone and install

```sh
git clone <your-repo-url>
cd Hak-main
npm install
```

## 3. Configure environment

Copy the example file:

```sh
cp .env.example .env
```

Edit `.env` and set at least:

```ini
HOST=0.0.0.0
PORT=4100
TMDB_API_KEY=your_tmdb_api_key_here
```

`HOST=0.0.0.0` lets the server bind in a Termux-friendly way.

## 4. Build the player bundle

```sh
npm run build:player
```

## 5. Start on Android

```sh
npm run start:android
```

## 6. Open it

On the same Android device, open:

```txt
http://127.0.0.1:4100
```

You can also try:

```txt
http://localhost:4100
```

## Notes

- `npm run start:android` defaults `HOST` to `0.0.0.0` and `PORT` to `4100`.
- If Android kills background processes, keep Termux open while using the app.
- If you change player UI code in `src/player-app.jsx`, rebuild with `npm run build:player`.
