import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Form } from "react-bootstrap";
// import AddForm from './AddForm';

class BookFormModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    }

    this.props.postBook(newBook);
  }

  render() {
    console.log(this.props.showModal)
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}
          style={{ display: 'block', marginTop: 200, }}>

          <Modal.Header closeButton>
            <Modal.Title>Enter the details of your book: </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="title">
                  <Form.Label>Book title</Form.Label>
                  <Form.Control type="text" placeholder="Type your book's title..." />
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label>Book description</Form.Label>
                  <Form.Control type="text" placeholder="Type your description of the book here..." />
                </Form.Group>

                <Form.Group controlId="status">
                  <Form.Label>Book status</Form.Label>
                  <Form.Control type="text" placeholder="Is your book read/unread/in progress?" />
                </Form.Group>
                <Button type="submit" onClick={this.props.handleCloseModal} >Add book to library</Button>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
export default BookFormModal;