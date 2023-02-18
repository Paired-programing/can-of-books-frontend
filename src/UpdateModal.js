import React from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";

class UpdateModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      title: e.target.title.value || this.props.bookToUpdate.title,
      description: e.target.description.value || this.props.bookToUpdate.description,
      status: e.target.status.value || this.props.bookToUpdate.status,
      _id: this.props.bookToUpdate._id
    }
    console.log(updatedBook);
    this.props.putBook(updatedBook);
  }


  render() {
    return (
      <Modal show={this.props.showUpdateModal} onHide={this.props.handleCloseUpdateModal}>
        <Modal.Header closeButton><Modal.Title>Update Book</Modal.Title></Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Book's title</Form.Label>
                <Form.Control type="text" placeholder={this.props.bookToUpdate.title} />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Book's description</Form.Label>
                <Form.Control type="text" placeholder={this.props.bookToUpdate.description} />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Book's status</Form.Label>
                <Form.Control type="text" placeholder={this.props.bookToUpdate.status} />
              </Form.Group>

              <Button type="submit" onClick={this.props.handleCloseUpdateModal}>Update Book</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateModal;