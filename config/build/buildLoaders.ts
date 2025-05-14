import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|webp|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icons: true,
                    svgConfg: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const scssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          cssLoaderWithModules,
          "sass-loader",
        ],
    }

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
            loader: 'ts-loader',
            options: {
                transpileOnly: isDev
            }
            }
        ]
    }


    return [
        scssLoader,
        tsLoader,
        assetLoader,
        svgrLoader
    ]
}