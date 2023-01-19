import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoItem, emptyTodos } from '../../features/todoReducer';
// import { addTodoItem, emptyTodos } from '../../features/todoSlice';




function AddTodo() {

    const [title, settitle] = useState('');

    let dispatch = useDispatch();

    const add = () => {
        let newTodo = {
            id: Math.floor(Math.random() * 999999),
            title: title
        }

        dispatch(addTodoItem(newTodo))
    }


    const empty = () => {
        dispatch(emptyTodos());
    }

  return (<>
    
    <div>
        <label>Title:</label>
        <input type='text' onChange={(e) => settitle(e.target.value)} />
    </div>
    <div>
        <button onClick={() => add()}>Add</button>
        <button onClick={() => empty()}>Empty Todos</button>
    </div>
  
  </>
  )
}

export default AddTodo