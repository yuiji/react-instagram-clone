import { useState, useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { UserContext } from '../../contexts/UserContext'
import { ReactComponent as EmojiSvg } from '../../assets/icons/emoji.svg'
import '../../styles/CommentInput.css'


const CommentInput = ({ id }) => {
  const [comment, setComment] = useState('')
  const { addComment } = useContext(PostContext)
  const { user } = useContext(UserContext)

  const submitHandler = (e) => {
    e.preventDefault()
    addComment(id, {name: user.username, comment: comment})
    setComment('')
  }

  const inputChangeHandler = (e) => {
    setComment(e.target.value)
  }

  return (
    <form className='comment-input__container' onSubmit={submitHandler}>
      <EmojiSvg />
      <input type='text' placeholder='Add a comment...' value={comment} onChange={inputChangeHandler} />
      <button>Post</button>
    </form>
  )
}

export default CommentInput
