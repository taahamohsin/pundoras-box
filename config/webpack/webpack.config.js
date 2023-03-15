const { webpackConfig, inliningCss } = require('shakapacker');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const Dotenv = require('dotenv-webpack');

if (isDevelopment && inliningCss) {
  webpackConfig.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: webpackConfig.devServer.port,
      },
    })
  );
}

if (webpackConfig.plugins) webpackConfig.plugins.push(new Dotenv());
else webpackConfig.plugins = [new Dotenv()]

module.exports = webpackConfig;