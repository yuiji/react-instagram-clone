import { useSelector } from 'react-redux'
import Profile from './Profile'
import Suggestions from './Suggestions'
import '../../styles/Sidebar.css'

const Sidebar = () => {
  const { user } = useSelector(state => state.user)

  return (
    <div className="sidebar">
      <Profile
      avatar={user.photo}
      username={user.username}
      name={user.name} />
      <Suggestions />
    </div>
  )
}

export default Sidebar