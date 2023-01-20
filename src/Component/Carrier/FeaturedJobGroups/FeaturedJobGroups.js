import { Icon } from "@iconify/react";
import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FeaturedJobGroups.css";

function FeaturedJobGroups() {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Maintenance Tech - Field Service</Accordion.Header>
                    <Accordion.Body className="job-description">
                        <div className="job-description-title">
                        <h5>Great company. Great people. Great opportunities.</h5>
                        <Link to="/" className="btn btn-blue btn-arrow">Apply for the job <Icon className="ms-2" icon="material-symbols:arrow-right-alt" /></Link>
                        </div>
                        <p>As an Inside Sales Rep at United Rentals, you will serve as a key customer contact and consultant at our branch, with responsibility for recommending solutions to the customer, quoting, selling and fulfilling orders for our equipment and services based on their needs. It's a great job for an ambitious professional who has an interest in our industry and can build relationships and provide outstanding customer service. You'll multi-task, learn plenty and build your ability to drive sales and branch growth.</p>
                        <p>If you would enjoy the advantage of selling for the world's largest equipment rental provider, consider a future with United Rentals. Join us and grow your career as fast and as far as your ambition takes you either in Sales or Operations.</p>
                        <h6>Additional duties include the following:</h6>
                        <ul>
                            <li>Process rental quotations, reservations and contracts</li>
                            <li>Establish new rental and sales accounts by serving walk-in and call-in customers</li>
                            <li>Negotiate prices on equipment rentals and contractor supplies in accordance with pricing policies and procedures</li>
                            <li>Dispatch delivery trucks and manage customer expectations regarding delivery</li>
                            <li>Generate leads for new business and communicate leads with Outside Sales Representatives</li>
                            <li>Warm call on lost and/or dormant accounts to retain business</li>
                            <li>Maintain a clean and presentable showroom, sufficiently stocked with merchandise</li>
                            <li>Other duties assigned as needed</li>
                        </ul>
                        <h6>Job Requirements:</h6>
                        <ul>
                            <li>Bachelor's degree preferred or equivalent experience</li>
                            <li>Exceptional relationship-building and customer service skills</li>
                            <li>Strong ability to multitask in a fast-paced environment</li>
                            <li>Excellent teamwork, interpersonal and communication skills</li>
                            <li>Keen attention to detail</li>
                            <li>Valid driver's license with acceptable driving record </li>
                        </ul>
                        <p>the largest equipment rental company, we believe that it takes great employees to build a great organization – and we’re passionate about helping our people grow professionally and embrace teamwork in everything they do. Our culture is based on our corporate values and centers on mutual respect, job satisfaction, diversity and a shared responsibility to build a better future.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Maintenance Technician</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default FeaturedJobGroups;
