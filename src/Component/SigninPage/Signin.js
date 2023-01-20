import { Icon } from "@iconify/react";
import React,{useRef} from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import "./Signin.css";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  


function Signin() {
    
    const navigate = useNavigate();
    const Registorform = useRef(null);
    var signupPayload ={}; 

    const handleSignUpbtn =async ()=>{
        const form = Registorform.current;
        signupPayload.fullName = form['fullName'].value;
        signupPayload.businessName = form['businessName'].value;
        signupPayload.email = form['email'].value;
        signupPayload.password = form['password'].value;
        
        try {
            const res = await axiosClient.post("Register", signupPayload
            );
            
            if(res.succeeded){
                toast.success("Register User Successfully !", { position: toast.POSITION.TOP_CENTER });

                setTimeout(() => {
                    navigate('/Login');
                }, 3000);

            }
            else{
                toast.error("Something Wrong !", { position: toast.POSITION.TOP_CENTER });
            }
      
          } catch (error) {
            console.log(error);
            toast.error("Something Wrong !", { position: toast.POSITION.TOP_CENTER });

          }

    }

    return (
        <>
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
                        <h3>Create New Account</h3>
                        <form ref={Registorform}>
                        <div className="login-input-width">
                            <div className="form-input">
                                <label>Enter Your Full Name</label>
                                <input type="text" name={'fullName'} />
                            </div>
                            <div className="form-input">
                                <label>Enter Your Business Name</label>
                                <input type="text" name={'businessName'} />
                            </div>
                            <div className="form-input">
                                <label>Enter Your Email</label>
                                <input type="email" name={'email'} />
                            </div>
                            <div className="form-input">
                                <label>Enter Your Password</label>
                                <div className="input-icon">
                                    <input type="password" name={'password'} />
                                    <Link to="/"><Icon icon="ant-design:eye-filled" /></Link>
                                </div>
                            </div>
                            <button type="button"
                            className="btn btn-blue d-block w-100 btn-sign mt-5" 
                            onClick={handleSignUpbtn}> Sign Up
                            </button>
                            <span className="divider">-- Or Sign in with --</span>
                            <ul className="social-login">
                                <li><Link to="/" className="btn btn-border-blue btn-icon"><i><Icon icon="ant-design:google-outlined" /></i> Google</Link></li>
                                <li><Link to="/" className="btn btn-border-blue btn-icon"><i><Icon icon="ant-design:apple-filled" /></i> Apple ID</Link></li>
                                <li><Link to="/" className="btn btn-border-blue btn-icon"><i><Icon icon="bxl:facebook-circle" /></i> Facebook</Link></li>
                            </ul>
                        </div>
                        </form>
                        <h6 className="signup-link">Already have an account?<Link to="/login"> Sign In</Link> </h6>
                    </div>
                </Col>
            </Row>
        </div>
        <ToastContainer />    
        </>
    );
}

export default Signin;