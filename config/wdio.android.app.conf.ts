import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs app.login.spec
// './tests/specs/**/app*.spec.ts',
// './tests/specs/**/app.login.spec.ts',
//  app: join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
//  appActivity: 'com.wdiodemoapp.MainActivity',
// ============
config.specs = [
    './tests/specs/**/app.calculator.spec.ts'
];

config.path = '/wd/hub';
config.port = 4723;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        platformVersion: '11.0',
        orientation: 'PORTRAIT',
        maxInstances: 1,
        deviceName: 'Pixel 4a',
        app: join(process.cwd(), './apps/Calculator_apkpure.com.apk'),
        appPackage: 'com.google.android.calculator',
        // app: join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        // appActivity: 'com.wdiodemoapp.MainActivity',
        automationName: 'UiAutomator2',
        newCommandTimeout: 2400,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        // 'appium:deviceName': 'Pixel_3_10.0',
        // 'appium:platformVersion': '10.0',
        // 'appium:orientation': 'PORTRAIT',
        // 'appium:automationName': 'UiAutomator2',
        // The path to the app
        // 'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        // @ts-ignore
        // 'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // 'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
