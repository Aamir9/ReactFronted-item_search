import './ProjectCounter.css';
import CountUp from 'react-countup';
import { Container } from 'react-bootstrap';
import React from 'react';

function ProjectCounter() {
  return (
    <div className="ProjectCounter">
        <Container>
            <ul>
                <li>
                    <h3><CountUp end={800} />+</h3>
                    <h6>Categories</h6>
                </li>
                <li>
                    <h3><CountUp end={50} />+</h3>
                    <h6>Years In Business</h6>
                </li>
                <li>
                    <h3><CountUp end={10000} />+</h3>
                    <h6>Satisfied Customer</h6>
                </li>
                <li>
                    <h3><CountUp end={20} />+</h3>
                    <h6>Years In E-Commerce</h6>
                </li>
            </ul>
        </Container>
    </div>
  );
}

export default ProjectCounter;
