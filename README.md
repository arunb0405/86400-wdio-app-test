# 86400-wdio-app-test
Android and Cloud app Test in Wdio

# 86400 Test Setup
1. Install and Setup Android SDK, setup JAVA_HOME and ANDROID_HOME variables.
2. Start the Android emulator (Pixel 4a, Android 11) , if it's a different emulator, change capabilities in 'wdio.android.app.conf.ts' file.
3. Ensure the device name and platform capabilities are same in wdio.android.app.conf.ts
4. adb devices should return the emulator udid if the above variables are set correctly.
5. To run on a physical device connect an android phone to windows and adb devices should list device-id (should not be un-authorized)
Put the android phone on USB debug mode.
Refer https://github.com/webdriverio/appium-boilerplate#readme for more instructions

1. npm install 
2. npm run android.app (to run tests)
3. The Calculator tests should run in emulator and tests should pass.
4. Reports are generated in /reports/html-reports/Suite folder.
