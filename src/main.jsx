import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app.jsx'

// run this before ReactDOM.render
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  console.log( 'setting react-refresh/runtime' )
  const runtime = require( 'react-refresh/runtime' )

  runtime.injectIntoGlobalHook( window )
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => type => type
}
console.log( 'loading main' )


ReactDOM.render(
  <App />,
  document.getElementById( 'root' )
)