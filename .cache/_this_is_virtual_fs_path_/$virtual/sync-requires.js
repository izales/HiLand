
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/macpro/Documents/GitHub/HiLand/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/macpro/Documents/GitHub/HiLand/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/macpro/Documents/GitHub/HiLand/src/pages/index.tsx")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/macpro/Documents/GitHub/HiLand/src/pages/page-2.tsx"))
}

