import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import p2 from "../../images/p2.png";
import p1 from "../../images/p1.png";
import bg from "../../images/bg.png";
import world from "../../images/world.png";
import "./Bannar.css";

const Bannar = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "auto",
        height: "600px",
        marginTop: "-50px",
      }}
    >
      <Container>
        <Row>
          <Col className="col-2">
            <img src={p2} className="p1" />
          </Col>
          <Col className="col-4 col2">
            <div className="div-1">
              <img src={world} />
              <span className="ms-2">Welcome to Stella</span>
            </div>
            <div>
              <h2 className="heading">
                SPACE FOR <br />
                EVERYONE
              </h2>
              <p className="details">
                At PIAP Space, we believe that we can make Space and Earth
                cleaner, engineering, and delivering top-quality robotics
                solutions.
              </p>
              <button className="get-button">GET START</button>
            </div>
          </Col>
          <Col className="col-5 col3">
            <img src={p1} />
          </Col>
        </Row>
      </Container>

      <h3>Bannaer</h3>
    </div>
  );
};

export default Bannar;
