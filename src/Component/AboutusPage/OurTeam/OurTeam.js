import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div  className="ourTeam-section">
        <h2>Our Team</h2>
        <Row>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-01.png" />
                    <h6>Robin & Lilia King</h6>
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-04.png" />
                    <h6>Roky & Leslie King</h6>
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-14.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-02.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-05.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-06.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-07.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-08.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-09.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-10.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-11.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-12.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-13.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-03.png" />
                </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <div className="team-info">
                    <Image src="/assets/images/team/team-15.png" />
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default OurTeam;
