import '../../styles/Story.css'
import avatar from '../../assets/images/avatar.jpg'

const Story = (props) => {
  return (
    <div className="story">
      <div className={props.story.newStory ? "story__image story__image--new" : "story__image"}>
        <img src={props.story.img ? props.story.img : avatar} alt="" />
      </div>
      <span>{props.story.name}</span>
    </div>
  )
}

export default Story