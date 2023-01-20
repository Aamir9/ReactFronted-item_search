import { Icon } from "@iconify/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartProductInfo from "../ShoppingCart/CartProductInfo/CartProductInfo";
import PriceCartBox from "../ShoppingCart/PriceCartBox/PriceCartBox";
import PaymentCardoption from "./PaymentCardoption/PaymentCardoption";

import "./PaymentCart.css";

function PaymentCart() {
  return (
    <>
      <div className="d-margin pt-3 pb-5">
        <Container className="pb-5">
        <Link to="/" className="my-3 d-block d-flex align-items-center">
            <Icon icon="bi:arrow-left" className="me-2" /> Continue Shopping
          </Link>
          <h3 className="checkout-title">Shopping Cart</h3>
          <p className="checkout-description">You have 1 items in your cart</p>
          <Row>
            <Col xl={9} lg={8}>
                <CartProductInfo />
                <PaymentCardoption /> 
            </Col>
            <Col xl={3} lg={4}>
                <PriceCartBox />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PaymentCart;
