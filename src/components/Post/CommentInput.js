import { useState, useContext } from 'react'
import Picker from 'emoji-picker-react'
import { PostContext } from '../../contexts/PostContext'
import { UserContext } from '../../contexts/UserContext'
import { ReactComponent as EmojiSvg } from '../../assets/icons/emoji.svg'
import '../../styles/CommentInput.css'

const CommentInput = ({ id }) => {
  const [comment, setComment] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const { addComment } = useContext(PostContext)
  const { user } = useContext(UserContext)

  const submitHandler = e => {
    e.preventDefault()
    addComment(id, { name: user.username, comment: comment.trim() })
    setComment('')
  }

  const inputChangeHandler = e => {
    setComment(e.target.value)
  }

  const onEmojiClick = (event, emojiObject) => {
    setComment(comment + emojiObject.emoji)
  }

  const toggleEmojiMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <form className='comment-input__container' onSubmit={submitHandler}>
      <EmojiSvg onClick={toggleEmojiMenu} />
      <input
        type='text'
        placeholder='Add a comment...'
        value={comment}
        onChange={inputChangeHandler}
      />
      <button type='submit' className={!comment ? 'disable': null}>Post</button>
      {openMenu && (
        <div className='comment-input__emoji'>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </form>
  )
}

export default CommentInput
