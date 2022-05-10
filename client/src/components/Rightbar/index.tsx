import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';;
import { RightbarList } from './RightbarList';
import './style.scss'

export const Rightbar: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser)
  const [friends, setFriends] = useState<any[]>([])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friends = await axios.get('/api/user/friends/'+currentUser._id)
        setFriends(friends.data);
      } catch (error) {
        console.log(error);
      }
    }

    if(currentUser._id){
      getFriends()
    }
  }, [currentUser])
  
  return (
    <div className='rightbar'>
      <div className="rightbarContainer">
        <h2 className='rightbarTitle'>Friends</h2>
        {friends.map((friend, id) => (
          <RightbarList key={id} name={friend.username}/>
        ))}
      </div>
    </div>
  )
}