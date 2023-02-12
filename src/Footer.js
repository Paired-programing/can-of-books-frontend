import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Can of Books by Casey and Yurii</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
