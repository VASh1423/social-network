import React from 'react'
import { Topbar } from '../../components/Topbar'
import './style.scss'

const MainLayout: React.FC = ({children}) => {
  return (
    <>
      <Topbar/>
      {children}
    </>
  )
}

export default  MainLayout