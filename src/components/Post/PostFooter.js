import PostMenu from './PostMenu'
import Comment from './Comment'
import CommentInput from './CommentInput'
import '../../styles/PostFooter.css'

const PostFooter = () => {
  return (
    <div className="post__footer">
      <PostMenu />
      <span>134 likes</span>
      <Comment
      commentName="yalperg"
      comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium." />
      <Comment
      commentName="yalperg"
      comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium." />
      <Comment
      commentName="yalperg"
      comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium." />
      <CommentInput />
    </div>
  )
}

export default PostFooter