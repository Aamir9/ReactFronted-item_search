import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ForgotPassOtp.css";



function ForgotPassOtp() {

    return (
        <div className="main-login-wrap">
            <Row className="m-0 bg-light-gray">
                <Col lg={6} className="bg-white">
                    <div className="logoInfo">
                        <div className="login-logo"> 
                            <Image src="./assets/images/logo.png" />
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="login-box"> 
                        <h3 className="mb-2">Forgot Password</h3>
                        <p className="max-100">Please enter your one time password. </p> 
                        <div className="login-input-width">
                            <div className="form-input"> 
                                <label>Enter OTP</label>
                                <div className="otpboxWrap">
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                            </div>
                            <i className="otp-link">Didn’t recive otp? <Link to="/"> Resend</Link></i>
                            <Link to="/" className="btn btn-blue d-block w-100 btn-sign"> Submit</Link>
                        </div>
                        <h6 className="signup-link">Don’t have an account?<Link to="/Signin"> Sign up</Link> </h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ForgotPassOtp;