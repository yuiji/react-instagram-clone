import { useSelector } from 'react-redux'
import Profile from './Profile'
import '../../styles/Suggestions.css'

const Suggestions = () => {
  const { suggestions } = useSelector(state => state.suggestions)

  return (
    <div className='suggestions'>
      <div className='suggestions__header'>
        <span>Suggestions For You</span>
        <button>See All</button>
      </div>
      {suggestions.map(suggestion => {
        return (
          <Profile
            key={suggestion.id}
            type='suggestion'
            avatar={suggestion.imageUrl}
            username={suggestion.username}
          />
        )
      })}
    </div>
  )
}

export default Suggestions
