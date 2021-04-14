import Sidebar from '../components/Sidebar/Sidebar'
import StoryContainer from '../components/Story/StoryContainer'
import '../styles/Home.css'

const Home = () => {
  
  return (
    <div className="home__container">
      <StoryContainer />
      <Sidebar />
    </div>
    )
}

export default Home