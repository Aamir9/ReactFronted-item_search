import { Icon } from "@iconify/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RentForm.css";


function RentForm() {
    return (
        <>
            <div className="rentFormMain">
              <div>
                <h3>Let's Get Started.</h3>
                <p>Tell us about the equipment you are looking to sell</p>
              </div>
              <Link to="/" className="btn btn-white btn-icon ">Submit <Icon className="ms-2" icon="material-symbols:arrow-right-alt-rounded" /></Link>
            </div>
        </>
    );
}

export default RentForm;