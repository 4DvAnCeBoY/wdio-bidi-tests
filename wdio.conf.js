
export const config = {
    runner: 'local',
    specs: [
        './test/specs/BrowsingContext.spec.js'
    ],

    capabilities: [{
        browserName: 'chrome',
        webSocketUrl: true,
      'goog:chromeOptions': {
        excludeSwitches: ['--enable-automation'],
      },
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    framework: 'mocha',

    reporters: ['spec'],


    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
