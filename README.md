1.  'npm init -y' to generate a 'package.json' file.
2.  'npm install webpack webpack-cli --save-dev' to install webpack.
3.  create a 'webpack.config.js' and copy following to it:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template HTML file
            filename: 'index.html' // Output HTML file name
        }),
    ],
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

4.  'npm install --save-dev html-webpack-plugin'
5.  'npm install --save-dev style-loader css-loader'
6.  create dist and src folder.
7.  src create : index.js , index.html and styles.css
8.  Use https://jshint.com/ for linting.
