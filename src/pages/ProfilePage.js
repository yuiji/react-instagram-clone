import '../styles/ProfilePage.css'
import ProfilePageHeader from '../components/ProfilePage/ProfilePageHeader'
import Menu from '../components/ProfilePage/Menu'
import ProfilePosts from '../components/ProfilePage/ProfilePosts'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfilePageHeader />
      <Menu />
      <ProfilePosts />
    </div>
  )
}


export default ProfilePage