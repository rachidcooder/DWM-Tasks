import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {deleteTskRoute,updatTskeRoute} from '../Routes/Routes.js'

function TodoItem({list,setList}) {
const[ischeched,setIschecked]=useState(false);
 
  const OnDelete=async(id)=>{
  
 const token=localStorage.getItem('token');
 const config = { headers: {
    Authorization:`Bearer ${token}`,
  },
};

    if(token){
    try{
      const res = await axios.delete(`${deleteTskRoute}/${id}`,config);   
       setList(prevList => prevList.filter(item => item._id !== id));
        
    }catch(err){
      console.log(err);
    }
  }
}
const Donne=async(id)=>{
  
 const token=localStorage.getItem('token');
 const config = { headers: {
    Authorization:`Bearer ${token}`,
  },
};

    if(token){
    try{
      const res = await axios.post(`${updatTskeRoute}/${id}`,{isdone:true},config); 
       console.log(res);
        
    }catch(err){
      console.log(err);
    }
  }
}
   
  return (
    <div className='grid gap-3 py-2'>
      {list.map((item,i)=>{
 return (
  <div  key={i} >
     <div className='bg-gray-100 py-1 p-2 text-xl text-gray-900 border border-gray-800 flex items-center rounded-lg'>
            <input type='checkbox' 
            onChange={()=>{Donne(item._id)}}
            value={item.isdone?true:false}
            className=' p-1' 
            />
            <h1 className='text-xl px-2 w-full cursor-pointer'>{item.tasktext}</h1>
            <AiFillDelete className='' size={25} onClick={()=>{OnDelete(item._id)}}/>
        </div>
     </div>   
        )
      })

      }

     </div>
  )
}

export default TodoItem
