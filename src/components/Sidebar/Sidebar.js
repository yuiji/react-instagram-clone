
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Profile from './Profile'
import Suggestions from './Suggestions'
import '../../styles/Sidebar.css'

const Sidebar = () => {
  const { user } = useContext(UserContext)

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