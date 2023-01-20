import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PaymentCardoption.css";

function PaymentCardoption() {
    return (
        <Row>
            <Col lg={7}>
                <Row>
                    <Col lg={12}>
                        <div className="radio-wrap">
                            <label className="custom-radio"  htmlFor="CreditCardRadio">
                                <input type="radio" name="paymentRadio" id="CreditCardRadio" value="CreditCardRadio" />
                                <span></span>
                                <h6>Credit/Debit Card</h6>
                            </label>
                            <label className="custom-radio" htmlFor="PayPal">
                                <input type="radio" name="paymentRadio" id="PayPal" value="PayPal" />
                                <span></span>
                                <h6>PayPal</h6>
                            </label>
                            <label className="custom-radio" htmlFor="WireTransfer">
                                <input type="radio" name="paymentRadio" id="WireTransfer" value="WireTransfer" />
                                <span></span>
                                <h6>Wire Transfer</h6>
                            </label>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="form-input">
                            <label>Card Holder Name</label>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="form-input">
                            <label>Card Number</label>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-input">
                            <label>Expiry Date</label>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-input">
                            <label>CVV</label>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col>
                        <Link className="btn btn-blue mt-4" to="/">Save & Continue</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default PaymentCardoption;
