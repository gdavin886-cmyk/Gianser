#!/usr/bin/env bash
# Builds an installable debug APK. Android SDK location may be set through
# ANDROID_HOME, ANDROID_SDK_ROOT, or local.properties (sdk.dir=...).
set -euo pipefail

./gradlew :app:assembleDebug
echo "APK created: app/build/outputs/apk/debug/app-debug.apk"
