import React from 'react';
import { PostCreator } from '../PostCreator';
import './style.scss'

export const Center: React.FC = () => {
  return (
    <>
      <PostCreator/>
      <div className='center'>
        <div className="centerContainer">
          Main page
        </div>
      </div>
    </>
  )
}