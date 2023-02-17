import React from "react";
import { Button, Container, Form } from "react-bootstrap";

class AddForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const newBook ={
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    }

    this.props.postBook(newBook);
  }

  render() {
    return (
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

          <Form.Group controlId="Status">
            <Form.Label>Book status</Form.Label>
            <Form.Control type="text" placeholder="Is your book read/unread/in progress?" />
          </Form.Group>
          <Button type="submit">Add book to library</Button>
        </Form>
      </Container>
    )
  }
}

export default AddForm;