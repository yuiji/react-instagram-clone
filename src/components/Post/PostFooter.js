import PostMenu from './PostMenu'
import Comment from './Comment'
import CommentInput from './CommentInput'
import '../../styles/PostFooter.css'

const PostFooter = props => {
  return (
    <div className='post__footer'>
      <PostMenu id={props.id} />
      <span>{props.likes} likes</span>
      {props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            commentName={comment.commentName}
            comment={comment.comment}
          />
        )
      })}
      <CommentInput id={props.id} />
    </div>
  )
}

export default PostFooter
