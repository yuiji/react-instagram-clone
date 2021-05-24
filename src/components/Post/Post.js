import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import '../../styles/Post.css'

const Post = (props) => {
  return (
    <div className="post">
      <PostHeader 
      name={props.post.name}
      userImg={props.post.userImg} />
      <img src={props.post.postImg} alt="" />
      <PostFooter
      id={props.post.id}
      likes={props.post.likes}
      comments={props.post.comments} />
    </div>
  )
}

export default Post