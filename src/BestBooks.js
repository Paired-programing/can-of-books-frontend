import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal'

// import Image from 'react-bootstrap/Image';




class BestBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
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
    console.log('CLOSE modal has fired!')
    this.setState({
      showModal: false,
    })


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


  postBook = async (newBook) =>{
    try{
      let url = `${process.env.REACT_APP_SERVER}/books`;
      const response = await axios.post(url, newBook)
      console.log(response.data);
      //Using elipses/spread to copy over old data and add new book into new array
      this.setState({books: [...this.state.books, response.data]})
    }
    catch(err){console.error(err)}
  }



  deleteBook = async(_id) => {
    try{
      console.log("DELETE REQUEST RECEIVED")
      let url = `${process.env.REACT_APP_SERVER}/books/${_id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== _id);
      this.setState({books: updatedBooks});
    }
    catch(err){console.error(err)}
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
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                    <Button onClick={() => this.deleteBook(book._id)} variant="primary">Delete book?</Button>{''}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            <BookFormModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} postBook = {this.postBook}/>
            <>
              <Button onClick={this.handleShowModal} variant="primary">ADD NEW BOOK</Button>{''}
            </>
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
