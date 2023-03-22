import { ITodo } from "../../types/types"
import { TODOS_ACTION } from "./todosConst" 

export const todosReducer = (state: ITodo[] = [], action) => {
    switch (action.type) {
        case TODOS_ACTION.ADD_TODO:
            return [...state, action.payload]
        case TODOS_ACTION.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
        case TODOS_ACTION.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone
                }
                return todo
            })
        default:
            return state
    }
}