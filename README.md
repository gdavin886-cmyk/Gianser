# Gianser

Gianser is a brown-themed browser interface packaged as an Android app. The Android shell uses a WebView to load the bundled interface, so the first screen is available without a network connection; the app requests internet access only for pages the user chooses to open.

## Run locally

Open `index.html` in a browser, or serve the folder with:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Build the Android APK

1. Install Android SDK Platform 35 and Build Tools, and set `ANDROID_HOME` (or add `sdk.dir=/path/to/sdk` to `local.properties`).
2. Run:

   ```bash
   ./build-apk.sh
   ```

The debug-installable APK is written to `app/build/outputs/apk/debug/app-debug.apk`. Install it on a device with `adb install app/build/outputs/apk/debug/app-debug.apk`.
