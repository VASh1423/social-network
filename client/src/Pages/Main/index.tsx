import React from 'react'
import { Center } from '../../components/Center'
import MainLayout from '../../Layouts/MainLayout'
import SidebarsLayout from '../../Layouts/SidebarsLayout'
import './style.scss'

export const Main: React.FC = () => {
  return (
    <MainLayout>
      <SidebarsLayout>
        <Center/>
      </SidebarsLayout>
    </MainLayout>
  )
}
