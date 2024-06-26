import React from 'react'
import "./ToDoCard.css"

function ToDoCard({task,priority}){
    return(
        <div className="todo-card">
            {task}
            <span className='priority'>
                {priority}

            </span>
            </div>
    )
}
export default ToDoCard