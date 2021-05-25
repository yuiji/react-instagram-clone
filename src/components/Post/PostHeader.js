import { Link } from 'react-router-dom'
import { ReactComponent as More } from '../../assets/icons/more.svg'
import '../../styles/PostHeader.css'

const PostHeader = (props) => {
  return (
    <div className="post__header">
      <div className="post__header__image">
        <img src={props.avatar} alt="" />
      </div>
      <div className="post__header__username">
        <Link to="/profile">{props.name}</Link>
      </div>
      <More />
    </div>
  )
}

export default PostHeader