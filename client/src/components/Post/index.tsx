import React, { useEffect, useState } from 'react'
import { FavoriteBorder } from '@material-ui/icons';
import {format} from 'timeago.js'
import './style.scss'
import axios from 'axios';

export const Post: React.FC<{post: any}> = ({post}) => {
  const [user, setUser]: any = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/api/user/' + post.userId)
      setUser(res.data)
    }

    fetchUser()
  }, [])
  return (
    <div className='centerPost'>
        <div className="centerPostContainer">
          <div className="centerPostInfo">
            <div className="centerPostInfo info">
              <img className='centerPostInfo info infoImg' src={user.avatar} alt="" />
              <div>
                <div className='centerPostInfo info name'>{user.username}</div>
                <div className='centerPostInfo info time'>{format(post.createdAt)}</div>
              </div>
            </div>
            <div className="centerPostInfo post">
              <div className="centerPostInfo post text">{post.description}</div>
              {post.img && <img className="centerPostInfo post img" src={post.img} alt="" /> }
            </div>
            <div className="centerPostInfo like">
              <FavoriteBorder/>
              <div>Like</div>
            </div>
          </div>
        </div>
      </div>
  )
}
