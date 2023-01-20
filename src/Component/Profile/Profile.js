import React, { useState, useEffect, useRef } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Col, Image, Row } from "react-bootstrap";
import axiosClient from "../../axiosClient";
import * as appConstants from '../../constants';
import axios from "axios";
import uuid from 'react-uuid';



function Profile() {

    const [user, setUser] = useState({});
    const userData = JSON.parse(localStorage.getItem('login'));
    const [isSubmit, setIsSubmit] = useState(false);
    const [isExamet, setIExamet] = useState(false);
    const formRef = useRef(null);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    var fileRes = null;
    var data = {};
    // sumbit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        data.id = userData.user.id;
        data.fullName = form['fullName'].value;
        data.businessName = form['businessName'].value;
        data.email = form['email'].value;
        data.password = '';
        data.examet = isExamet;

        if (!file && isExamet == true) {
            setError('A file is required If check Tax Examet !');
            setResponse(null)
            return;
        }
        else {
            setError(null)

        }


        try {
            
            if (isExamet == true) {
                await uploadFile();
            }
            console.log("blob infor ",fileRes)
            if ((fileRes && fileRes.status == 200) || isExamet == false) {
                if (fileRes && fileRes.status == 200) {
                    data.fileUrl = fileRes.data.blob.uri;
                    data.fileName = fileRes.data.blob.name;
    
                    setError(null);
                    
                }
               
              
                var profileRes = await axiosClient.post("UpdateUserInfo", data);

                if (profileRes) {
                    let token = userData.token;
                    localStorage.removeItem('login');
                    localStorage.setItem('login', JSON.stringify({
                        login: true,
                        token: token,
                        user: data
                    }))
                    setIsSubmit(true)
                    setError(null);
                    if(isExamet == false){
                    setResponse("Update Profile information")
                    }
                    else{
                        setResponse("Update Profile information and File ")
                    }
                  
                }


            }
        } catch (error) {
            setError("Error! Something wrong.")
            console.log(error)
        }


        async function uploadFile() {
            const formData = new FormData();
            const fileName = `${file.name}-${Date.now()}-${uuid()}`;
            file.fileName = fileName;
            formData.append('file', file);
            fileRes = await axios({
                method: "post",
                url: appConstants.baseUrl + "Upload",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",

                },
            });

           

        }
    }


    useEffect(() => {
        if (userData && userData.user) {
            const form = formRef.current;
            form['fullName'].value = userData.user.fullName;
            form['businessName'].value = userData.user.businessName;
            form['email'].value = userData.user.email;
            if (userData.user.examet != true) {

                setIExamet(false);
            }
            else {
                setIExamet(true);
            }
        }
    }, [isSubmit]);


    const handlExametChange = event => {

        if (event.target.checked) {
            setIExamet(true);
        } else {
            setIExamet(false);
        }

    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    return (
        <>
            <Header />
            <div className='d-margin pt-5'>
                {user && (
                    <>
                        <div>
                            <div className='p-4'>
                                <Row>

                                    <Col lg={6}>
                                        <form ref={formRef}>
                                            <div className="form-input">
                                                <label>Full Name</label>
                                                <input type="text" name={'fullName'} />
                                            </div>
                                            <div className="form-input">
                                                <label>Business Name</label>
                                                <input type="text" name={'businessName'} />
                                            </div>

                                            <div className="form-input">
                                                <label>Email</label>
                                                <input disabled type="email" name={'email'} />
                                            </div>

                                            {/* checkbox for Examet */}
                                            <div className="form-input">
                                                <label>Examet</label>

                                                <input checked={isExamet} value={isExamet} onChange={handlExametChange} type="checkbox" />
                                            </div>

                                            {isExamet == true && (
                                                <div className="form-input">
                                                    <label>Full Name</label>
                                                    <input type="file" onChange={handleFileChange} />
                                                </div>

                                            )}

                                            <div className="form-input">
                                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                                            </div>

                                            {error && <p style={{ color: 'red' }}>{error}</p>}
                                            {response && <b >{response}</b>}
                                        </form>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Profile;
