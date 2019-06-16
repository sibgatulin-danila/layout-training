let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let copyWebpackPlugin = require('copy-webpack-plugin');




let conf = {

    entry: ['./src/index.js',
        './src/scss/style.scss'

    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist/'),
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },

    resolve: {
        extensions: ['.js', '.jpg', '.html', '.scss'],
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }, {
            test: /\.(css|scss)$/,

            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader",
                    options: {
                        url: false
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            }),

        }, ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new copyWebpackPlugin([{
            from: './src/imgs/',
            to: './imgs/'
        }, {
            from: './src/res/',
            to: 'res/'
        }, {
            from: 'src/index.html',
            to: './'
        }, ])
    ]
};

module.exports = (nev, options) => {

    let production = options.mode === 'production';

    conf.devtool = production ?
        false :
        'eval-sourcemap';

    return conf;
}