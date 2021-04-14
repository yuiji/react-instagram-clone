import Sidebar from '../components/Sidebar/Sidebar'
import StoryContainer from '../components/Story/StoryContainer'
import Post from '../components/Post/Post'
import '../styles/Home.css'

const Home = () => {

  return (
    <div className="home">
      <div className="home__container">
        <StoryContainer />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Sidebar />
    </div>
  )
}

export default Home