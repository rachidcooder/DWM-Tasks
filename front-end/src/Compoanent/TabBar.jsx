import React, { useState } from 'react';
import {MdAddCircle} from 'react-icons/md'
import {IoMdAdd} from 'react-icons/io'

const TabBar = ({ tabs, initialTab ,setIsToadd}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div >
      <div className='flex flex-col text-center  w-[300px]  bg-slate-100 shadow-lg rounded-lg'>
        <h1 className='text-center text-2xl font-bold py-3'>DWM-Tasks</h1>
      <ul className="tab-bar flex items-center justify-between rounded-lg ">
        {tabs.map((tab) => (
          <li 
            key={tab.id} 
            className={`cursor-pointer w-full bg-slate-300 py-1 rounded-lg mx-1 font-semibold ${tab.id === activeTab ? 'active  bg-slate-500' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    
     <button 
        onClick={()=>{setIsToadd(true)}}
         className='fixed m-4 bottom-0 right-0 p-2  text-center bg-gray-950 rounded-full  text-2xl font-bold '>
          <IoMdAdd size={40} className=' text-gray-50'/>
         </button>
      
     
    </div>
  
  
    


    </div>
  );
};

export default TabBar;
