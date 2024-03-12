import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import Login from './component/register/Login';
import Register from './component/register/Register';
import Add from './component/CURD/Add'
import Update from './component/CURD/Update'
import Delete from './component/CURD/Delete'


function App() {

  return (
    <div className='App'>
      {/* <Link to={"/login"}>  <button  className='btn btn-info'>login</button></Link> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/add' element={<Add />} ></Route>
          <Route path='/update/:id' element={<Update />} ></Route>
          {/* <Route path='/delete' element={< Delete/>} ></Route> */}


        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
