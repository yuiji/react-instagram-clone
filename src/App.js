import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
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
  )
}

export default App
