import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillGoogleCircle} from 'react-icons/ai'
 import {signInRoute} from '../Routes/Routes.js'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'

function SignIn() {
   const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[isPwdshowed,setPwdShow]=useState(false);

  const navigate=useNavigate();

    const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(()=>{
    const token=localStorage.getItem('token');
     if(token) navigate('/home');
  },[]);


  function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
   const onSignIn= async()=>{

     if(!username||!password||!email){
      // Toast 
      toast.error("some fields are empty !",toastOptions);
      
    }
     try{
      const res=await axios.post(signInRoute,{username,email,password});
         console.log(res);
          if(res.data._id){
            toast.success("Sign in successfuly");
            localStorage.setItem('token',res.data.token);
            navigate('/home');
          }

     }catch(err){
      console.log(err);
     }
   }
  const RegisterGusse=()=>{
    setUsername(`user${getRandomInt(0,999)}`);
    setPassword("test123");
    setEmail(`example${getRandomInt(0,999)}@gmail.com`);
     setPwdShow(true);

  }
    
  return (
       <div className='maw-w-[1640px] p-4 flex justify-center pt-12'>
      <div className=' bg-slate-100 flex p-2 flex-col rounded-md shadow-2xl' >
         <h1 className='text-xl font-bold text-center p-2'>Sign in</h1>
        <div className='flex flex-col'>
           <input type='text' placeholder='Enter Username'
              className=' outline-none py-1 p-2 bg-slate-300 rounded-md m-1'
                value={username}
               onChange={(e)=>{setUsername(e.target.value)}}/>

              <input type='email' placeholder='Enter Email'
              className=' outline-none py-1 p-2  bg-slate-300 rounded-md m-1'
                value={email}
               onChange={(e)=>{setEmail(e.target.value)}}/>

              <input  placeholder='Password'
                className= ' outline-none py-1 p-2  bg-slate-300 rounded-md m-1'
                  type={
                        isPwdshowed ? "text" : "password"
                    }
                 value={password}
                 
                 onChange={(e)=>{setPassword(e.target.value)}}/>
               
               <button className='rounded-xl font-semibold bg-slate-400 m-1 mt-2 py-1 hover:bg-slate-600'
                 onClick={()=>{onSignIn()}}>
                 Sgin in 
               </button>


               <div className='flex flex-row'>
                 <button className='w-full rounded-xl font-semibold bg-slate-400 m-1 mt-2 py-1 hover:bg-slate-600'
                  onClick={()=>{RegisterGusse()}}>
                   Guess 
                 </button>
                 <button className='w-full ps-3 flex  rounded-xl font-semibold text-center  bg-slate-400 m-1 mt-2 py-1 hover:bg-slate-600'>
                   Google   <AiFillGoogleCircle size={25} className='mx-2 text-center'/>
                 </button>
                </div>


               <span className='text-xl text-gray-600'>
                you have alredy  account ? <Link className=" font-bold text-gray-900" to={'/login'}>Login</Link>
               </span>
        </div>
      </div>
         <ToastContainer/>
    </div>
  )
}

export default SignIn
