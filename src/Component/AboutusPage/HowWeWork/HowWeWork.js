import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HowWeWork.css";


function HowWeWork() {
    return (
        <div className="how-works-section">
            <div className="how-work-titles">
                <h3>How We Work</h3>
                <p>Teamwork, safety and customer service are at the heart of everything we do. Get to know who we are and what we stand for
                </p>
            </div>
            <Row>
                <Col xl={3} md={6}>
                    <div className="how-work-item">
                        <h5>The strongest team in the industry</h5>
                        <p>We are a diverse, inclusive, innovative team of experts with can-do attitudes. Safety is at our core and so is taking care of our customers , clients and each other.</p>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="how-work-item">
                        <h5>Purpose-driven and committed to excellence</h5>
                        <p>we are committed to a standard of excellence in every aspect of our business and to ethical, responsible governance and conduct in all phases of our operations. we continue to build long-term value for all stakeholders.</p>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="how-work-item">
                        <h5>The Ultimate form of Recycling</h5>
                        <p>Many people talk about recycling, but the ultimate form of recycling, is reusing and repurposing! This vision is at the heart and core of everything that we do! </p>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="how-work-item">
                        <h5>Working with others to give back</h5>
                        <p>King Surplus is proud to partner with local organizations and churchers that have the same commitment to bettering our communities and world. </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default HowWeWork;