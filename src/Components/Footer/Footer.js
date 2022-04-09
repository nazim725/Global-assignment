import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div style={{ background: "#18163B" }} className="footer">
        <h1 className="pb-4">Newsletter</h1>
        {/* <InputGroup className="mb-3 input-box">
        <FormControl
          placeholder="Email Address"
          aria-describedby="basic-addon2"
          type="text"
        />
        <Button className="search-button" id="button-addon2">
          search
        </Button>
      </InputGroup> */}
        <input
          className="mb-3 text-center input-box"
          placeholder="Email Address"
        />{" "}
        <Button className="search-button" id="button-addon2">
          search
        </Button>
      </div>
      <FooterNavigation></FooterNavigation>
    </div>
  );
};

export default Footer;
