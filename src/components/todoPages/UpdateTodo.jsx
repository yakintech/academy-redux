import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTodoItem } from '../../features/todoSlice';

function UpdateTodo() {

    const [title, settitle] = useState('');
    const [id, setid] = useState(0);

    let dispatch = useDispatch();


    const update = () => {

        if (title != '' && id != 0) {

            let todo = {
                id: id,
                title: title
            }

            dispatch(updateTodoItem(todo));
        }


    }

    return (<>
        <div>
            <div>
                <label>Id</label>
                <input type='text' onChange={(e) => setid(e.target.value)} />
            </div>

            <div>
                <label>Title</label>
                <input type='text' onChange={(e) => settitle(e.target.value)} />
            </div>
            <div>
                <button onClick={() => update()}>Update</button>
            </div>

        </div>
    </>
    )
}

export default UpdateTodo