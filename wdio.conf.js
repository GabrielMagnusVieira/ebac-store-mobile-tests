export const config = {

    //runner: 'local',
    //port: 4723,

    
         user: 'oauth-magnus181098-d0081',
         key: 'f756fdbf-ab93-4bed-9708-eb435edc2fbb',
         hostname: 'ondemand.us-west-1.saucelabs.com',
         port: 443,
         baseUrl: 'wd/hub',
         
   

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [

    ],

    maxInstances: 1,

    capabilities: [
    //    {
      //  platformName: 'Android',
        //'appium:deviceName': 'ebac',
        //'appium:platformVersion': '16.0',
        //'appium:automationName': 'UiAutomator2',
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appium:appWaitActivity': '.MainActivity',
        //'appium:disableIdLocatorAutoCompletion':  true

    //  }
    {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        "appium:disableIdLocatorAutoCompletion": true,
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Ebac Shop test',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.0.0',
        },
}

],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec', 
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
     {
        await driver.takeScreenshot();
    }
}

}
