import React from 'react'
import PasswordGen from './components/PasswordGen'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
     <Outlet/>
    </>
  )
}

export default App