import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    
    const [value,setValue] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault()
        if(value !== '')
            addTodo(value);
        setValue('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' className='todo-input' 
                value={value} 
                placeholder='what is your task today?'
                onChange={(e)=>{setValue(e.target.value);}}
        />
        <button type='submit' className='todo-btn' >Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
