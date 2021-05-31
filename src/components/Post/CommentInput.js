import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postActions } from '../../store/postSlice'
import Picker from 'emoji-picker-react'
import { ReactComponent as EmojiSvg } from '../../assets/icons/emoji.svg'
import '../../styles/CommentInput.css'

const CommentInput = ({ id }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const [comment, setComment] = useState('')
  const [openMenu, setOpenMenu] = useState(false)

  const submitHandler = e => {
    e.preventDefault()
    dispatch(
      postActions.addCommentHandler({
        id,
        comment: { name: user.username, comment: comment.trim() },
      })
    )
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

  const closeEmojiMenu = () => {
    openMenu && setOpenMenu(false)
  }

  return (
    <form className='comment-input__container' onSubmit={submitHandler}>
      <EmojiSvg onClick={toggleEmojiMenu} />
      <input
        type='text'
        placeholder='Add a comment...'
        value={comment}
        onChange={inputChangeHandler}
        onFocus={closeEmojiMenu}
      />
      <button type='submit' className={!comment ? 'disable' : null}>
        Post
      </button>
      {openMenu && (
        <div className='comment-input__emoji'>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </form>
  )
}

export default CommentInput
