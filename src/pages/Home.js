import Sidebar from '../components/Sidebar/Sidebar'
import StoryContainer from '../components/Story/StoryContainer'
import Post from '../components/Post/Post'
import '../styles/Home.css'
import post2 from '../assets/images/post2.jpg'

const Home = () => {

  return (
    <div className="home">
      <div className="home__container">
        <StoryContainer />
        <Post img={post2} />
        <Post />
        <Post />
        <Post />
      </div>
      <Sidebar />
    </div>
  )
}

export default Home