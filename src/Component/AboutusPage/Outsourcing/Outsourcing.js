import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Outsourcing.css";

function Outsourcing() {
  return (
    <div className="bg-white ">
      <h4 className="about-title">Why Outsourcing Is Your Best Solution?</h4>
      <div className="histroy-info">
        <Row className="align-items-center mb-4">
          <Col lg={12}>
            <p>
            We are an outsource solution not a vendor. We become an integral part of your company and try to make our relationship with you seamless. The benefit to outsourcing is that you and your employees can stay focused on your core business while we handle your surplus asset management. You win several ways:
            </p>
            <ul>
              <li>Your core business does not suffer because your people are not distracted trying to do something they have no experience doing.</li>
              <li>You get maximum value from our 35 years experience, our extensive customer base</li>
              <li>
                <h6>Our proprietary software that:</h6>
                <ul>
                  <li>Allows our clients to not only see the status of their assets in real time and become apart of our process as little or as much as they like.</li>
                  <li>Allows us to create special solutions to fit our CLIENTS individual needs. For example: we can liquidate an entire facility in Phoenix or Mexico City or both simultaneously and set our system to automatically offer every single item out to ALL of their other subsidiaries across the world FIRST before anything was ever sold. We call this redeployment of asset.</li>
                  <li>Our unique 50 Day Success Window. Five ten day periods:</li>
                </ul>
              </li>
              <li>Days 1-10 - We can offer all assets to our clients other subsidiaries or offices</li>
              <li>Days 11-20 - We can give then a last call</li>
              <li>Days 21-30 - W start a period of selling to our customer network with in our system</li>
              <li>Days 31-40 - We have a last call with in our system</li>
              <li>Days 41-50 - We list in e-bay and other auctions.</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Outsourcing;
