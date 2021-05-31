import { useSelector } from 'react-redux'

import '../../styles/ProfilePageHeader.css'

const ProfilePageHeader = () => {
  const { user } = useSelector(state => state.user)

  return (
    <div className="profile-page__header">
      <img src={user.photo} alt="" />
      <div className="menu__texts">
        <div className="menu__username">
          <span>{user.username}</span>
          <button>Edit Profile</button>
        </div>
        <div className="menu__follow">
          <p><span>{user.posts.length} </span>posts</p>
          <p> <span>{user.followers.length} </span>followers</p>
          <p><span>{user.following.length} </span>following</p>
        </div>
        <div className="menu__name">
          <span>{user.name}</span>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  )
}


export default ProfilePageHeader