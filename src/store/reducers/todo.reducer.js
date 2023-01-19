export function todoReducer(state, action){

    if(state == undefined){
        return [];
    }

    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            let filteredTodos = state.filter(q => q.id != action.payload.id);
            return filteredTodos;
        case 'EMPTY':
            return [];
        default:
            return state;
    }

}

