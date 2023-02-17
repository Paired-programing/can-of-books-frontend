import React from 'react';
import Modal from 'react-bootstrap/Modal';
import AddForm from './AddBook';

class BookFormModal extends React.Component {



  render() {
    return (
      <>
        <Modal
          className="modal show"
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}
          style={{ display: 'block', marginTop: 200, }}>
            
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Enter the details of your book: </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <AddForm postBook = {this.props.postBook} />
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}
export default BookFormModal;