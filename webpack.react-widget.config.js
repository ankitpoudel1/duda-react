const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-widget.js',
    library: 'MyReactWidget', // Global variable for the widget
    libraryTarget: 'umd', // Universal module definition
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: 'babel-loader', // Use Babel to process JavaScript
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Inject CSS into the DOM
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
};
