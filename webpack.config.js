const path = require('path');

module.exports = {
  entry: ['./js/main.js','./js/example-work.js','./js/example-work-modal.js','./js/CertificationCarousel.js','./js/SkillsCarousel.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    }]
  }
}
