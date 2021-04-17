import '../../styles/ProfilePageMenu.css'
import avatar from '../../assets/images/avatar.jpg'

const ProfilePageMenu = () => {
  return (
    <div className="profile-page__menu">
      <img src={avatar} alt="" />
      <div className="menu__texts">
        <div className="menu__username">
          <span>yalperg</span>
          <button>Edit Profile</button>
        </div>
        <div className="menu__follow">
          <p><span>0 </span>posts</p>
          <p> <span>76 </span>followers</p>
          <p><span>77 </span>following</p>
        </div>
        <div className="menu__name">
          <span>Yunus Alper Göl</span>
          <p>DEU | Computer Science</p>
        </div>
      </div>
    </div>
  )
}


export default ProfilePageMenu