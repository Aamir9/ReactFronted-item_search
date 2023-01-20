import { Icon } from "@iconify/react";
import { Col, Image, Row } from "react-bootstrap";
import "./HomeBanner.css";
import React, { useRef} from "react";
import Category from "../../Category/Category";
import Type from "../../Type/Type";
import Industry from "../../Industry/Industry"
import { Link,useNavigate } from 'react-router-dom';

function HomeBanner() {
  const navigate = useNavigate();
  const form1 = useRef(null);
  var payload ={};

  const handleChangeIndustry = (id) => {
    if (Number(id) > 0) {
      payload.IndustryId = Number(id);
      payload.IsGlobelSearch = true;
    }
  }
  const handleChangeCategory = (id) => {
    if (Number(id) > 0) {
      payload.CategoryId = Number(id);
      payload.IsGlobelSearch = true;
    }
  }


  const handleChangeType = (id) => {
    if (Number(id) > 0) {
      payload.TypeId = Number(id);
      payload.IsGlobelSearch = true;
    }
  }

  const handleSearchClickEvent = () => {
    const form = form1.current;
    var queryText = form['searchBox'].value;

    if (queryText != "" && queryText != null) {
        payload.TextSearch = queryText;
        payload.IsGlobelSearch = true;
     }

     navigate('/Inventory',{state:{payload:payload}} );

  }

    return (
      <section className="home-banner-section">
        <Row className="HomeBanner-row">
          <Col lg={7}>
            <Row>
              <Col lg={4}>
              <Industry onChangeIndustry={handleChangeIndustry} ></Industry>
              </Col>
              <Col lg={4}>
              <Category onChangeCategory={handleChangeCategory}></Category>
              </Col>
              <Col lg={4}>
              <Type onChangeType={handleChangeType}></Type>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <form ref={form1}>
              <div className="searchbar mb-2">
                <input placeholder="Search equipment and solutions" name={'searchBox'} />
                <span><Icon icon="uil:search" /></span>
                <button className="btn btn-blue" type="button" onClick={handleSearchClickEvent} >
                  Search
                </button>
              </div>
            </form>
          </Col>
          <Col lg={7}>
            <div className="HBanner-01">
              <Image src="./assets/images/HBanner-01.png" />
              <div className="HBanner-info-01">
                <h2>Surplus Superstores <br /> Since 1970.</h2>
                <Link to="/" className="btn btn-white">
                  Browse our Inventory
                </Link>
              </div>
            </div>
            <div className="HBanner-02">
              <Image src="./assets/images/HBanner-02.png" />
              <div className="HBanner-info-02">
                <h3>Buy Now | Make Offer Strike</h3>
                <Link to="/" className="btn btn-red btn-auction">
                  <Icon icon="bi:arrow-right" />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="HBanner-03 HBanner-Color">
              <Image src="./assets/images/HBanner-03.png" />
              <div className="HBanner-info">
                <h5>SELL NOW</h5>
                <Link to="/">
                  Surplus Equipment to sell <Icon icon="bi:arrow-right" />
                </Link>
              </div>
            </div>
            <div className="HBanner-03">
              <Image src="./assets/images/HBanner-04.png" />
              <div className="HBanner-info">
                <h5>RENT YOUR EQUIPMENT</h5>
                <Link to="/">
                  Equipment Share <Icon icon="bi:arrow-right" />
                </Link>
              </div>
            </div>
            <div className="HBanner-03">
              <Image src="./assets/images/HBanner-05.png" />
              <div className="HBanner-info">
                <h5>BUY OVER TIME</h5>
                <Link to="/inventory">
                  Need Machinery or equipment now but pay over time? <Icon icon="bi:arrow-right" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    );
  }


export default HomeBanner;
