// entry -> output

const path = require('path')

module.exports = {
    entry: "./src/app.js"
    ,output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
    // how you want to use your loader
    ,module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
    ,devtool: 'cheap-module-eval-source-map'
    ,devServer: {
        contentBase: path.join(__dirname, "public")
        ,historyApiFallback: true // means will be handling all routing via client side code and should return index for all 404 routes

    }
}
// historyApiFallback: true // means will be handling all routing via client side code and should return index for all 404 routes
// read more about regular expressions
