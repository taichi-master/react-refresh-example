const path = require( 'path' ),
      resolvePath = folder => path.resolve( __dirname, folder ),
      ReactRefreshWebpackPlugin = require( '@pmmmwh/react-refresh-webpack-plugin' ),
      webpack = require( 'webpack' )

module.exports = {
  mode: 'development',

  entry: {
    main: [
      resolvePath( 'src/main.jsx' )
      // 'webpack-hot-middleware/client' // required for webpack-hot-middle only; will be added in server/index.js
    ]
  },

  output: {
    path: resolvePath( 'public' ),
    publicPath: '/js',
    filename: 'bundle.js'
  },

  devServer: {
    static: resolvePath( 'public' ),
    port: 3000,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [ /node_modules/ ],
        use: [
          {
            loader: require.resolve( 'babel-loader' ),
            options: {
              plugins: [ require.resolve( 'react-refresh/babel' ) ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // required for webpack-hot-middle only
    new ReactRefreshWebpackPlugin()
  ]
}