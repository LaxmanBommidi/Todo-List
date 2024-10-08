import React from 'react'
import { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {
    
    const [value,setValue] = useState(task.task);

    function handleSubmit(e)
    {
        e.preventDefault()
        editTodo(value,task.id);
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' className='todo-input' 
                value={value} 
                placeholder='Update task'
                onChange={(e)=>{setValue(e.target.value);}}
        />
        <button type='submit' className='todo-btn' >Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm
