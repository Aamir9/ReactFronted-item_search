import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EquipmentToolSection.css";
import React from "react";

function EquipmentToolSection() {
  return (
    <section className="EquipmentToolSection">
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="equipment-info">
            <h3>What do I need to know before choosing equipment or tools?</h3>
            <p>
              Planning is crucial to any project — your timeline and budget
              depend on it. And choosing the right equipment can keep your
              project on track. Before you get started, you need to assess the
              job: What are the conditions and terrain of the site? What is the
              schedule? When you have answered those questions, you can narrow
              down the equipment specifications:
            </p>
            <ul>
              <li>Height you need to reach</li>
              <li>Amount of earth you need to move</li>
              <li>2- or 4-wheel drive wheels, tracks, etc.</li>
              <li>Electric, gas/diesel or air power</li>
              <li>
                Any accessories you need such as pipe racks, tool trailers or
                bucket extensions
              </li>
              <li>
                Services or equipment rentals for events such as{" "}
                <Link to="/">
                  porta potties, water treatment or power & HVAC
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <div className="equipment-img">
            <Image src="./assets/images/equipment-01.png" />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default EquipmentToolSection;
