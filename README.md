# 86400-wdio-app-test
Android and Cloud app Test in Wdio

Install and Setup Android SDK, setup JAVA_HOME and ANDROID_HOME variables.
Start the Android emulator
Ensure the device name and platform capabilities are same in wdio.android.app.conf.ts
adb devices should return the emulator udid if the above variables are set correctly.

1. npm install 
2. npm run android.app (to run tests)
3. The Calculator tests should run in emulator and tests should pass.
4. Reports are generated in /reports/html-reports/Suite folder.
