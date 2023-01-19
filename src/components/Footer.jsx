import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {

    let counterGlobalState = useSelector(state => state.counterReducer);
    // console.log('counterGlobalState ', counterGlobalState);

    return (<>
        <div>Footer</div>
        <h1>{counterGlobalState}</h1>
    </>

    )
}

export default Footer