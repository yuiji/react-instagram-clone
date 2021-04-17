import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProfilePost from '../ProfilePage/ProfilePost'
import '../../styles/ProfilePosts.css'

const PorfilePosts = () => {
  const [posts] = useState([{
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  {
    id: uuidv4(),
    imageUrl: 'https://source.unsplash.com/random'
  },
  ])
  return (
    <div className="profile-posts">
      {posts.map(post => {
        return <ProfilePost key={post.id} url={post.imageUrl} />
      })}
    </div>
  )
}

export default PorfilePosts