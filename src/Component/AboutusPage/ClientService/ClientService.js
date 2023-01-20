import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./ClientService.css";

function ClientService() {
  return (
    <div className="bg-white ">
      <h4 className="about-title">Client Service</h4>
      <div className="histroy-info">
        <Row className="align-items-center mb-4">
          <Col lg={12}>
              <h5>Our Clients Range from Global Enterprises to Family Businesses</h5>
              <p>We identify clients as those we buy from or manage assets for. Our clients are companies like: Alcoa, CAT, Chemical Lime, Commercial Metals, Del Monte, GE, Sears, University of Texas, US Government, US Gypsum, Structural Metals, major cement & mining companies, families with estate issues, and individuals from every walk of life.</p>
              <p>Assets, not the size or shape of the business they come from, are our commodity. Therefore, no job is too large or small and we service client's needs that are as simple as a single piece, as complex as an entire company with facilities in multiple countries, or as important as a family business.</p>
                <hr />
              <h5>Our Customers Help Us Maximize Your Value</h5>
              <p>We identify customers as those we sell to. Most of our customers are wholesalers, distributors or dealers. These offer the greatest opportunity for us to get your greatest value. While auctions often draw bargain seekers, our customers are willing to pay for what they can profit from.</p>
              <p>Not only are they our customers, but we have trusted relationships with them as industry experts and real buyers that we call on time after time to move a wide variety of surplus assets from multiple market segments. We simply manage the process in away that is trusted by both clients and customers alike.</p>
              <p>But commodities do not define the person or the company any more than the car they drive. Purpose does.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ClientService;
