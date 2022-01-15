const path = require( 'path' ),
      resolvePath = folder => path.resolve( __dirname, folder ),
      ReactRefreshWebpackPlugin = require( '@pmmmwh/react-refresh-webpack-plugin' )

module.exports = {
  mode: 'development',

  entry: {
    main: [
      resolvePath( 'src/main.jsx' )
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
    new ReactRefreshWebpackPlugin()
  ]
}