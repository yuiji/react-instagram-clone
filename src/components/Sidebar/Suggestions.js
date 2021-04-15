import React, { useState } from 'react'
import Profile from './Profile'
import '../../styles/Suggestions.css'

const Suggestions = () => {

  const getRandomImage = () => {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  }

  const [suggestions] = useState([{
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    username: 'yalperg',
    imageUrl: getRandomImage()
  }])

  return (
    <div className="suggestions">
      <div className="suggestions__header">
        <span>Suggestions For You</span>
        <button>See All</button>
      </div>
      {suggestions.map(suggestion => {
        return (
          <Profile
            type="suggestion"
            imageUrl={suggestion.imageUrl}
            username={suggestion.username}
          />
        )
      })}
    </div>
  )
}

export default Suggestions