module.exports = {
  components: "src/components/ComponentA.js",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  },
  usageMode: 'expand'
};
