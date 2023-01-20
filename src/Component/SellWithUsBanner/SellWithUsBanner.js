import { Icon } from '@iconify/react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SellWithUsBanner.css';
import React from 'react';

function SellWithUsBanner() {
    return (
        <section className='sellwithusSection'>
            <Container>
                <div className='bg-white'>
                    <div className='sellwithusInfo'>
                        <h4>Sell with us</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        <Link className='btn btn-blue btn-arrow'>View Detail <Icon className="ms-2" icon="akar-icons:arrow-right" /></Link>
                    </div>
                    <div className='sellwithusImg'>
                        <Image src="./assets/images/sellwithus-banner.png" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default SellWithUsBanner;
