import React, { useState } from 'react'
import Story from './Story'
import './StoryContainer.css'
import avatar from '../../assets/images/avatar.jpg'

const StoryBox = () => {
  const [stories, setStories] = useState([
    { name: "yalperg", img: avatar, newStory: true },
    { name: "yalperg2", img: avatar, newStory: false },
    { name: "yalperg3", img: avatar, newStory: false },
  ])
  return (
    <div className="story-container">
      <ul>
        {stories.map(story => <Story story={story} />)}
      </ul>
    </div>
  )
}

export default StoryBox