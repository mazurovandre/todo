import React from 'react'
import { useSelector } from 'react-redux'
import { ITodo } from '../store/store'
import { AddTodo } from './AddTodo'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

    const todos: ITodo[] = useSelector(state => state)

    const items = todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} isDone={todo.isDone} />
    ))


  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <AddTodo />
        <div>
            {items}
        </div>
    </div>
</div>
  )
}