import { useSelector } from 'react-redux'
import ProfilePost from '../ProfilePage/ProfilePost'
import '../../styles/ProfilePosts.css'

const PorfilePosts = () => {
  const { user } = useSelector(state => state.user)

  return (
    <div className="profile-posts">
      {user.posts.map(post => {
        return <ProfilePost key={post.id} url={post.imageUrl} />
      })}
    </div>
  )
}

export default PorfilePosts