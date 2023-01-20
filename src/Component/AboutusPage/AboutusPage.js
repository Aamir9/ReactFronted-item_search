import "./AboutusPage.css";
import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import HowWeWork from "./HowWeWork/HowWeWork";
import OurHistory from "./OurHistory/OurHistory";
import OurTeam from "./OurTeam/OurTeam";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Outsourcing from "./Outsourcing/Outsourcing";
import ClientService from "./ClientService/ClientService";
import PurposeMission from "./PurposeMission/PurposeMission";

function AboutusPage() {
  return (
    <div> 
    <Header />
    <div className="d-margin">
      <Container className="pt-2">
        <div className="about-banner">
          <h3>Asset Remarketing, Management, and Recycling since 1970</h3>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col lg={3} className="mb-3">
              <Nav variant="pills" className="flex-column about-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Our History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Why Outsourcing Is Your Best Solution?</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Client Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Our Purpose, Mission, Vision</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <OurHistory />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Outsourcing />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <ClientService />
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <PurposeMission />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <HowWeWork />
        <OurTeam />
      </Container>
    </div>
    <Footer />
         </div>
  );
}

export default AboutusPage;
