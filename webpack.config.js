module.exports = {
    entry: './source/app.js',
    output: {
        path: __dirname + "/build",
        filename : 'bundle.js'
    },
    module: {
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ["react","es2015"]
            }
        }]
    }
}