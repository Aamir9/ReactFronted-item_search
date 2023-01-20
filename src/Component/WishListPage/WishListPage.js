import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import './WishListPage.css';
import ProductCard from '../ProductCard/ProductCard'
import * as appConstants from '../../constants'
import { Link } from 'react-router-dom';

class WishListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            RecentProductList: [],
            error: null,
            isLoaded: false,
            toggleSidebar: false,
        };

    }

    componentDidMount() {
        this.recentItemsList();
    }

    recentItemsList() {
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(appConstants.baseUrl + "GetRecentItems", requestOptions)
            .then(response => response.json())
            .then(result =>
                this.setState(
                    {
                        RecentProductList: result,
                        isLoaded: true,
                    }))
            .catch(error =>
                this.setState({
                    isLoaded: true,
                    error
                })
            );

    }

    render() {
        const { error, isLoaded, RecentProductList } = this.state;

        return (
            <div className="WishListPage d-margin">
                <Container>
                    <div className='Wishlist-main'>
                        <div className='Wishlist_Header'>
                            <h3>My Wishlist</h3>
                            <Link to="#">Clear All</Link>
                        </div>
                        <Row className='homePageRow'>
                            {
                                RecentProductList.map(item => (
                                    <Col key={item.id} xl={3} lg={4} md={6}>
                                        <ProductCard RecentProductList={item} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default WishListPage;
