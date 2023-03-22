import { combineReducers } from "redux";
import { filterReducer } from "./filters/filterReducer";
import { todosReducer } from "./todos/todosReducer";

export const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})