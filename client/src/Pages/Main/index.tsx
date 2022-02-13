import React from 'react'
import { Center } from '../../components/Center'
import { Leftbar } from '../../components/Leftbar'
import { Rightbar } from '../../components/Rightbar'
import MainLayout from '../../Layouts/MainLayouts'
import './style.scss'

export const Main: React.FC = () => {
  return (
    <MainLayout>
      <div className='mainContainer'>
        <div className='Leftbar'>
          <Leftbar/>
        </div>
        <div className='Center'>
          <Center/>
        </div>
        <div className='Rightbar'>
          <Rightbar/>
        </div>
      </div>
    </MainLayout>
  )
}
