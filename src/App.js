import React, { useState } from 'react'
import { useTodoLayerValue } from './context/TodoContext'
import TodoList from "./components/TodoList"
import "./App.css"
const App = (props) => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content,setContent]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!content && content.length<1){
      return;
    }
    const newTodo = {
      id:Math.floor(Math.random()*454111),
      content,
      isCompleted:false
    }
    dispatch(
      {type:"ADD_TODO",payload:newTodo}
    )
    setContent('')
  }
  console.log(todos)
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input className="todo-input" type="text" onChange={e=>setContent(e.target.value)} value={content} />
        <button className="todo-button">Ekle</button>
      </form>
     
      <TodoList todos={todos} />
    </div>
  )
}

export default App
