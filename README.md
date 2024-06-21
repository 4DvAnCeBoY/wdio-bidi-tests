# WebdriverIO BiDi Project with LambdaTest

This project demonstrates how to use WebdriverIO with Bidirectional Protocol (BiDi) support and run tests on LambdaTest.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- LambdaTest account

## Setup

1. Clone this repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up LambdaTest credentials:
   - Create a `.env` file in the project root
   - Add your LambdaTest username and access key:
     ```
     LT_USERNAME=your_username
     LT_ACCESS_KEY=your_access_key
     ```

## Project Structure

- `test/specs/BrowsingContext.spec.js`: Contains the test script using BiDi protocol
- `wdio.lambdatest.conf.js`: WebdriverIO configuration file for LambdaTest
- `package.json`: Project dependencies and scripts

## Running Tests

To run the tests, use the following command:

```
npm run wdio
```

This command will execute the test script on LambdaTest using the specified configuration.

## Test Description

The test script (`BrowsingContext.spec.js`) demonstrates the following:

1. Opening a browser and navigating to Google
2. Getting the window handle
3. Navigating to a Selenium test page using BiDi protocol
4. Listening for browser messages
5. Retrieving session status
6. Closing the browsing context

## Configuration

The `wdio.lambdatest.conf.js` file contains the WebdriverIO configuration for running tests on LambdaTest. Key configurations include:

- Test specs location
- Browser capabilities (Chrome with BiDi support)
- LambdaTest specific options
- Framework settings (Mocha)

## Dependencies

- WebdriverIO: Test automation framework
- Mocha: Test framework
- wdio-lambdatest-service: WebdriverIO service for LambdaTest integration

## Notes

- This project uses the Bidirectional Protocol (BiDi) which is a new standard for browser automation.
- Make sure your LambdaTest plan supports BiDi protocol usage.
- The `webSocketUrl` capability is set to `true` to enable BiDi support.

## Troubleshooting

If you encounter any issues:
1. Ensure your LambdaTest credentials are correct
2. Check if your LambdaTest plan supports BiDi
3. Verify that all dependencies are correctly installed

For more information, refer to the [WebdriverIO documentation](https://webdriver.io/) and [LambdaTest documentation](https://www.lambdatest.com/support/docs/).