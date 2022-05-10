const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'release'),
      filename: 'bob-front-utils.js',
      library: 'bobFrontUtils',
      libraryTarget: "umd"
    }
}
