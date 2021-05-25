import { Link } from 'react-router-dom'
import '../../styles/Profile.css'

const Profile = (props) => {
  return (
    <div className={props.type === 'suggestion' ? "profile profile--small" : "profile"}>
      <div className={props.type === 'suggestion' ? "profile__image profile__image--small" : "profile__image"}>
        <img src={props.avatar} alt=""/>
      </div>
      <div className="profile__name">
        <Link to="/profile">{props.username}</Link>
        {props.type === "suggestion" ? null : <span>{props.name}</span>}
      </div>
      <button className="profile__switch-button">
        {props.type === 'suggestion' ? 'Follow' : 'Switch'}
      </button>
    </div>
  )
}

export default Profile