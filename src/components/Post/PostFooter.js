import PostMenu from './PostMenu'
import Comment from './Comment'
import CommentInput from './CommentInput'
import '../../styles/PostFooter.css'

const PostFooter = (props) => {
  console.log(props.comments)
  return (
    <div className="post__footer">
      <PostMenu />
      <span>{props.likes} likes</span>
      {props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            commentName={comment.commentName}
            comment={comment.comment} />
        )
      })}
      <CommentInput />
    </div>
  )
}

export default PostFooter