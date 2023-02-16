import Button from 'react-bootstrap/Button';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BookFormModal from './BookFormModal'

//TODO: send over to the backend, from the modal form (BookFormModal.js) an Object in the format of:
// {
//   "title": "RadicalBook The Second Encounter",
//   "description": "Gordon Freeman is a scientist that",
//   "status": "Unread"
// }





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  handleShowModal = () => {
    console.log('handle show modal has fired!')
    this.setState({
      showModal: true,
    })
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }


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

          <>
            <Button onClick={this.handleShowModal} variant="primary">ADD NEW BOOK</Button>{''}
          </>


          <BookFormModal showModal={this.state.showModal} />


          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
