import { filterReducer } from "../store/filters/filterReducer";
import { todosReducer } from "../store/todos/todosReducer";

export interface ITodo {
    id: number,
    title: string,
    isDone: boolean
}

export type ITodosState = ReturnType<typeof todosReducer>;
export type IFilterState = ReturnType<typeof filterReducer>;