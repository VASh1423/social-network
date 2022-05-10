import React, { useEffect, useState } from 'react'
import { Button } from '../../Templates/Button';
import { Input } from '../../Templates/Input';
import { AddAPhoto, MusicNote } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'
import axios from 'axios';
import { postOwnPosts } from '../../store/action/posts';

export const PostCreator = () => {
  const user = useSelector((state: any) => state.user.currentUser)
  
  const [postText, setPostText] = useState('')

  const dispatch = useDispatch()

  const sendPost = async () => {
    const newPost = {
      userId: user._id,
      description: postText
    }
    
    dispatch(postOwnPosts(newPost))

    setPostText('')

    // try {
    //   await axios.post('api/posts', newPost)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className='postCreator'>
      <Input value={postText} setValue={setPostText} type='text' placeholder="What's new?"/>
      <AddAPhoto style={{color: 'gray', marginLeft: '10px', cursor: 'pointer'}}/>
      <MusicNote style={{color: 'gray', marginLeft: '10px', cursor: 'pointer'}}/>
      <Button onClick={sendPost} color='rgb(23, 117, 238)'>Send</Button>
    </div>
  )
}
