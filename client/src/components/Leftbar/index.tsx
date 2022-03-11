import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

export const Leftbar: React.FC = () => {
  return (
    <div className='leftbar'>
      <div className="leftbarContainer">
        <ul className='leftbarList'>
          <Link to={'/'}><li className='leftbarList li'>News</li></Link>
          <Link to={'/profile'}><li className='leftbarList li'>Profile</li></Link>
          <li className='leftbarList li'>Message</li>
          <li className='leftbarList li'>Friends</li>
          <li className='leftbarList li'>Settings</li>
        </ul>
      </div>
    </div>
  )
}