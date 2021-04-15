import '../../styles/Comment.css'

const Comment = (props) => {
  return (
    <div className="comment__container">
      <div className="comment__container__name">{props.commentName}</div>
      <div className="comment__container_comment">{props.comment}</div>
    </div>
  )
}

export default Comment