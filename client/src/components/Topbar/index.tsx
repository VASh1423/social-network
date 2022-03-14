import React from 'react'
import { Search, ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './style.scss'
import { logout } from '../../store/reducers/userReducer'

export const Topbar: React.FC = () => {
  const dispatch = useDispatch()

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
        <div className='topbarRight exit'>
          <ExitToApp onClick={() => dispatch(logout())}/>
        </div>
      </div>
    </div>
  )
}