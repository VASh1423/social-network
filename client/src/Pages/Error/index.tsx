import React from 'react'
import MainLayout from '../../Layouts/MainLayouts'
import './style.scss'

export const Error: React.FC = () => {
  return (
    <MainLayout>
      <div className='errorPage'>Error 404</div>
    </MainLayout>
  )
}
