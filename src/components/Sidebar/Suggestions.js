import React, { useState } from 'react'
import Profile from './Profile'
import '../../styles/Suggestions.css'
import { v4 as uuidv4 } from 'uuid';

const Suggestions = () => {

  const getRandomImage = () => {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  }

  const [suggestions] = useState([{
    id :uuidv4(),
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    id :uuidv4(),
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    id :uuidv4(),
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    id :uuidv4(),
    username: 'yalperg',
    imageUrl: getRandomImage()
  }, {
    id :uuidv4(),
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
            key={suggestion.id}
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