import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} /> <span className="text-white ms-2"> SPACE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="link" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                About Us
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                Story
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                Blog
              </Nav.Link>
              <Nav.Link className="link" href="#pricing">
                Contract Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
