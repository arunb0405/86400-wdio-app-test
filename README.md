# 86400-wdio-app-test
Android and Cloud app Test in Wdio

To run tests in BrowserStack - 

Download and install browserstacklocal.exe in Windows

Go to installation directory and start browserstack from command line as below -
browserstacklocalapp.exe --key xqwp5At9Yp1Y1xXeB9TM

DO NOT run 'npm install' , it only works with the node_modules that's checked-in

Run the tests in browserstack from Project Root folder where Package.json is present -

npm run android.browserstack.app

To run tests in Android Emulator -
1. Start Android Studio 
2. Tools -> AVD Manager -> Pixel 4a (Version 11.0)
3. Click start button
4. Ensure adb devices shows the 'emulator-5554' device (not un-authorized)

In the command prompt , run 'npm run android.app' from project root folder. (where package.json is present)
