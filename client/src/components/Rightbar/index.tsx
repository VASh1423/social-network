import React from 'react';
import { RightbarList } from './RightbarList';
import './style.scss'

export const Rightbar: React.FC = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarContainer">
        <h2 className='rightbarTitle'>Friends</h2>
        <RightbarList/>
        <RightbarList/>
        <RightbarList/>
        <RightbarList/>
        <RightbarList/>
      </div>
    </div>
  )
}