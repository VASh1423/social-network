import React from 'react'
import { Leftbar } from '../../components/Leftbar'
import { Rightbar } from '../../components/Rightbar'
import './style.scss'

const SidebarsLayout: React.FC = ({children}) => {
  return (
    <>
      <div className='mainContainer'>
        <div className='Leftbar'>
          <Leftbar/>
        </div>
        <div className='Center'>
          {children}
        </div>
        <div className='Rightbar'>
          <Rightbar/>
        </div>
      </div>
    </>
  )
}

export default  SidebarsLayout