import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import SidebarsLayout from '../../Layouts/SidebarsLayout'
import './style.scss'

export const Profile: React.FC = () => {
  return (
    <MainLayout>
      <SidebarsLayout>
        Profile
      </SidebarsLayout>
    </MainLayout>
  )
}
