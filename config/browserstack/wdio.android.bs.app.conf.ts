import { config } from '../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    // './tests/specs/**/app*.spec.js',
    './tests/specs/**/app.calculator.spec.ts'
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        'browserstack.debug': true,
        'browserstack.local': true,

        'browserstack.user' : 'xxxx',
        'browserstack.key' : 'xxxxx',

        // Set URL of the application under test
        // app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',
        'app' : 'bs://764633da1f8dfe27ea25a8111ee3a68aac1a23d0',

        // Specify device and os_version for testing
        'device' : 'Samsung Galaxy S22',
        'os_version' : '12.0',
        'platformName' : 'Android',
        'newCommandTimeout' : '10000',

        // Set other BrowserStack capabilities
        project: 'wdio-bs-test-project',
        build: 'android',
        name: 'wdio-test'
    },
];

exports.config = config;
