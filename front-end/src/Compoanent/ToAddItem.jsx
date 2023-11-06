import axios from 'axios';
import React, { useState } from 'react'
import {FaWindowClose} from 'react-icons/fa'
import {AddTskRoute} from '../Routes/Routes.js'

function ToAddItem({setIsToadd,setAddedTask}) {
  const[tasktext,setTaslText]=useState("");
  const[typetask,setTaskType]=useState("day");

  const onAddtask=async()=>{
     setIsToadd(false)
    const token=localStorage.getItem('token');
 const config = { headers: {
    Authorization: `Bearer ${token}`,
  },
};
     if(token){
    try{
      const res= await axios.post(AddTskRoute,{
            tasktext,typetask
      },config);

       if(res){
        setAddedTask("1");
       }

    }catch(err){
      console.log(err);
    }
  }
  }

  return (
   
       <div className='p-2  bg-slate-100 w-[350px] rounded-md shadow-2xl'> 
       <div className='p-2 flex justify-between items-center'>
         <h1 className=' text-2xl font-bold text-center'>Add Task</h1>
         <FaWindowClose   size={30} className='' onClick={()=>setIsToadd(false)}/>
       </div>

        <input  type='text' className=' w-full text-xl outline-none py-1 bg-slate-200 rounded-lg px-2 '
         placeholder='Task ...'
         value={tasktext}
         onChange={(e)=>{setTaslText(e.target.value)}}
         />
       <div className='py-2 p-2 flex flex-row '>
        <label className='text-xl text-gray-600 p-1'>This Task For : </label>
         <select className=' bg-slate-200 text-xl rounded-md outline-none  py-1 mx-2'
         onChange={(e)=>{setTaskType(e.target.value)}}
         >
           <option>day</option>
           <option>week</option>
           <option>month</option>
         </select>
       </div>
       <button
         onClick={()=>{onAddtask()} }
         className='mt-3 w-full text-xl font-semibold text-center rounded-full bg-slate-400 hover:bg-slate-500 py-1'>
            add</button>
      
       </div>
 
  )
}

export default ToAddItem
