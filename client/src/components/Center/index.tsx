import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Post } from '../Post';
import { ArrowUpward } from '@material-ui/icons';
import './style.scss'

export const Center: React.FC = () => {
  const [posts, setPosts] = useState([])
  const [scroll, setScroll] = useState(0);
  const onScroll = () => setScroll(Math.round(window.scrollY))

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts/posts/1')
      setPosts(res.data.reverse())
    }

    fetchPosts()
  }, [])

  const handlerScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <>
      {scroll !== 0 && 
        <div className="centerTopContainer">
          <div className='centerIconToUp' onClick={handlerScroll}>
            <ArrowUpward style={{position: 'relative'}}/>
          </div>
        </div>
      }
      {posts.map((post, id) => <Post post={post} key={id}/>)}
    </>
  )
}