# Android TV Wrapper

This folder contains a native Android TV shell for the HAK web app.

## What it does

- launches from the Android TV home screen
- loads your HAK server in a full-screen `WebView`
- allows HTTP LAN URLs like `http://192.168.1.20:4100?tv=1`
- stores the last server URL on-device
- lets you reopen the server settings panel with the remote `Menu` button

## How to use it

1. Open `android-tv` in Android Studio.
2. Let Android Studio sync the Gradle project.
3. Connect your Android TV or emulator.
4. Build and install the app.
5. On first launch, enter the URL of your running HAK server.

Example server URL:

```text
http://192.168.1.23:4100?tv=1
```

## Optional default URL

You can bake in a default server URL at build time with a Gradle property:

```text
hakBaseUrl=http://192.168.1.23:4100?tv=1
```

You can place that in your global Gradle properties or pass it during a build.

## Notes

- The TV app does not embed the Node server. Your HAK server still runs on your phone, PC, or another device.
- Cleartext HTTP is enabled because LAN playback commonly uses `http://...:4100`.
