
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtask, clearalltask, deletetask } from './Features/TODOslice';


function App() {
const [newtask , setnewtask] = useState("");
const dispatch = useDispatch();
const task = useSelector((state)=> state.TODO.tasks);

const handleaddtask = (newtask)=>{
  if(newtask.trim() === "") return;
  dispatch(addtask(newtask))
  setnewtask("");
}

const handleClear = ()=>{
  dispatch(clearalltask())
}

const handledeletetask = (id)=>{
  dispatch(deletetask(id))
}
  return (
    <>
      <input type='text' placeholder='Enter teh new task' value={newtask} onChange={(e)=> setnewtask(e.target.value)}></input>
      <button onClick={()=> handleaddtask(newtask)}>Add task</button>
      <button onClick={handleClear}>Clear all task</button>
      <div>
        <ul>
          {task.map((t)=>(
           <div key={t.id}>
             <li>{t.text}-{t.id}</li>
             <button onClick={()=> handledeletetask(t.id)}>Delete task</button>
           </div>
            
          ))}
          
        </ul>

      </div>
    </>
  )
}

export default App
