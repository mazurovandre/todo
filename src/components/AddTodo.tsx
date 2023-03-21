import React, {ChangeEvent, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../store/store'

export const AddTodo = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(createTodo(text))
        setText('')
    }
    
  return (
    <div className="mb-4">
        <h1 className="text-grey-darkest">Todo List</h1>
        <div className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value={text} onInput={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={addTodo}>Add</button>
        </div>
    </div>
  )
}
