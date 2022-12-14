// const path = require("path");

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = () => ({
//     entry: [
//         "@babel/polyfill",
//         path.join(__dirname, "client", "style.css"),
//         path.join(__dirname, "client", "src", "start.js"),
//     ],
//     output: {
//         path: path.join(__dirname, "client", "public"),
//         filename: "bundle.js",
//     },
//     performance: {
//         hints: false,
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, "client", "public")
//         },
//         compress: true,
//         port: 3000, // default 8000
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 loader: "babel-loader",
//             }, {
//                 test: /\.css$/i,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     {
//                         loader: "css-loader",
//                         options: {
//                             url: false,
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.tsx?$/,
//                 use: "ts-loader",
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js"],
//     },
//     plugins: [new MiniCssExtractPlugin({
//         filename: 'bundle.css',
//     })],
// });
