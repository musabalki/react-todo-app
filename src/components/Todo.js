import React, { useState } from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr"
import { useTodoLayerValue } from "../context/TodoContext"
const Todo = ({ todo }) => {
    const [{ }, dispatch] = useTodoLayerValue();
    const [editable, setEditable] = useState(false);
    const [content, setContent] = useState(todo.content);

    const removeTodo = (todoId) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: todoId
        })
    }
    const completeTodo = (todoId) => {
        dispatch({
            type: "COMPLETE_TODO",
            payload: todoId
        })
    }
    const updateTodo = (newContent) => {
        
        dispatch({
            type: "UPDATE_TODO",
            payload: newContent
        })
    }
    return (
        <div className="todo-row">
            <div className={todo.isCompleted ? "completed" : null} onClick={() => editable ? '' : completeTodo(todo.id)}>
                {editable ? <input type="text" className="todo-input-edit" onChange={e => setContent(e.target.value)} value={content} /> : todo.content}
            </div>
            <div className="todo-icons">
                <GrFormClose className="todo-icon" onClick={() => removeTodo(todo.id)} />
                {
                    editable ? <GrFormCheckmark onClick={() => { 
                        updateTodo({ todoId: todo.id, newValue: content }); 
                        setContent(''); 
                        setEditable(false) 
                    }} /> 
                    : 
                <GrFormEdit className="todo-icon" onClick={() => setEditable(true)} />

                }
            </div>
        </div>
    )
}

export default Todo
