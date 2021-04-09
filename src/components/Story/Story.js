import './Story.css'
import avatar from '../../assets/images/avatar.jpg'

const Story = (props) => {

  return (
    <li className="story">
      <div className="story__image">
        <img src={props.img ? props.img : avatar} alt="" />
      </div>
      <span>{props.name}</span>
    </li>
  )
}

export default Story