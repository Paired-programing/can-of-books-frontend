
import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

// import Image from 'react-bootstrap/Image';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount() {
    this.getBooks();
  }


  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER}/books`;
    // console.log(`${process.env.REACT_APP_SERVER}/books`)
    try {
      const response = await axios.get(url);
      this.setState({ books: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>

        <h2>Our Library</h2>

        {this.state.books.length > 0 ? (
          <>
            <Carousel>
              {this.state.books.map(book => (
                <Carousel.Item key={book._id}>
                  <img className="bookImg" alt={book.description} src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </>
          // <>
          // {this.state.books.map(book=>
          //   <p>{book.title}</p>
          //   )}
          //   </>
        ) : (<h3>no books</h3>

        )}
      </>
    )
  }
}

export default BestBooks;
