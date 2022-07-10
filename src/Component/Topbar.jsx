import Container from 'react-bootstrap/Container';
import "./CSS/Navbar.css";
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Topbar() {
  return (
    <Navbar bg="light" variant="light" className='Navbar'>
    <Navbar.Brand href="#home" bg="dark" style={{marginLeft:120}}>Brand Logo</Navbar.Brand>
      <Container bg="dark">
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Admin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;