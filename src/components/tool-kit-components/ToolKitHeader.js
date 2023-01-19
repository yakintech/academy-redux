import React from 'react'
import { useSelector } from 'react-redux'

function ToolKitHeader() {

  let state = useSelector(state => state);

  console.log('STATE ', state);

  return (
    <>
      <h1>{state.sayac.value}</h1>
    </>
  )
}

export default ToolKitHeader