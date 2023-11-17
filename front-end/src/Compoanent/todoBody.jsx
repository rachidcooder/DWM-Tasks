import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TabBar from './TabBar';
import TodoItem from './TodoItem';
import ToAddItem from './ToAddItem';
import {getTskRoute} from '../Routes/Routes.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function todoBody() {
  const [istoAdd,setIsToadd]=useState(false);
  const[dayList,setDayList]=useState([]);
  const[weekList,setWeekList]=useState([]);
  const[monthList,setmonthList]=useState([]);
  const[addedTask,setAddedTask]=useState("0");
const navigat=useNavigate();


   useEffect(()=>{
      const getTasks=async()=>{
           try{
    const token=localStorage.getItem('token');
       
      if(token){
     const config = { headers: {
        Authorization: `Bearer ${token}`,
      },
       };
       
   const res = await axios.get(getTskRoute,config);
    const ls=res.data.tasks;

     setDayList(
       ls.filter((item)=>{
        return item.typetask==='day';
       })
     ) 
      setWeekList(
       ls.filter((item)=>{
        return item.typetask==='week';
       })
     ) 
      setmonthList(
       ls.filter((item)=>{
        return item.typetask==='month';
       })
     ) 

    }
    }catch(err){
      console.log(err);
     }
       }
getTasks();
   },[addedTask]);

 useEffect(()=>{
  const t=localStorage.getItem('token');
   if(!t)
      navigat('/login');
 },[])
   const tabs = [
    {
      id: 1,
      label: 'Day',
      content: (
        <div > 

         <TodoItem list={dayList} setList={setDayList}/>
        </div>
      ),
    },
    {
      id: 2,
      label: 'Week',
      content: (
          <div > 
          <TodoItem list={weekList} setList={setWeekList}/>
        </div>
      ),
    },
    {
      id: 3,
      label: 'Month',
      content: (
     <div > 
          <TodoItem list={monthList} setList={setmonthList}/>
        </div>
      ),
    },
  ];


  return (
    
 <div className='w-full p-4 flex justify-center'>
 <TabBar tabs={tabs} initialTab={1} setIsToadd={setIsToadd}/>

{istoAdd?   <div className='fixed h-screen w-full bg-black/80 top-0 left-0 z-10'>
     </div>:"" }

{ istoAdd? <div className='fixed top-0 left-0 w-full p-4 flex  justify-center z-10'> 
 <ToAddItem setIsToadd={setIsToadd} setAddedTask={setAddedTask}/>
 </div>:""}

</div>
  )
}

export default todoBody 
