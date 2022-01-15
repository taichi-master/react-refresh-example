import React from 'react'
import { Lifecycle, Hooks } from './lifecycle.jsx'

console.log( `🎉 loading %capp%c.jsx  🎉`, 'font-size: 1.5em;; text-transform: capitalize;', '' )

export function App () {
  return (
    <>
      <h1>Hello World</h1>
      <h2>The text entered here should not be altered upon modifying this page content nor its CSS style.</h2>
      <input type="text" placeholder="type something here to test out the hot reload feature" />
      <Lifecycle />
      <Hooks />
    </>
  )
}
