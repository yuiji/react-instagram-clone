import '../../styles/CommentInput.css'
import { ReactComponent as EmojiSvg } from '../../assets/icons/emoji.svg'

const CommentInput = () => {
  return (
    <div className="comment-input__container">
      <EmojiSvg />
      <input type="text" placeholder="Add a comment..."/>
      <button>Post</button>
    </div>
  )
}

export default CommentInput