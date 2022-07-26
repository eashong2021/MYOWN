const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fkfqcu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
