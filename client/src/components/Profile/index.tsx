import React from 'react'
import { Button } from '../../Templates/Button'
import { Post } from '../Post'
import { PostCreator } from '../PostCreator'
import './style.scss'

export const Profile: React.FC = () => {
  return (
    <>
      <div className='centerProfileTop'>
        <div className="centerProfileContainerTop">
          <img className='centerProfileContainerTop img' src='https://s1.1zoom.ru/b5050/612/Sunrises_and_sunsets_Forests_Scenery_Grass_Rays_of_587227_3840x2160.jpg'/>
        </div>
        <div className="centerProfileMainImg">
          <img className='centerProfileMainImg img' src="https://cdn.pixabay.com/photo/2016/11/29/09/42/camera-1868773_1280.jpg" alt="" />
        </div>
      </div>
      <div className="centerProfileInfo">
        <div className="centerProfileInfoBtns">
          <Button onClick={() => {}} color='rgb(23, 117, 238)' >+ Add</Button>
          <Button onClick={() => {}} color='rgb(23, 117, 238)' >Write a message</Button>
        </div>
        <div className="centerProfileInfoInfo">
          <h3 className='centerProfileInfoInfo name'>Full Name</h3>
          <div className='centerProfileInfoInfo info'>
            <p>Country: <b>USA</b></p>
            <p>City: <b>Chicago</b></p>
            <p>Age: <b>25</b></p>
            <p>Date of birth: <b>03.12.1995</b></p>
          </div>
        </div>
      </div>
      <PostCreator/>
      <Post/>
    </>
  )
}
