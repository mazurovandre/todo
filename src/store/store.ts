import { createStore } from "redux";

let todoId = 0

export interface ITodo {
    id: number,
    title: string,
    isDone: boolean
}

const initialState: ITodo[] = [
    {
        id: 0,
        title: 'init Title',
        isDone: true
    }
]

const todosReducer = (state: ITodo[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'TOGGLE_TODO':
            console.log('Toogle')
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

export const store = createStore(todosReducer, initialState)

// action creators

export const createTodo = (title: string) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: ++todoId,
            title: title,
            isDone: false
        }
    }
}

export const removeTodo = (id: number) => {
    return {
        type: 'REMOVE_TODO',
        payload: { id }
    }
}

export const toggleTodo = (id: number) => {
    return {
        type: 'TOGGLE_TODO',
        payload: { id }
    }
}