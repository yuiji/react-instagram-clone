import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import '../../styles/Post.css'
import post from '../../assets/images/post.jpg'

const Post = (props) => {
  return (
    <div className="post">
      <PostHeader />
      <img src={props.img || post} alt="" />
      <PostFooter />
    </div>
  )
}

export default Post