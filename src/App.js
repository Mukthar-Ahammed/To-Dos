import './App.css';
import { useState } from 'react';
function App() {
  const[todos,setTodos]=useState([])
  const[todo,setTodo]=useState('')
  return (
    <div className="App">
      <div className="Header">
        <h1>Effortless To-Dos</h1>
      </div>
      <div className='input'>
        <input value={todo} onChange={(e)=>{setTodo(e.target.value)}} type='text' placeholder=' What to do........'/>
        <i onClick={()=>{setTodos([...todos,{id:Date.now(),text:todo,status:false}])}} className="fa-solid fa-pen"></i>
        <i onClick={()=>{setTodos([])}} class="fa-solid fa-x"></i>
      
        
        
      </div>
      <div className='Display'>
  
  {todos.map((obj)=>{
    return(
      <div className='Display2'>
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setTodos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
                return obj2
            }))
          }} type='checkbox'/>
          <p>{obj.text}</p>
          <i 
  onClick={() => {
    setTodos(todos.filter(obj2 => obj2.id !== obj.id)); 
  }} 
  className="fa-solid fa-trash"/>
      </div>
    )
        })}

{todos.map((obj)=>{
        if(obj.status){
          return(
            <div className='Accomplished'>
          <p>{obj.text}  <i class="fa-solid fa-check"></i></p>
          </div>
        )
        }return null
      })}
      </div>
    </div>
  );
}

export default App;
