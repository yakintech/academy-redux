import React from 'react'
import { useSelector } from 'react-redux'

function SiteHeaders() {

    //global state
    let globalCounterState = useSelector(state => state.counterReducer);

    return (<>
        <div>Site Header</div>
        <h1>{globalCounterState}</h1>
    </>
    )
}

export default SiteHeaders