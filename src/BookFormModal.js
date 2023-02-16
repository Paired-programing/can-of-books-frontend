import React from 'react';
import Modal from 'react-bootstrap/Modal';
import AddForm from './AddBook';

class BookFormModal extends React.Component {

  render() {
    return (
      <>
        <Modal
          className="modal show"
          show = {this.props.showModal}
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Enter the details of your book: </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <AddForm />
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}
export default BookFormModal;