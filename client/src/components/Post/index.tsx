import React from 'react'
import { FavoriteBorder } from '@material-ui/icons';
import './style.scss'

export const Post: React.FC = () => {
  return (
    <div className='centerPost'>
        <div className="centerPostContainer">
          <div className="centerPostInfo">
            <div className="centerPostInfo info">
              <img className='centerPostInfo info infoImg' src="https://cdn.pixabay.com/photo/2016/11/29/09/42/camera-1868773_1280.jpg" alt="" />
              <div>
                <div className='centerPostInfo info name'>Friend Name 1</div>
                <div className='centerPostInfo info time'>2 days ago</div>
              </div>
            </div>
            <div className="centerPostInfo post">
              <img className="centerPostInfo post img" src="https://cdn.pixabay.com/photo/2016/11/29/09/42/camera-1868773_1280.jpg" alt="" />
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
