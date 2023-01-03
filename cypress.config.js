const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout: 25000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://business-qa.abhi.com.pk",
    experimentalSessionAndOrigin:true,
    defaultCommandTimeout: 20000,
  },
});
