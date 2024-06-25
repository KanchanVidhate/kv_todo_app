import "./Home.css"
import AddIcon from "../Home/img/add.png"
import ToDoCard from "./../../components/ToDoCard/ToDoCard"
import { useState } from "react"



function Home(){

    const[ todoList,setTodoList]=useState([
        "make some sweet dish for guest.",
      
    ])
     const[newTask,setnewTask]=useState("")

    return(<div>
        <h1 className="title">ToDo App</h1>

        <div className="list-container">
        { todoList.map((todoItem,i)=>< ToDoCard key={i} todoItem={todoItem}/> ) }
        </div>
      <div className=" text-container">
        <input type="text"
         className="add-input" 
         placeholder="Add New Task"
         value={newTask}
         onChange={(e)=>setnewTask(e.target.value)}
                  
         />

        <img src={AddIcon}
         alt="Add" 
         className="icon-add"
         onClick={()=>{
            setTodoList([...todoList,newTask])
            setnewTask("")
           
         }}
         />
      </div>

    </div>)
   
}

export default Home