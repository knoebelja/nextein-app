const { default: config } = require("nextein/config");

module.exports = config({
  // your next.js config goes here
  exportPathMap: () => ({
    "/docs": { page: "/docs" },
    "/blog": { page: "/blog" }
  })
});
