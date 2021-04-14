import Profile from './Profile'
import '../../styles/Suggestions.css'

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__header">
        <span>Suggestions For You</span>
        <button>See All</button>
      </div>
      <Profile
      type="suggestion"
      username="yalperg"
       />
      <Profile
      type="suggestion"
      username="yalperg"
       />
      <Profile
      type="suggestion"
      username="yalperg"
       />
      <Profile
      type="suggestion"
      username="yalperg"
      />
    </div>
  )
}

export default Suggestions