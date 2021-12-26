import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Error } from './Pages/Error'
import { Login } from './Pages/Login'
import { Main } from './Pages/Main'
import { Profile } from './Pages/Profile'
import { Register } from './Pages/Register'

export default function App() {
  return (
    <Routes >
      <Route path="/" element={<Main/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes >
  )
}