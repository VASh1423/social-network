import React from 'react'
import { Search, ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import './style.scss'

export const Topbar: React.FC = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <div className="logo">
          SOCIAL-NETWORK
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search/>
          <input placeholder='Найти...' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to='/' className="topbarLink"><span >Главная страница</span></Link>
          <Link to='/profile' className="topbarLink"><span className="topbarLink">Моя страница</span></Link>
        </div>
        <ExitToApp/>
      </div>
    </div>
  )
}