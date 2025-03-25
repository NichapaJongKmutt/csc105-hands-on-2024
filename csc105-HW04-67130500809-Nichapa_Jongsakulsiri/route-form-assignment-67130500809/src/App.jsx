import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'


function App() {
 
  return (
    <>
    <NavBar/>
     <Outlet/>
    </>
  )
}

export default App
