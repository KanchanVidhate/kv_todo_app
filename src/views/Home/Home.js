import "./Home.css"
import AddIcon from "../Home/img/add.png"
import ToDoCard from "./../../components/ToDoCard/ToDoCard"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';


function Home(){

    const[ todoList,setTodoList]=useState([
        
        {task:"Buy Groceries",priority:"Shopping"},
        {task:"Learn React",priority:"Learning"},

        ])
     const[newTask,setnewTask]=useState("")
     const[ priority,setPriority]=useState("")

    return(<div>
        <h1 className="title">ToDo App</h1>

        <div className="list-container">
        { todoList.map((todoItem,i)=>{
           const{task,priority}=todoItem

           return <ToDoCard key={i} task={task} priority={priority}/> 
           
        })}
        </div>
      
      <div className=" text-container">
        <input type="text"
         className="add-input" 
         placeholder="Add New Task"
         value={newTask}
         onChange={(e)=>setnewTask(e.target.value)}     
         />
         

    <select  className="select-style" 
    value={ priority}
    onChange={(e)=>setPriority(e.target.value)} >

        <option value="none"> Priority</option>
        <option value="Shopping">Shopping</option>
        <option value="Learning">Learning</option>
        <option value="Payment">Payment</option>
        <option value="Work">Work</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
       
        
    </select>
        <img src={AddIcon}
         alt="Add" 
         className="icon-add"
         onClick={()=>{
            if(newTask===""){
                toast.error('Please Enter Task..')
                return
                                
            }
            setTodoList([...todoList,{task:newTask,priority:priority}])
            setnewTask("")
            setPriority("")
            toast.success('Task Added Succesfully..')
           
         }}
         />
      </div>
        <Toaster position="top-center"/>
    </div>)
   
}

export default Home