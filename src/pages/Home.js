import Sidebar from '../components/Sidebar/Sidebar'
import StoryContainer from '../components/Story/StoryContainer'
import '../styles/Home.css'

const Home = () => {

  return (
    <div className="home">
      <div className="home__container">
        <StoryContainer />
      </div>
      <Sidebar />
    </div>
  )
}

export default Home