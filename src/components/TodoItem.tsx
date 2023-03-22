import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todos/todosActions';
import { ITodo } from '../types/types';

export const TodoItem:React.FC<ITodo> = ({id, title, isDone}) => {

  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo(id))
  }

  const handleRemove = () => {
    dispatch(removeTodo(id))
  }
  
  return (
    <div className="flex mb-4 items-center">
        <p className={isDone ? "w-full line-through text-green" : "w-full text-grey-darkest"}>{title}</p>
        {isDone ? (
            <button className="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey" onClick={handleToggle}>Not Done</button>
        ) : (
            <button className="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green" onClick={handleToggle}>Done</button>
            
        )}
        <button className="shrink-0 p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={handleRemove}>Remove</button>
    </div>
  )
}
