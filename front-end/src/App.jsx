import { useState } from 'react'
import TodoBody from './Compoanent/todoBody'
import ToAddItem from './Compoanent/ToAddItem'
import { BrowserRouter,Routes  ,Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <BrowserRouter > 

   <Routes> 
       <Route path='/' element={<SignIn/>} />
        <Route path='/login' element={<Login/>} />
       <Route path='/home' element={<TodoBody/>} />
   </Routes>

    </BrowserRouter>
  )
}

export default App
