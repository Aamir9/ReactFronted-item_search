import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Carrier.css";
import FeaturedJobGroups from "./FeaturedJobGroups/FeaturedJobGroups";

function Carrier() {
  return (
    <>
      <div className="d-margin">
        <Container className="pt-5">
          <div className="contactBanner">
            <h3>
              Build Your Career <br /> With The Industry Leader
            </h3>
          </div>
          <Row>
            <Col lg={4}>
              <div className="bg-white carrier-box">
                <span>Explore Our Career Areas</span>
                <h4>Equipped with endless opportunity</h4>
                <p>
                  With 1,200+ rental locations, multiple career paths and the
                  kind of momentum that creates an ongoing need for talent, we
                  can provide the potential for you to grow your career quickly.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bg-white carrier-box">
                <span>Learn About Us</span>
                <h4>Equipped with exceptional rewards</h4>
                <p>
                  We offer customized and robust training programs, a friendly
                  culture where everyone is respected and a truly outstanding
                  compensation/benefits package.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bg-white carrier-box">
                <Link to="/" className="carrier-video">
                  <Image src="./assets/images/contactUs.png" />
                </Link>
              </div>
            </Col>
          </Row>
          <div className="FeaturedJobs">
            <h3>Featured Job Groups</h3>
            <FeaturedJobGroups />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Carrier;
