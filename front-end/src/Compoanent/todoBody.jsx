import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TabBar from './TabBar';
import TodoItem from './TodoItem';
import ToAddItem from './ToAddItem';
import {getTskRoute} from '../Routes/Routes.js'
import axios from 'axios';
function todoBody() {
   const [istoAdd,setIsToadd]=useState(false);
     const [dataList, setDataList] = useState([]); 
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
        setDataList(res.data.tasks);
    }
    }catch(err){
      console.log(err);
     }
       }
  
getTasks();
   },[]);

  

  //   datList=[
  //   {
  //      id:"1d",
  //     ischeched:false,
  //     task :"viste a friend",
  //   },
  //     {
  //      id:"2d",
  //     ischeched:false,
  //     task :"do some exercises",
  //   },
  //     {
  //      id:"3d",
  //     ischeched:false,
  //     task :"sport",
  //   },
  //     {
  //      id:"4d",
  //     ischeched:true,
  //     task :"read",
  //   }
    
  //  ];
   

   const tabs = [
    {
      id: 1,
      label: 'Day',
      content: (
        <div > 
          <TodoItem list={dataList} setList={setDataList}/>
        </div>
      ),
    },
    {
      id: 2,
      label: 'Week',
      content: (
          <div > 
          <TodoItem list={dataList} setList={setDataList}/>
        </div>
      ),
    },
    {
      id: 3,
      label: 'Month',
      content: (
     <div > 
          <TodoItem list={dataList} setList={setDataList}/>
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
 <ToAddItem setIsToadd={setIsToadd}/>
 </div>:""}

</div>
  )
}

export default todoBody 
