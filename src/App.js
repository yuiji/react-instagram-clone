import { Fragment } from 'react'
import PostContextProvider from './contexts/PostContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <PostContextProvider>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </PostContextProvider>
  )
}

export default App