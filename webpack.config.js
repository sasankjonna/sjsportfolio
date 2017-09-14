const path = require('path');

module.exports = {
  entry: ['./scripts/main.js','./scripts/example-work.js','./scripts/example-work-modal.js','./scripts/CertificationCarousel.js','./scripts/SkillsCarousel.js'],
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
