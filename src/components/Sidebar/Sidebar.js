import Profile from './Profile'
import Suggestions from './Suggestions'
import '../../styles/Sidebar.css'
import avatar from '../../assets/images/avatar.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile
      avatar={avatar}
      username="yalperg"
      name="Yunus Alper Göl" />
      <Suggestions />
    </div>
  )
}

export default Sidebar