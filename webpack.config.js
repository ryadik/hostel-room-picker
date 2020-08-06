const path = require('path')
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TesterWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev


// Pages const for HtmlWebpackPlugin
// const PAGES_DIR = PATHS.src
const PAGES_DIR = path.resolve(__dirname, 'src/pages/')
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
console.log(PAGES)
PAGES.map(page => console.log(page.split('.')))

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TesterWebpackPlugin
        ]
    }
    return config
}

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = (preset) => {
    const options = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) {
        options.presets.push(preset)
    }

    return options
}

const plugins = () => {
    const base  = [
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`,
            chunks: ['index', `${page.split('.')[0]}`]
        })),
        // new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/cards.pug`,
        //     filename: `./${'cards.html'.replace(/\\.pug/, '.html')}`,
        //     chunks: ['index', 'cards']
        // }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/static/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]

    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode : 'development',
    entry: {
        index: ['@babel/polyfill', './scripts/index.js'],
        formElements: './scripts/formElements.js',
        cards: './scripts/cards.js'

    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models' : path.resolve(__dirname, 'src/models/'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 3000,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ],
            },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typesript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
        ]
    }
}
