import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, empty, incrementByValue } from '../../features/sayacSlice';

function ToolKitContent() {

  const [number, setnumber] = useState(0)

  let dispatch = useDispatch();

  const increaseSayac = () => {
    dispatch(increment())
  }

  const decreaseSayac = () => {
    dispatch(decrement())
  }

  const emptySayac = () => {
     dispatch(empty())
  }


  const calc = () => {
      dispatch(incrementByValue(Number(number)))
  }

  return (<>

    <button onClick={() => increaseSayac()}>Increase</button>
    <button onClick={() => decreaseSayac()}>Decrease</button>
    <button onClick={() => emptySayac()}>Empty</button>
    <div>
      <label>Value: </label>
      <input type='text' onChange={(e) => setnumber(e.target.value)}/>
      <button onClick={() => calc()}>Increase by value</button>
    </div>
  
  </>
  )
}

export default ToolKitContent