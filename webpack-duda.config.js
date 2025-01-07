const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/duda-index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-widget.js',
    libraryTarget: 'umd',
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i, // Match .css files
        use: ['style-loader', 'css-loader'], // Apply loaders in reverse order
      },
    ],
  },
};
