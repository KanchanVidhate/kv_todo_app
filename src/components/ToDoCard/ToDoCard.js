import React from 'react'
import "./ToDoCard.css"
import ImgDel from "./img/delete.png"

function ToDoCard({index, task,priority,deleteItem}){
     
    const PRIORITY_EMOJI_MAP={
        Shopping:"🛒",
        Learning:"📚",
        Payment:"💳",
        Work:"💼",
        Healthcare:"🏥",
        Personal:"👩‍💻",
        Other:"🤔"
    } 

    const PRIORITY_COLORS={
                Shopping:"#ffd700",
                Learning:"#00bfff",
                Payment:"#ffa500",
                Work:"#00ff7f",
                Healthcare:"red",
                Personal:"#ff6347",
                Other:"#000000"
      }
   
    return(
        <div className="todo-card">
             <img src={ImgDel}
              alt="delete"
               className='delete-btn'
               onClick={()=>{
                deleteItem(index)
             }}/>
            {task}
            <span className='priority'style={
                {
                    backgroundColor:PRIORITY_COLORS[priority],
                    color:"white"
                }
            }>
             {  PRIORITY_EMOJI_MAP[priority]}{priority}

            </span>
           
            </div>
    )
}
export default ToDoCard