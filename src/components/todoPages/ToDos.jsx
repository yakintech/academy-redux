import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodoItem } from '../../features/todoReducer';
// import { removeTodoItem } from '../../features/todoSlice';



function ToDos() {

    let { todos } = useSelector(state => state);
    let dispatch = useDispatch();

    const deleteTodo = (item) => {
        dispatch(removeTodoItem(item));
    }

    return (<>
        <h1>Todos length: {todos.value.length}</h1>
        <ul>
            {
                todos.value.map((item) => <>
                    <li key={item.id}>{item.title} - {item.id}</li>
                    <button onClick={() => deleteTodo(item)}>Delete</button>
                </>
                )
            }
        </ul>

    </>

    )
}

export default ToDos