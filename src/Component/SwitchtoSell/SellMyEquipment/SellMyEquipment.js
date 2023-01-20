import { Icon } from '@iconify/react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SellMyEquipment.css';
import React from 'react';

function SellMyEquipment() {
  return (
  <section className='sellwithusSection'>
        <div className='bg-white white-0'>
            <div className='sellwithusInfo ps-0'>
                <h4>Why should I choose King Surplus for sell my equipment?</h4>
                <p className='mb-3'>You can count on our team of industry experts, top-tier equipment and tools, and 24/7 customer service to keep your operations running smoothly, day or night.</p>
                <p className='mb-3'>You can rent top-quality and expertly maintained equipment at United Rentals. With a dedicated team of customer service and industry experts, we’re here to help keep projects on time and on budget.</p>
                <p>Our inventory of small and large equipment rentals includes solutions for difficult climates, visibility blockers, tough terrain, high spaces and unique situations. You can trust us to have the tools and equipment you need when you need them.</p>
            </div>
            <div className='sellwithusImg'>
                <Image src="./assets/images/equipment-banner.png" />
            </div>
        </div>
  </section>
  );
}

export default SellMyEquipment;
