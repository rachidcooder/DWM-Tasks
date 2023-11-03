import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillGoogleCircle} from 'react-icons/ai'
 import {loginRoute} from '../Routes/Routes.js'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
 const navigate=useNavigate();
 const OnLogin=async()=>{
    if(!password||!email){
         toast.error("some fields are empty !",toastOptions);
    }
     try{
      const res=await axios.post(loginRoute,{email,password});
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
  return (
    <div className='maw-w-[1640px] p-4 flex justify-center'>
      <div className=' bg-slate-100 flex p-2 flex-col rounded-md shadow-2xl' >
         <h1 className='text-xl font-bold text-center p-2'>Log in</h1>
        <div className='flex flex-col'>

              <input type='email' placeholder='Enter Email'
              className=' outline-none py-1 p-2  bg-slate-300 rounded-md m-1'
               value={email}
               onChange={(e)=>{setEmail(e.target.value)}}/>

              <input type='password' placeholder='Password'
                className=' outline-none py-1 p-2  bg-slate-300 rounded-md m-1'
                value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}/>
               
               <button className='rounded-3xl bg-slate-400 m-1 mt-2 py-1 hover:bg-slate-600'
                onClick={()=>{OnLogin()}}>
                 Login 
               </button>

                 <div className='flex flex-row'>
                 <button className='w-full rounded-xl font-semibold bg-slate-400 m-1 mt-2 py-1 hover:bg-slate-600'>
                   Guess 
                 </button>
                 <button className='w-full ps-3 flex  rounded-xl font-semibold text-center  bg-slate-400 m-1 mt-2 py-1 hover:bg-slate-600'>
                   Google   <AiFillGoogleCircle size={25} className='mx-2 text-center'/>
                 </button>
                </div>
                
               <span className='text-xl text-gray-600'>
                you don't have account ? <Link  className=" font-bold text-gray-900" to={'/'}>Sign in</Link>
               </span>
              
        </div>
      </div>
         <ToastContainer/>
    </div>
  )
}

export default Login
