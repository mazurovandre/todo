import { TODOS_ACTION } from "./todosConst"

export const createTodo = (title: string) => {
    return {
        type: TODOS_ACTION.ADD_TODO,
        payload: {
            id: Date.now(),
            title: title,
            isDone: false
        }
    }
}

export const removeTodo = (id: number) => {
    return {
        type: TODOS_ACTION.REMOVE_TODO,
        payload: { id }
    }
}

export const toggleTodo = (id: number) => {
    return {
        type: TODOS_ACTION.TOGGLE_TODO,
        payload: { id }
    }
}