const path = require("path");

module.exports = {
  mode: "production", // Optimize for production
  entry: "./src/index.js", // Entry point of your app
  output: {
    filename: "bundle.js", // The output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "", // Base path for all assets
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve JS and JSX files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JS and JSX files
        exclude: /node_modules/, // Ignore node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic", // Use automatic runtime for React 17+
                },
              ],
              "@babel/preset-env", // Transpile modern JavaScript
            ],
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"], // Load styles inline
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Handle image files
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: true, // Minimize for production
  },
  devtool: "source-map", // Optional: Add source maps for easier debugging
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve files from dist
    compress: true, // Enable gzip compression
    port: 9000, // Dev server port
  },
};
