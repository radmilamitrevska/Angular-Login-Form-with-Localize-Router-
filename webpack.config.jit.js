module.exports = {
    entry: require('./webpack/entry'),

    output: require('./webpack/output'),

    module: require('./webpack/module'),

    plugins: require('./webpack/plugins'),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        publicPath: "/",
        contentBase: "src",
    }
};
