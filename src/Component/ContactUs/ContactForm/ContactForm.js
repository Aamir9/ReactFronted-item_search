import { Icon } from "@iconify/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ContactForm.css";


function ContactForm() {
  return (
    <div className="contact-form">
     <h4>Send us a Message</h4>
     <p>A customer care representative will respond to you shortly.</p>
     <Row>
        <Col lg={9}>
            <form className="row">
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="subject">Subject</label>
                        <select>
                            <option></option>
                            <option>subject 01</option>
                            <option>subject 02</option>
                            <option>subject 03</option>
                        </select>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="city">City</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="postalcode">Postal/Zip Code</label>
                        <input type="text" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="industries">All Industries</label>
                        <select>
                            <option></option>
                            <option>Industries 01</option>
                            <option>Industries 02</option>
                            <option>Industries 03</option>
                        </select>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="form-input">
                        <label htmlFor="types">All Types</label>
                        <select>
                            <option></option>
                            <option>Types 01</option>
                            <option>Types 02</option>
                            <option>Types 03</option>
                        </select>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="form-input d-flex align-items-center flex-wrap">
                        <label className="mb-2 me-3" htmlFor="reply">How Can We Reply : </label>
                        <div className="d-flex flex-wrap mb-2">
                            <label className="custom-checkbox" htmlFor="email">
                                <input type="checkbox" id="email" />
                                <span><Icon icon="charm:tick" /></span>
                                <p>email</p>
                            </label>
                            <label className="custom-checkbox" htmlFor="phone">
                                <input type="checkbox" id="phone" />
                                <span><Icon icon="charm:tick" /></span>
                                <p>Phone</p>
                            </label>
                            <label className="custom-checkbox" htmlFor="required">
                                <input type="checkbox" id="required" />
                                <span><Icon icon="charm:tick" /></span>
                                <p>No Reply Required</p>
                            </label>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="form-input">
                        <label htmlFor="postalcode">Your Comment or Question</label>
                        <textarea rows="4"></textarea>
                    </div>
                </Col>
                <Col lg={12}>
                    <Link to="/" className="btn btn-blue btn-arrow mt-4">Submit <Icon className="ms-2" icon="akar-icons:arrow-right" /></Link>
                </Col>
            </form>
        </Col>
        <Col lg={3}>
            <ul className="contact-info">
                <li><Link to="/"><span><Icon icon="fluent:mail-20-filled" /></span> sales@kingsurplus.com</Link></li>
                <li><Link to="/"><span><Icon icon="bxl:facebook-circle" /></span> kingsurplusco</Link></li>
                <li><Link to="/"><span><Icon icon="carbon:location-filled" /></span> 104 US Hwy 87, Comfort, TX, 78013</Link></li>
                <li><Link to="/"><span><Icon icon="carbon:location-filled" /></span> 100 Avanue T, Del Rio, TX, 78840</Link></li>
                <li><Link to="/"><span><Icon icon="fluent:call-16-filled" /></span> 830-995-5000</Link></li>
                <li><Link to="/" className='btn btn-blue btn-arrow w-100 justify-content-center'>CALL US NOW <Icon className="ms-2" icon="akar-icons:arrow-right" /></Link></li>
            </ul>
        </Col>
     </Row>
    </div>
  );
}

export default ContactForm;