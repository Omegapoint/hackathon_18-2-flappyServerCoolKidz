const path = require("path");

const config = {
    entry: {
        main: path.join(__dirname, "src/client/client.ts")
    },
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },
        ]
    },

};

module.exports = config;