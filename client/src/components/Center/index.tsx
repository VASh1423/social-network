import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Post } from '../Post';
import { PostCreator } from '../PostCreator';
import './style.scss'

export const Center: React.FC = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts/posts/1')
      setPosts(res.data.reverse())
    }

    fetchPosts()
  }, [])
  return (
    <>
      <PostCreator/>
      {posts.map((post, id) => <Post post={post} key={id}/>)}
    </>
  )
}