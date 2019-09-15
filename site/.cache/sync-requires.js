const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-cv-src-templates-index-js": hot(preferDefault(require("/Users/mj/Documents/Dreams/gatsby/gatsby-theme-building/gatsby-theme-cv/src/templates/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mj/Documents/Dreams/gatsby/gatsby-theme-building/site/.cache/dev-404-page.js")))
}

