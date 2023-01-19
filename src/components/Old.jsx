import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { COUNTER_ACTION } from '../store/actions/counter.action';

function Old(props) {

    return (<>
        <h1>{props.state.counterReducer}</h1>
        <div>Old</div>
        <button onClick={() => props.increase()}>Increase</button>
    </>

    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        increase : () => {
            dispatch(COUNTER_ACTION.INCREASE())
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Old)


