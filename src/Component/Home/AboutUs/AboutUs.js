import { Icon } from '@iconify/react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import React from 'react';

function AboutUs() {
    return (
        <section className="AboutUsSection">
                <div className='AboutUSMainWrap'>
                    <div className='AboutUsTopWrap'>
                        <div className='AboutImg'>
                            <Image src='./assets/images/about-01.png' />
                        </div>
                        <div className='AboutInfo'>
                            <p>Inventory management helps companies identify which and how much stock to order at what time. It tracks inventory from purchase to the sale of goods. The practice identifies and responds to trends to ensure there’s always enough stock to fulfill customer order and proper warning of a shortage.</p>
                            <Link to="/" className='btn btn-blue'>Learn More <Icon icon="bytesize:arrow-right" className='ms-2' /></Link>
                        </div>
                    </div>
                    <div className='AboutUsBottomWrap'>
                        <div className='AboutInfo'>
                            <h3>Who we are ?</h3>
                            <p>We respect the individual needs and concerns of every customer and work to exceed all expectations. The close relationships we have built and maintained over the last half century have grown from our ability to create and enact the best solutions for a wide array of clients. Whether your company is a three-man job shop, or a Fortune 500 manufacturer, and needs to sell a single asset or liquidate an entire facility, Perfection can successfully manage it all.</p>
                        </div>
                        <div className='AboutImg'>
                            <Image src='./assets/images/about-02.png' />
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default AboutUs;
