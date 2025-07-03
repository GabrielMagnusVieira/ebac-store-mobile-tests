export const config = {

    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [

    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ebac',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutoCompletion':  true

    }],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
