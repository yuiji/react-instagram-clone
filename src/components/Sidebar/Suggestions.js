import React, { useContext } from 'react'
import Profile from './Profile'
import '../../styles/Suggestions.css'
import { SuggestionsContext } from '../../contexts/SuggestionsContext'

const Suggestions = () => {
  const { suggestions } = useContext(SuggestionsContext)

  return (
    <div className="suggestions">
      <div className="suggestions__header">
        <span>Suggestions For You</span>
        <button>See All</button>
      </div>
      {suggestions.map(suggestion => {
        return (
          <Profile
            key={suggestion.id}
            type="suggestion"
            avatar={suggestion.imageUrl}
            username={suggestion.username}
          />
        )
      })}
    </div>
  )
}

export default Suggestions