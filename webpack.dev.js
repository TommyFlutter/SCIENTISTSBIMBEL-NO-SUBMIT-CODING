/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
  plugins:[
    new BundleAnalyzerPlugin()],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

});
