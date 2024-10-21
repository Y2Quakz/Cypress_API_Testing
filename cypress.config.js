const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in/api/',
    schreenshotOnRunFailure: false,
    video: false,
  },
});
