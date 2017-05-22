module.exports = {
    entry: require('./webpack/entry.prod'),

    output: require('./webpack/output'),

    module: require('./webpack/module.prod'),

    plugins: require('./webpack/plugins'),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true
    }
};
