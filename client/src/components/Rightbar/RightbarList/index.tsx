import React from 'react'
import './style.scss'

export const RightbarList: React.FC<{name: string}> = ({name}) => {
  return (
    <div className='rightbarList'>
      <div className='rightbarList friend'>
        <img className='rightbarList img' src="https://cdn.pixabay.com/photo/2016/11/29/09/42/camera-1868773_1280.jpg" alt="" />
        <div>
          <div className='rightbarList name'>{name}</div>
          <div className='rightbarList message'>Write a message</div>
        </div>
      </div>
    </div>
  )
}