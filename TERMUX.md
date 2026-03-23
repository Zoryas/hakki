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

## Android TV

If you want to open the app on an Android TV browser while the server runs on your phone:

1. Find your phone's local IP address on Wi-Fi.
2. On the TV browser, open:

```txt
http://YOUR_PHONE_IP:4100
```

If the TV browser still shows the top nav instead of the vertical rail, use:

```txt
http://YOUR_PHONE_IP:4100?tv=1
```

Notes for TV use:

- The app now supports Android TV D-pad keycodes in both browse and playback.
- The `?tv=1` flag forces the TV layout if the browser user agent is not detected as a TV browser.
- PWA install prompts usually do not work from `http://PHONE_IP:4100`; for a true install prompt you need `localhost` on the same device or HTTPS.
