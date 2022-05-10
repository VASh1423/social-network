import React, { useEffect, useState } from 'react'
import { FavoriteBorder } from '@material-ui/icons';
import {format} from 'timeago.js'
import './style.scss'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const Post: React.FC<{post: any}> = ({post}) => {
  const [user, setUser]: any = useState({})
  const [changeColor, setChangeColor] = useState(false)
  const currentUser = useSelector((state: any) => state.user.currentUser)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/api/user/' + post.userId)
      setUser(res.data)
      setChangeColor(post.likes.includes(currentUser._id))
    }

    fetchUser()
  }, [])

  const handleLike = () => {
    const likePost = async () => {    
      try {
        const changedPost = {
          id: post._id,
          userId: currentUser._id
        }
        await axios.put('/api/posts/like', changedPost)

        setChangeColor(!changeColor)
      } catch (error) {
        console.log(error);
      }
    }

    likePost()
  }

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
            <div className="centerPostInfo like" onClick={handleLike}>
              <FavoriteBorder style={{fill: changeColor ? 'tomato' : ''}}/>
              <div>Like</div>
            </div>
          </div>
        </div>
      </div>
  )
}
