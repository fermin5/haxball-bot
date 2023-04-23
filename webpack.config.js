const path = require('path');

module.exports = {
  entry: './index.js', // Replace with the path to your main entry file
  output: {
    filename: 'bundle.js', // Replace with the desired name of your output file
    path: path.resolve(__dirname, 'dist') // Replace with the path to your desired output directory
  }
};