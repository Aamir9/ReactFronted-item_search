import './OurServices.css';
import CountUp from 'react-countup';
import { Col, Container, Image, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function OurServices() {
    return (
        <>
            <div className="OurServices-Section">
                <Container>
                    <h2>Our Services</h2>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className='service-box'>
                                <h6>Client Asset Management</h6>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                <Link to-="/">Learn More <Icon icon="material-symbols:arrow-right-alt" /></Link>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='service-box'>
                                <h6>Surplus Inventory</h6>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                <Link to-="/">Learn More <Icon icon="material-symbols:arrow-right-alt" /></Link>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='service-box'>
                                <h6>Recycling Services</h6>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                <Link to-="/">Learn More <Icon icon="material-symbols:arrow-right-alt" /></Link>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='service-box'>
                                <h6>Equipment Servicing</h6>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                <Link to-="/">Learn More <Icon icon="material-symbols:arrow-right-alt" /></Link>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='service-box'>
                                <h6>Sell to Us</h6>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                <Link to-="/">Learn More <Icon icon="material-symbols:arrow-right-alt" /></Link>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='service-box'>
                                <h6>Specialized Contracts</h6>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                <Link to-="/">Learn More <Icon icon="material-symbols:arrow-right-alt" /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
               <ul className='client-logos'>
                    <li><Image src='/assets/images/client-logo-01.png' /></li>
                    <li><Image src='/assets/images/client-logo-02.png' /></li>
                    <li><Image src='/assets/images/client-logo-03.png' /></li>
                    <li><Image src='/assets/images/client-logo-04.png' /></li>
                    <li><Image src='/assets/images/client-logo-05.png' /></li>
                </ul> 
            </Container>
        </>
    );
}

export default OurServices;
