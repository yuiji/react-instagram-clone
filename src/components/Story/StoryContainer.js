import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import HorizontalScroll from 'react-scroll-horizontal'
import Story from './Story'
import '../../styles/StoryContainer.css'

const StoryBox = () => {

  const getRandomImage = () => {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  }

  const [stories] = useState([
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: true },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: true },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: true },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: true },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: true },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: false },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: false },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: false },
    {id: uuidv4(), name: "yalperg", img: getRandomImage(), newStory: false },
  ])
  return (
    <div className="story-container">
      <HorizontalScroll reverseScroll={true}>
          {stories.sort((a,b) => b.newStory - a.newStory).map(story => <Story story={story} key={story.id} />)}
      </HorizontalScroll>
    </div>
  )
}

export default StoryBox