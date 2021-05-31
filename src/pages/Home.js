import { useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar'
import StoryContainer from '../components/Story/StoryContainer'
import Post from '../components/Post/Post'
import '../styles/Home.css'

const Home = () => {
  const { posts } = useSelector(state => state.posts)

  return (
    <div className="home">
      <div className="home__container">
        <StoryContainer />
        {posts.map(post => {
          return <Post key={post.id} post={post} />
        })}
        
      </div>
      <Sidebar />
    </div>
  )
}

export default Home