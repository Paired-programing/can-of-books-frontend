import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About'
import Profile from './Profile'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';







class App extends React.Component {





  render() {
    return (
      <>
        <Router>

          <h1>Library </h1>
          <Header className='header' />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated &&<BestBooks />}
            >
            </Route>
            <Route
              path="/about"
              element={<About />}
            >
            </Route>
            <Route
              path="/profile"
              element={<Profile />}
            >
            </Route>
          </Routes>


          <Footer />

        </Router>
      </>
    )
  }
}

export default withAuth0(App);
