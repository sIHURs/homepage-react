// // for reach markdown editor  - codemirror
// // next.config.js
// const removeImports = require('next-remove-imports')();

// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   removeImports({})
// }


// next.config.js
const removeImports = require('next-remove-imports')();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // other next.js config options
};

module.exports = removeImports({
  ...nextConfig,
});
