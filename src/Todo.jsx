import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <div className='todo'>
        <label>
          <input type="checkbox" checked={todo.complete} onClick={handleTodoClick} className='chk'/>
          {todo.name}
        </label>
    </div>
  )
}
