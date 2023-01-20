import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CartDeliveryInfo from "./CartDeliveryInfo/CartDeliveryInfo";
import CartProductInfo from "./CartProductInfo/CartProductInfo";
import PriceCartBox from "./PriceCartBox/PriceCartBox";
import "./ShoppingCart.css";
import _ from 'lodash';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {
  getTotals,
} from "../Slices/CartSlice";
import { useDispatch } from "react-redux";

function ShoppingCart() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [seed, setSeed] = useState(Math.random());
  var cartItems = JSON.parse(localStorage.getItem('cart_items'));

  var totalCount = 0;
  if (cartItems && cartItems.length > 0) {
    totalCount = cartItems.length;
  }

  const RemoveAddCart = (selectedItem) => {

    var cartItems = JSON.parse(localStorage.getItem('cart_items'));
    if (cartItems != null) {

      var index = _.findIndex(cartItems, function (o) { return o.id == selectedItem.id; });
      if (index > -1) {
        _.remove(cartItems, function (i) { return i.id == selectedItem.id; });
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
        setSeed(Math.random());
        dispatch(getTotals());

      }

    }



  }

  const handlePackgeChange = (selectedItem ,val)=>{

    var cartItems = [];
    const arr = val.split(' ');
    const price = parseInt(arr[arr.length - 1].replace('$', ''));

    cartItems = JSON.parse(localStorage.getItem('cart_items'));
    if (cartItems != null) {

     
      var index = _.findIndex(cartItems, function (o) { return o.id == selectedItem.id; });
      if (index > -1) {
        _.remove(cartItems, function (i) { return i.id == selectedItem.id; });
        selectedItem.selectedPackingType = val;
        selectedItem.selectedPackingPrice = price;
        cartItems.push(selectedItem);
        // localStorage.removeItem('cart_items');
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
        setSeed(Math.random());
      dispatch(getTotals());
      }
      
    }
  }
   
  return (
    <div>
      <Header />
      <div className="d-margin pt-3">
        <Container>
          <Link to="/" className="my-3 d-block d-flex align-items-center">
            <Icon icon="bi:arrow-left" className="me-2" /> Continue Shopping
          </Link>
          <h3 className="checkout-title">Shopping Cart</h3>
          <p className="checkout-description">You have {totalCount} items in your cart</p>
          <Row>
            <Col xl={9} lg={8}>
               {cartItems != null && cartItems != undefined && cartItems.map((product) => (
                <CartProductInfo 
                 handlePackgeChange={handlePackgeChange}
                 RemoveAddCart={RemoveAddCart}
                 key={seed + product.id + product.quantity} 
                 item={product} />
              ))}

              <CartDeliveryInfo />
            </Col>
            <Col xl={3} lg={4}>
              <PriceCartBox />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />

    </div>
  );
}

export default ShoppingCart;
