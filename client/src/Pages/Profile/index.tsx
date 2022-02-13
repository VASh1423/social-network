import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import SidebarsLayout from '../../Layouts/SidebarsLayout'
import { Profile as ProfileCenter } from '../../components/Profile'
import './style.scss'

export const Profile: React.FC = () => {
  return (
    <MainLayout>
      <SidebarsLayout>
        <ProfileCenter/>
      </SidebarsLayout>
    </MainLayout>
  )
}
