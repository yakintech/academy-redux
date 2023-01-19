import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";

export default combineReducers({
    counterReducer,
    todoReducer
  })