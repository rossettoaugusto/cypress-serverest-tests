const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: false,
    reportFileName: "index",
    inlineAssets: true,
    charts: true,
    timestamp: "shortDate",
  },

  env: {
    allure: true,
    allureReuseAfterSpec: true,
  },

  e2e: {
    baseUrl: "https://serverest.dev",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
