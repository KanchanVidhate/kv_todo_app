import "./Home.css"
import AddIcon from "../Home/img/add.png"
import ToDoCard from "./../../components/ToDoCard/ToDoCard"
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";


function Home(){

    const[ todoList,setTodoList]=useState([])
     const[newTask,setnewTask]=useState("")
     const[ priority,setPriority]=useState("")
     
     useEffect(()=>{
        const savedTodoList=localStorage.getItem(todoList)
         
        if(savedTodoList){
           setTodoList(JSON.parse(savedTodoList))
        }
    },[])
    
  
     useEffect(()=>{
    if(todoList.length===0) return
  
    localStorage.setItem(todoList,JSON.stringify(todoList))
     }, [todoList])


     function deleteItem(index){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
        }).then ((result)=>{
            if(!result.isConfirmed){
                return
            }
            
            const newTodoList=todoList.filter((item,i)=>{
            
                if(i ==index){
                   return false
                } 
                else{
                 return true
                }
              })
              setTodoList(newTodoList) 
        })
    }

       
     return (<div>
        <h1 className="title">ToDo App</h1>

        <div className="list-container">
        { todoList.map((todoItem,i)=>{
           const{task,priority}=todoItem

           return <ToDoCard key={i}index={i} task={task} priority={priority}
           deleteItem={deleteItem}
           /> 
           
        })}
        {
            todoList.length ===0?
            <p style={
                {
                    color:"white",
                    fontSize:"10px",
                    marginTop:"15px",
                    marginLeft:"15px",
                    fontFamily:"cursive"
                }
            }>No task added , Please add New Task</p>
            :
            null
            }
        
        
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
        </div>)}

export default Home