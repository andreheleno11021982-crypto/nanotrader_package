NanoTrader - minimal project ready for phone-side build testing.

Instructions:
1. Upload this repository to GitHub (create a repo and upload files or upload the ZIP).
2. In GitHub, go to Actions -> run the workflow 'Android debug build' (or push to main).
3. When the workflow finishes, open the run and download the artifact 'nanotrader-app-debug-apk'.
4. Download the APK on your phone and install it (allow unknown sources).

Note: The workflow currently creates a placeholder APK file so you can test the flow. For a real APK you need a proper Android Gradle build or Expo EAS build.
