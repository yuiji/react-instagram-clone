import '../../styles/Profile.css'
import avatar from '../../assets/images/avatar.jpg'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src={avatar} alt=""/>
      </div>
      <div className="profile__name">
        <a href="/">yalperg</a>
        <span>Yunus Alper Göl</span>
      </div>
    </div>
  )
}

export default Profile