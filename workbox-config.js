module.exports = {
  "globDirectory": "www/",
  "globPatterns": [
    "**/*.{js,css,ico,png,html}"
  ],
  "swDest": "www/sw.js",
  "swSrc": "./sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};