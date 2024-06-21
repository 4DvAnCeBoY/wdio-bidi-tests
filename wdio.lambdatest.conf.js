
export const config = {
    specs: [
        './test/specs/BrowsingContext.spec.js'
    ],

  capabilities: [
    {
      "LT:Options": {
        browserName: "chrome",
        webSocketUrl: true,
        version: "latest",
        name: "Test WebdriverIO bidi",
        build: "Bidi test"
      }
    }],

  user: process.env.LT_USERNAME || "YOUR LAMBDATEST USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR LAMBDATEST ACCESS KEY",
  buildName: "bidi test",

  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 50000,
  }
}
