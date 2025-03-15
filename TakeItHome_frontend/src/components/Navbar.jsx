import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="./logo.png"
              width="80"
              height="60"
              style={{ borderRadius: "50%", objectFit: "cover" }}
              className="d-inline-block align-top logo-circle"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
          <Button href="/login" variant="outline-light" className="me-2">Login</Button>
          <Button href="/signup" variant="primary">Sign Up</Button>
        </Nav>
        
        </Container>
      </Navbar>    
    </>
  );
};

export default NavBar;
