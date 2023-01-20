import { Icon } from '@iconify/react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3}>
            <Link to="/" className='f-logo'><Image src="./assets/images/logo.png" /></Link>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <ul className='social-ul'>
              <li><Link><Icon icon="bxl:facebook-circle" /></Link></li>
              <li><Link><Icon icon="ant-design:instagram-filled" /></Link></li>
              <li><Link><Icon icon="ant-design:twitter-outlined" /></Link></li>
              <li><Link><Icon icon="ant-design:youtube-filled" /></Link></li>
              <li><Link><Icon icon="bxl:linkedin" /></Link></li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className='footer-link-wrap'>
              <div className='f-link-50'>
                <h6>Quick Links</h6>
                <ul>
                  <li><Link to="/">Inventory</Link></li>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Our Services</Link></li>
                  <li><Link to="/">Sell with us</Link></li>
                  <li><Link to="/">Contact us</Link></li>
                </ul>
              </div>
              <div className='f-link-50'>
                <h6>Support Links</h6>
                <ul>
                  <li><Link to="/">Terms of services</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Carrier</Link></li>
                  <li><Link to="/">Login</Link></li>
                  <li><Link to="/">Signup</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <h6>Contacts</h6>
            <ul className='contact-links'>
              <li><Link to="/"><Icon icon="fluent:mail-16-filled" /> support@kingsurplus.com</Link></li>
              <li><Link to="/"><Icon icon="bxs:phone" /> +1 830-775-2580</Link></li>
              <li><Link to="/"><Icon icon="carbon:location-filled" /> 100 Ave T Del Rio, TX - 78840</Link></li>
              <li><Link to="/"><Icon icon="carbon:location-filled" /> 102 US Highway 87 Comfort, TX - 78013</Link></li>
            </ul>
          </Col>
          <Col lg={3}>
            <h6>Newsletter</h6>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used...</p>
            <div className='newsletter-wrap'>
              <input placeholder='Enter your email' />
              <Link to="/"><Icon icon="cil:send" /></Link>
            </div>
          </Col>
        </Row>
      </Container>
      <p className='copyright'>Copyright @2022 King surplus. All Rights Reserved. Designated trademarks and brands are the property of their respective owners. </p>
    </footer>
  );
}

export default Footer;
