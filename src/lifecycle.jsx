import React from 'react'
import { logLoading } from './logLoading'

logLoading( 'lifecycle' )

// FIXME: Still couldn't get the react-refresh to work with suggested workaround.
// https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/258#issuecomment-861084676 

export default class Lifecycle extends React.Component {

  hints

  render () {
    return (
      <>
        <h2>Lifecycle class component</h2>
        <input type="text" placeholder='lifecycle' />
      </>
    )
  }
}

export function Hooks () {
  return (
    <>
      <h2>Hooks function component</h2>
      <input type="text" placeholder='hooks' />
    </>
  )
}