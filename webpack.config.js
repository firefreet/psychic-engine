const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./public/index.js"
  },
  output: {
    path: __dirname + "/public/dist/",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [new WebpackPwaManifest({
    "name": "Budget App",
    "short_name": "Budget App",
    "icons": [
      {
        "src": path.resolve(__dirname + "/public/icons/icon-192x192.png"),
        "sizes": [192,512]
      }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "start_url": "/",
    "display": "standalone"
  })]
};

module.exports = config;
