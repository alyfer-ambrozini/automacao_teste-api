// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
      name: 'api',
      testMatch: '/tests/_api.spec.js',
      use: {
        baseURL: 'https://reqres.in'
      }
    }      
  ]
};
module.exports = config;