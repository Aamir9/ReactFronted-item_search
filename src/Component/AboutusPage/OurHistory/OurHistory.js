import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./OurHistory.css";

function OurHistory() {
  return (
    <div className="bg-white ">
      <h4 className="about-title">Our History</h4>
      <div className="histroy-info">
        <Row className="align-items-center mb-4">
          <Col lg={6}>
            <p>
              Since 1970 We have made it our mission and vision to provide
              unparalleled services to our clients and customers. Now, we are
              currently operating within our 4th generation and plan to continue
              this tradition for many more years to come!
            </p>
            <p>
              We will buy, sell, trade, manage, warehouse, & recycle your
              surplus business and industrial assets. These assets can be
              anything of value, tangible or non-tangible, pertaining to ANY
              business including inventory, fixed assets, intellectual property,
              relationships, web sites and even the business itself.
            </p>
          </Col>
          <Col lg={6}>
            <div className="histroy-img">
              <Image src="/assets/images/about-img-01.png" />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="histroy-img histroy-img2">
              <Image src="/assets/images/about-img-02.png" />
            </div>
          </Col>
          <Col lg={6}>
            <p>
              We also decommission and dismantle plants and entire facilities
              managing the entire process including environmental issues. In
              Mexico we can manage the entire liquidation process including
              employee settlements, import/export, transportation, and pedimento
              issues. Since our inception 35 years ago, we have worked in
              countless industries and asset market segments. We are known in
              the USA and around the world as experts in minimizing liability
              and maximizing return by redeployment of capitol assets to the
              marketplace and by capitalizing on our 60+ years in the industrial
              scrap metal and recycling business at King Salvage, our sister
              company...
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OurHistory;
