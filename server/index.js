const express = require( 'express' ),
      app = express(),
      port = 3000

const webpack = require( 'webpack' ),
      webpackConfig = require( '../webpack.config.js' )

// NOTE: alter the webpack config for using the webpack-hot-middleware
webpackConfig.entry.main.push('webpack-hot-middleware/client')

const compiler = webpack( webpackConfig )

const path = require( 'path' )

app.use( require( 'webpack-dev-middleware' )( compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
} ) )
app.use( require( 'webpack-hot-middleware' )( compiler, {
  hot: true,
  log: console.warn
} ) )
app.get( '/', function ( req, res ) {
  res.sendFile( path.resolve( __dirname, '../public/index.html' ) )
} )

app.listen( port, function () {
  console.log( `🚀 listening at  ${port}` )
} )