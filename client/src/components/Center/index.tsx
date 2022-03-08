import React from 'react';
import { Post } from '../Post';
import { PostCreator } from '../PostCreator';
import './style.scss'

export const Center: React.FC = () => {
  return (
    <>
      <PostCreator/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}