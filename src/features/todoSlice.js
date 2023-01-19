import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: []
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodoItem: (state, action) => {
            //title control
            let todo = state.value.find(q => q.title == action.payload.title);
            if (!todo)
                state.value.push(action.payload);
        },
        removeTodoItem: (state, action) => {
            state.value = state.value.filter(q => q.id != action.payload.id);
        },
        updateTodoItem: (state, action) => {
            let todo = state.value.find(q => q.id == action.payload.id);
            if (todo)
                todo.title = action.payload.title;
        },
        emptyTodos: (state) => {
            state.value = [];
        }
    }
})


export const { addTodoItem, removeTodoItem, updateTodoItem, emptyTodos } = todoSlice.actions;
export default todoSlice.reducer;