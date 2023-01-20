import React, { useState, useEffect } from "react";
import "./PriceCartBox.css";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../../Stripe/Checkout";
import axiosClient from "../../../axiosClient";
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import {
  getTotals,
} from "../../Slices/CartSlice";



function PriceCartBox() {

  const [stripe, setStripe] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem('login'));
  const [totalAmount,setTotalAmount] = useState(null);
  const [shippingInfo,setShippingInfo] = useState(null);
  const [tax,setTax] = useState(0);
 

  const appsettings = async () => {
    var stripKey = await axiosClient.get("appsettings");
    if (stripKey) {
      setStripe(loadStripe(stripKey.PublicKeyStrip));
    }
  }

  const StripCreateIntent = async () => {

    if (totalAmount && totalAmount > 0) {
      var body = {
        "amount": Number(totalAmount),
        "email": userData.user.email,
      };
      var clientSecret = await axiosClient.post(
        "StripCreateIntent", body)
      setClientSecret(clientSecret);
    }
  }

  useEffect(() => {
    getDetail();
    appsettings();

  }, []);

  useEffect(() => {
    getDetail();
   

  }, []);


 
  const getDetail = async () => {
    await getShippingInfo();
  }
  async function getShippingInfo() {
    var shipData = await axiosClient.get("getShippingInfoByUserId/" + Number(userData.user.id));
    if (shipData != null && shipData.id > 0) {
      setShippingInfo({data:shipData});
    }
  }


   useEffect(() => {
    
    dispatch(getTotals());

  
    if( userData.user.examet != null && userData.user.examet == false &&
      shippingInfo && shippingInfo.data && shippingInfo.data.state == "Texas"){
      setTax(cart.cartTotalTax);
      setTotalAmount( cart.cartTotalTax + cart.cartTotalAmount + cart.cartPackagingAmount)
    }
    else{
      setTax(0);
      setTotalAmount( cart.cartTotalAmount + cart.cartPackagingAmount)
    }
    
   // StripCreateIntent();
   }, [cart,dispatch,shippingInfo,userData]);

  return (
    
    <ul className="PriceboxInfo">
      <li>
        <span>Sub Total</span>
        <h6>${cart.cartTotalAmount} USD</h6>
      </li>

      <li>
        <span>Tax charges</span>
        <h6>${tax} USD</h6>
      </li>

      <li>
        <span>Packaging charges</span>
        <h6>${cart.cartPackagingAmount} USD</h6>
      </li>
      <hr />
      
      <li>
        <span>Total</span>
        <h4>${totalAmount} USD</h4>
      </li>
      <li>
        {clientSecret && stripe && (
          <Elements stripe={stripe} options={{ clientSecret }}>
            <Checkout stripId={clientSecret} />
          </Elements>

        )}

      </li>
    </ul>
    
  );
} 

export default PriceCartBox;
