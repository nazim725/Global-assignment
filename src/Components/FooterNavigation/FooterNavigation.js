import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./FooterNavigation.css";
import logo from "../../images/logo.png";

const FooterNavigation = () => {
  return (
    <div style={{ background: "#18163B" }} className="pt-5 px-5 pb-3">
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Navbar.Brand href="#home">
          <img src={logo} /> <span className="text-white ms-2"> SPACE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto copyright">
            <p>Space 2020, All rights reserved.</p>
          </Nav>
          <Nav className="ms-auto">
            <i class="fab fa-twitter icon"></i>{" "}
            <i class="fab fa-facebook icon"></i>{" "}
            <i class="fab fa-linkedin icon"></i>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default FooterNavigation;
