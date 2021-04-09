import Story from './Story'
import './StoryContainer.css'

const StoryBox = () => {

  return (
    <div className="story-container">
      <ul>
        <Story name="yalperg" />
        <Story name="yalperg" />
        <Story name="yalperg" />
        <Story name="yalperg" />
        <Story name="yalperg" />
      </ul>
    </div>
  )
}

export default StoryBox