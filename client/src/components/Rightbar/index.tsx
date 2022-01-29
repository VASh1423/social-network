import React from 'react';
import './style.scss'

export const Rightbar: React.FC = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarContainer">
        <h2 className='rightbarTitle'>Friends</h2>
        <div className='rightbarList'>
          <div className='rightbarList friend'>Friend Name 1</div>
          <div className='rightbarList friend'>Friend Name 2</div>
          <div className='rightbarList friend'>Friend Name 3</div>
          <div className='rightbarList friend'>Friend Name 4</div>
          <div className='rightbarList friend'>Friend Name 5</div>
        </div>
      </div>
    </div>
  )
}