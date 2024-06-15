import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import './index.css'
import {v4 as uuidv4} from 'uuid';
uuidv4();

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {
  const todoNameRef = useRef()

  const [todos, setTodos] = useState(()=> {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

  return JSON.parse(localValue)
  })
  
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
     const name = todoNameRef.current.value
     if (name === '') return
     setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
     })
     todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos} className='red'>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      
    </>
  )
}
