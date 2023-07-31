import {
  WebpackConfigMutator,
  WebpackConfigTransformContext,
} from '@teambit/webpack';
import { BundleStatsWebpackPlugin } from 'bundle-stats-webpack-plugin';
import SitemapWebpackPlugin from 'sitemap-webpack-plugin';

export const splitChunks = (configMutator: WebpackConfigMutator) => {
  const { entry } = configMutator.raw;
  configMutator.merge({
    // @ts-ignore-next-line
    entry: {
      app: { import: entry, dependOn: 'react-vendors' },
      'react-vendors': ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
      chunkFilename: '[name].[contenthash].js',
    },
    optimization: {
      runtimeChunk: 'single',
      chunkIds: 'natural',
      mergeDuplicateChunks: true,
      splitChunks: {
        // split the chunks asyncronously
        chunks: 'async',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          default: false,
          // split the common dependencies into separated chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'initial',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    },
  });

  configMutator.addPlugin(
    new BundleStatsWebpackPlugin({
      baseline: true,
    })
  );

  return configMutator;
};

export const addSitemap = (
  configMutator: WebpackConfigMutator,
  context: WebpackConfigTransformContext,
  // pass the routes to the transformer as an argument
  routes: string[]
) => {
  // don't add the sitemap plugin in dev mode
  if (context.mode !== 'prod') return configMutator;

  configMutator.addPlugin(
    new SitemapWebpackPlugin({
      base: 'https://portfolio-showoff-production.netlify.app/',
      paths: [...routes],
      options: {
        filename: 'sitemap/sitemap.xml',
      },
    })
  );
  return configMutator;
};
