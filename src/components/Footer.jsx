import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router";
Form


const Footer = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <Link className="fw-bold" style={{ textDecoration: "none", color: "black",fontSize:"25px" }}>
              <i class="fa-solid fa-music"></i> Media Player
            </Link>
            <p>
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors.
            </p>
            <p>Code licensed Luminar, docs CC By 3.0</p>
            <p>Currently v5.3.2.0</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2 d-flex flex-column">
            <h5 className="fw-bold">Links</h5>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Landing page
            </Link>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              Home page
            </Link>
            <Link
              to="/history"
              style={{ textDecoration: "none", color: "black" }}
            >
              History page
            </Link>
          </div>
          <div className="col-lg-2 d-flex flex-column">
            <h5 className="fw-bold">Guides</h5>
            <Link style={{ textDecoration: "none", color: "black" }}>
              React
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              React Router
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              React Bootstrap
            </Link>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold">Contact</h5>
            <div className="d-flex">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email here"
                  />
                </Form.Group>
              </Form>
              <div
                className="right-arrow-div border ms-1 px-3 pt-1 bg-info rounded text-light"
                style={{ height: "37px" }}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="social-media d-flex justify-content-evenly">
            <Link><i class="fa-brands fa-twitter text-light"></i></Link>
            <Link><i class="fa-brands fa-instagram text-light"></i></Link>
            <Link><i class="fa-brands fa-facebook text-light"></i></Link>
            <Link><i class="fa-brands fa-linkedin text-light"></i></Link>
            <Link><i class="fa-brands fa-github text-light"></i></Link>
            <Link><i class="fa-solid fa-phone text-light"></i></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
