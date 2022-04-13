import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOwnPosts } from '../../store/action/posts'
import { userData } from '../../store/action/user'
import { Button } from '../../Templates/Button'
import { Post } from '../Post'
import { PostCreator } from '../PostCreator'
import './style.scss'

export const Profile: React.FC = () => {
  const user = useSelector((state: any) => state.user.currentUser)
  let posts = useSelector((state: any) => state.posts.ownPosts)

  posts = posts.sort((p1:any, p2:any) => {
    const date1:any = new Date(p2.createdAt)
    const date2: any = new Date(p1.createdAt)
    return date1 - date2
  })
  
  const dispatch = useDispatch()

  const date: Date | any = new Date(user.dateOfBirth)
  const age = Math.floor((Date.now() - date)/31600800000)

  useEffect(() => {
    dispatch(userData())    
    dispatch(getOwnPosts())
  }, [])

  return (
    <>
      <div className='centerProfileTop'>
        <div className="centerProfileContainerTop">
          <img className='centerProfileContainerTop img' src={user.backgroundPhoto}/>
        </div>
        <div className="centerProfileMainImg">
          <img className='centerProfileMainImg img' src={user.avatar} alt="" />
        </div>
      </div>
      <div className="centerProfileInfo">
        <div className="centerProfileInfoBtns">
          <Button onClick={() => {}} color='rgb(23, 117, 238)' >+ Add</Button>
          <Button onClick={() => {}} color='rgb(23, 117, 238)' >Write a message</Button>
        </div>
        <div className="centerProfileInfoInfo">
          <h3 className='centerProfileInfoInfo name'>{user.username}</h3>
          <div className='centerProfileInfoInfo info'>
            <p>Country: <b>{user.country}</b></p>
            <p>City: <b>{user.city}</b></p>
            <p>Age: <b>{age ? age : ''}</b></p>
            <p>Date of birth: <b>{user.dateOfBirth}</b></p>
          </div>
        </div>
      </div>
      <PostCreator/>
      {posts.map((p: any, id: number) => <Post post={p} key={id}/>)}
    </>
  )
}
