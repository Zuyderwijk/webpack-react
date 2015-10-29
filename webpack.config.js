var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    entry: getEntrySrc(['./src/entry.js']),
    common: ['react', 'react-router', 'alt'],
    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.jsx', '.html'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/bundle.js'
    },

    devtool: 'eval',
    devServer: {
        contentBase: './tmp',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel?stage=1'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack en React',
            template: 'src/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

function getEntrySrc(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}