import { Icon } from "@iconify/react";
import React,{useRef} from "react";
import { Col, Image, Row } from "react-bootstrap";
import { json, Link ,useNavigate} from "react-router-dom";
import "./Login.css";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  


function Login() {
    const loginForm = useRef(null);
    const navigate = useNavigate();
    var payload ={}; 

    const handleLoginbtn =async ()=>{
        const form = loginForm.current;
        payload.email = form['email'].value;
        payload.password = form['password'].value;
        
        try {
            const res = await axiosClient.post("Login", payload
            );
            
            console.log("user response ===>>",res);
            if(res){
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                    token:res.accessToken,
                    user:res
                }))
                toast.success("Login Successfully !", { position: toast.POSITION.TOP_CENTER });

                setTimeout(() => {
                    navigate('/Inventory');
                }, 3000);

            }
            else{
                toast.error("Invalid User Name or Password !", { position: toast.POSITION.TOP_CENTER });
            }
      
          } catch (error) {
            
            console.log(error);
            toast.error("Invalid User Name or Password !", { position: toast.POSITION.TOP_CENTER });

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
                    <form ref={loginForm}>
                        <h3>Welcome Back </h3>
                        <div className="login-input-width">
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
                            <Link className="forgot-password-link" to="/ForgotPassword">Forgot Password?</Link>
                            <button type="button" className="btn btn-blue d-block w-100 btn-sign" onClick={handleLoginbtn}> Sign In</button>
                            <span className="divider">-- Or Sign in with --</span>
                            <ul className="social-login">
                                <li><Link to="/" className="btn btn-border-blue btn-icon"><i><Icon icon="ant-design:google-outlined" /></i> Google</Link></li>
                                <li><Link to="/" className="btn btn-border-blue btn-icon"><i><Icon icon="ant-design:apple-filled" /></i> Apple ID</Link></li>
                                <li><Link to="/" className="btn btn-border-blue btn-icon"><i><Icon icon="bxl:facebook-circle" /></i> Facebook</Link></li>
                            </ul>
                        </div>
                        </form>
                        <h6 className="signup-link">Don’t have an account?<Link to="/Signin"> Sign up</Link> </h6>
                    </div>
                </Col>
            </Row>
        </div>
        <ToastContainer />  </>
    );
}

export default Login;