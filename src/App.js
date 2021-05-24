import { Fragment } from 'react'
import PostContextProvider from './contexts/PostContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import UserContextProvider from './contexts/UserContext'

function App() {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/profile' exact>
                <ProfilePage />
              </Route>
            </Switch>
          </Fragment>
        </Router>
      </PostContextProvider>
    </UserContextProvider>
  )
}

export default App
