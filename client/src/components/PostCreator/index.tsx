import React, { useState } from 'react'
import { Button } from '../../Templates/Button';
import { Input } from '../../Templates/Input';
import { AddAPhoto, MusicNote } from '@material-ui/icons';
import './style.scss'

export const PostCreator = () => {
  const [postText, setPostText] = useState('')

  return (
    <div className='postCreator'>
      <Input value={postText} setValue={setPostText} type='text' placeholder="What's new?"/>
      <AddAPhoto style={{color: 'gray', marginLeft: '10px'}}/>
      <MusicNote style={{color: 'gray', marginLeft: '10px'}}/>
      <Button onClick={() => {}} color='rgb(23, 117, 238)'>Send</Button>
    </div>
  )
}
