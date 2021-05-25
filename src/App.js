import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import PostContextProvider from './contexts/PostContext'
import UserContextProvider from './contexts/UserContext'
import SuggestionsContextProvider from './contexts/SuggestionsContext'

function App() {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route path='/' exact>
                <SuggestionsContextProvider>
                  <Home />
                </SuggestionsContextProvider>
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
