const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Todo-List',
        filename: 'bundle.html',
        inject: 'body',
    })],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 
                {
                    loader: 'css-loader',
                    options: {
                      modules: true, // Enable CSS modules
                      localIdentName: '[name]__[local]___[hash:base64:5]' // Optional: customize class names
                    }
                  }
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(mp4|MP4)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\..html$/i,
            loader: "html-loader"
        }
        ]
    },

}