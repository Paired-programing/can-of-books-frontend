import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import UpdateModal from './UpdateModal';
import { withAuth0 } from '@auth0/auth0-react';

// import Image from 'react-bootstrap/Image';




class BestBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      showModal: false,
      showUpdateModal: false,
      bookToUpdate: {}
    }


  }

  async componentDidMount() {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims()
        const jwt = res.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get',
          url: `${process.env.REACT_APP_SERVER}/books`
        }
        const bookData = await axios(config)

        this.setState({ books: bookData.data })


      }

    }



    // this.getBooks();
    catch (err) { console.error(err) }
  }

  handleShowModal = () => {
    console.log('handle show modal has fired!')
    this.setState({
      showModal: true,

    },
      console.log(this.state.showModal)
    )


  };

  handleShowUpdateModal = (book) => {
    console.log(book)
    this.setState({ showUpdateModal: true, bookToUpdate: book })

  }

  handleCloseUpdateModal = () => {
    console.log('CLOSE UPDATE MODAL FIRED')
    this.setState({ showUpdateModal: false })

  }


  handleCloseModal = () => {
    console.log('CLOSE modal has fired!')
    this.setState({
      showModal: false,
    }, () => console.log(this.state.showModal))


  }




  // getBooks = async () => {
  //   let url = `${process.env.REACT_APP_SERVER}/books`;
  //   // console.log(`${process.env.REACT_APP_SERVER}/books`)
  //   try {
  //     const response = await axios.get(url);
  //     this.setState({ books: response.data });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  postBook = async (newBook) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims()
        const jwt = res.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        }

        let url = `${process.env.REACT_APP_SERVER}/books`;

        const response = await axios.post(url, newBook, config)

        this.setState({ books: [...this.state.books, response.data] })
      }
    }
    catch (err) { console.error(err) }
  }



  deleteBook = async (_id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims()
        const jwt = res.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        }
      console.log("DELETE REQUEST RECEIVED")
      let url = `${process.env.REACT_APP_SERVER}/books/${_id}`;
      await axios.delete(url, config);
      let updatedBooks = this.state.books.filter(book => book._id !== _id);
      this.setState({ books: updatedBooks });
    }}
    catch (err) { console.error(err) }
  }

  putBook = async (updatedBook) => {
    console.log("PUT REQUEST RECEIVED")

    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims()
        const jwt = res.__raw;
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        }
      let url = `${process.env.REACT_APP_SERVER}/books/${updatedBook._id}`;
      await axios.put(url, updatedBook, config);
      const updatedBookArr = this.state.books.map(oldBook => updatedBook._id === oldBook._id ? updatedBook : oldBook);
      this.setState({ books: updatedBookArr });
    }}
    catch (err) { console.error(err); }
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

                    <Button onClick={() => this.handleShowUpdateModal(book)}
                      variant="success">Update book status?</Button>{''}


                    <Button onClick={() => this.deleteBook(book._id)} variant="danger">Delete book?</Button>{''}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

            <BookFormModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} postBook={this.postBook} />

            <>

              <Button onClick={this.handleShowModal} variant="primary">ADD NEW BOOK</Button>{''}

            </>

            <UpdateModal

              bookToUpdate={this.state.bookToUpdate}
              handleCloseUpdateModal={this.handleCloseUpdateModal}
              showUpdateModal={this.state.showUpdateModal}
              putBook={this.putBook}
            />

          </>

        ) : (
          <>
          

            <BookFormModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} postBook={this.postBook} />


            <Button onClick={this.handleShowModal} variant="primary">ADD NEW BOOK</Button>{''}

          </>
        )}
      </>
    )
  }
}

export default withAuth0(BestBooks);
