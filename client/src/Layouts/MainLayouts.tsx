import React from 'react'
import { Topbar } from '../components/Topbar'

const MainLayout: React.FC = ({children}) => {
  return (
    <>
      <Topbar/>
      {children}
    </>
  )
}

export default  MainLayout