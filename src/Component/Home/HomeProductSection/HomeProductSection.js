import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import './HomeProductSection.css';
import ProductCard from '../../ProductCard/ProductCard';
import * as appConstants from '../../../constants'
import Category from '../../Category/Category'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import IndustryListView from '../../IndustyListView/IndustryListView'
import CX from 'classnames';

class HomeProductSection extends React.Component {

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

    doToggleSidebar = () => {
        console.log('call')
        this.setState({
            toggleSidebar: !this.state.toggleSidebar,
        })
    }
    render() {
        const { error, isLoaded, RecentProductList } = this.state;

        return (
            <div className="HomeProductSection">
                <div className='product-wrap'>
                    <div className={CX('product-sidebar', {'show': this.state.toggleSidebar})}>
                        <h5>Browse by Industries  </h5>
                        {/* toggleSidebar={this.toggleSidebar} */}
                        <IndustryListView  ></IndustryListView>
                    </div>
                    <div className='product-main-list'>
                        <div className='product-header-wrap'>
                            <h2>Our Recent Product</h2>
                            <Link to="#" onClick={() => this.doToggleSidebar()}><Icon icon="material-symbols:filter-list-rounded" /></Link>
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
                </div>
            </div>
        );
    }
}

export default HomeProductSection;
