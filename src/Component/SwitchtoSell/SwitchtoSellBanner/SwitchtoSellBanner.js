import { Icon } from '@iconify/react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SwitchtoSellBanner.css';
import React from 'react';

function SwitchtoSellBanner() {
  return (
  <section className='sellwithusSection'>
        <div className='bg-white'>
            <div className='sellwithusInfo'>
                <h4>Our purpose: To build a better future together</h4>
                <p>We work together with our customers, communities and employees to find solutions with a shared commitment to service and safety. To us, this is a simple, but powerful notion we call Work United™. It’s a shared mindset. One of partnership that helps us face any challenge, together.</p>
            </div>
            <div className='sellwithusImg'>
                <Image src="./assets/images/sellwithus-banner.png" />
            </div>
        </div>
  </section>
  );
}

export default SwitchtoSellBanner;
