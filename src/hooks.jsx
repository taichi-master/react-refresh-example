import React from 'react'
import { logLoading } from './logLoading'

logLoading( 'hooks' )

export default function Hooks () {
  return (
    <>
      <h2>Hooks function component</h2>
      <input type="text" placeholder='hooks' />
    </>
  )
}