import React from 'react'
import "./ToDoCard.css"

function ToDoCard({todoItem}){
    return(
        <div className="todo-card">
            {todoItem}
            </div>
    )
}
export default ToDoCard