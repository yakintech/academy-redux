import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { COUNTER_ACTION } from '../store/actions/counter.action';

function Content() {
    const [number, setnumber] = useState(0)

    let dispatch = useDispatch();

    const increase = () => {
        dispatch(COUNTER_ACTION.INCREASE());
    }

    const decrease = () => {
        dispatch(COUNTER_ACTION.DECREASE())
    }

    const increaseByValue = () => {
        dispatch(COUNTER_ACTION.INCREASE_BY_VALUE(Number(number)));
    }
    return (<>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
        <div>
            <label>Value: </label>
            <input type='text' onChange={(e) => setnumber(e.target.value)} />
            <button onClick={() => increaseByValue()}>Increase By Value</button>
        </div>
    </>
    )
}

export default Content