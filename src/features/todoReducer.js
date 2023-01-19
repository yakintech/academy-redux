import { createAction, createReducer } from "@reduxjs/toolkit"


const initialState = {
    value: []
}

export const addTodoItem = createAction('todos/add');
export const removeTodoItem = createAction('todos/remove');
export const updateTodoItem = createAction('todos/update');
export const emptyTodos = createAction('todos/empty');


export const todoReducer = createReducer(initialState, (builder) => {

    builder.addCase(addTodoItem, (state, action) => {
        //title control
        let todo = state.value.find(q => q.title == action.payload.title);
        if (!todo)
            state.value.push(action.payload);
    })
        .addCase(removeTodoItem, (state, action) => {
            state.value = state.value.filter(q => q.id != action.payload.id);
        })
        .addCase(updateTodoItem, (state, action) => {
            let todo = state.value.find(q => q.id == action.payload.id);
            if (todo)
                todo.title = action.payload.title;
        })
        .addCase(emptyTodos, (state, action) => {
            state.value = [];
        })

})