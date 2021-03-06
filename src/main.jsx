import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
import { logLoading } from './logLoading'

logLoading( 'main' )

// run this before ReactDOM.render
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  console.log( `🔥 setting react-refresh/runtime 🔥` )
  const runtime = require( 'react-refresh/runtime' )

  runtime.injectIntoGlobalHook( window )
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => type => type
}

// NOTE: this file can't be hot reloaded.
ReactDOM.render(
  <App/>,
  document.getElementById( 'root' )
)