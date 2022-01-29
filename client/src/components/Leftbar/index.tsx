import React from 'react';
import './style.scss'

export const Leftbar: React.FC = () => {
  return (
    <div className='leftbar'>
      <div className="leftbarContainer">
        <ul className='leftbarList'>
          <li className='leftbarList li'>Profile</li>
          <li className='leftbarList li'>News</li>
          <li className='leftbarList li'>Message</li>
          <li className='leftbarList li'>Friends</li>
          <li className='leftbarList li'>Settings</li>
        </ul>
      </div>
    </div>
  )
}