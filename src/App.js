import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//TODO: send over to the backend, from the modal form (BookFormModal.js) an Object in the format of:
// {
//   "title": "RadicalBook The Second Encounter",
//   "description": "Gordon Freeman is a scientist that",
//   "status": "Unread"
// }





class App extends React.Component {





  render() {
    return (
      <>
        <Router>

          <h1>Library </h1>
          {/* <nav>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
        </nav> */}
          <Header className='header' />
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
              path="/about"
              element={<About />}
            >
            </Route>

          </Routes>


          <Footer />

        </Router>
      </>
    )
  }
}

export default App;
