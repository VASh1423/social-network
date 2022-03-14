import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from "react-router-dom"
import { Error } from './Pages/Error'
import { Login } from './Pages/Login'
import { Main } from './Pages/Main'
import { Profile } from './Pages/Profile'
import { Register } from './Pages/Register'
import { auth } from './store/action/user'

export default function App() {
  const isAuth = useSelector((state: any) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <Routes >
      <Route path="/" element={isAuth ? <Main/> : <Login/>}/>
      <Route path="/profile" element={isAuth ? <Profile/> : <Login/>}/>
      <Route path="/login" element={isAuth ? <Navigate replace to="/" /> : <Login/>}/>
      <Route path="/register" element={isAuth ? <Navigate replace to="/" /> : <Register/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes >
  )
}