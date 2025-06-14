import { BuildOptions } from './types/types';
import { WebpackConfiguration } from "webpack-dev-server";        
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolves';


export function buildWebpack(options: BuildOptions) : WebpackConfiguration {
  const {mode, paths} = options
  const isDev = mode === 'development';
    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
          },
          resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : false, 
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}