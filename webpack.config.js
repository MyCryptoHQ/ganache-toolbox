const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  cache: true,
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: ['babel-polyfill', './src/index.ts'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })]
  },
  plugins: [new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })]
};
