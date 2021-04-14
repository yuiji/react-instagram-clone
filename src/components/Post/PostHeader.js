import { ReactComponent as More } from '../../assets/icons/more.svg'
import avatar from '../../assets/images/avatar.jpg'
import '../../styles/PostHeader.css'

const PostHeader = () => {
  return (
    <div className="post__header">
      <div className="post__header__image">
        <img src={avatar} alt="" />
      </div>
      <div className="post__header__username">
        <a href="/">yalperg</a>
      </div>
      <More />
    </div>
  )
}

export default PostHeader