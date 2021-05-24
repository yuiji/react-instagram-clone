import React,{ useContext }  from 'react'
import ProfilePost from '../ProfilePage/ProfilePost'
import { UserContext } from '../../contexts/UserContext'
import '../../styles/ProfilePosts.css'

const PorfilePosts = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="profile-posts">
      {user.posts.map(post => {
        return <ProfilePost key={post.id} url={post.imageUrl} />
      })}
    </div>
  )
}

export default PorfilePosts