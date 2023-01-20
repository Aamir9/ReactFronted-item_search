import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Slices/CartSlice";
import axiosClient from "../../axiosClient";

import uuid from 'react-uuid';
import { json, Link, useParams,useNavigate } from "react-router-dom";



export default function Checkout(props) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let isFirstTime = false;

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    setIsProcessing(true);
    dispatch(clearCart())

    checkoutSaveDb();
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
         return_url: `${window.location.origin}/success`,
      },
    });

 
    console.log("errorr",error);

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  const checkoutSaveDb = async()  =>{
    var payload = {

    };
   
    if(isFirstTime = false){
      isProcessing(true);

    }
    try {
      //dispatch(getTotals())
      var SelectedItems = JSON.parse(localStorage.getItem('cart_items'));
      payload.cartList = [];

      SelectedItems.forEach(element => {
        var cart =
        {
          "id": Number(0),
          "itemId": Number(element.id) ,
          "qty": Number(element.selectedQty),
          "price": Number(element.salePrice)
        }
        payload.cartList.push(cart);
      });
      payload.shippingInformation = {
        "id": Number(0),
        "companyName": "",
        "email": "",
        "contactName": "",
        "phoneNumber": "",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "zip_PostalCode": "",
        "country": "",
        "userId": 0
      }
      payload.order = {
        "createdDate": "2022-12-25T17:14:44.075Z",
        "updatedDate": "2022-12-25T17:14:44.075Z",
        "orderTotal": Number(cart.cartTotalAmount),
        "OrderId": uuid().toString(),
        "totalTax": 0,
        "totalDiscount": 0,
        "shipmentCharges": 0,
        "shippingAddress": "",
        "shippingCharges": 0,
        "paymentMathod": "stripe",
        "stripePaymentID": props.stripId.toString,
        "payPalPaymentID": "",
        "wireTransferRef": "",
        "shippingProvider": "",
        "userId": 0

      };


      console.log("payload ========>>", payload)
      const res = await axiosClient.post("CheckOut", payload);
      console.log("log response")
      if (res) {
        isProcessing(false);
        isFirstTime = true;

      }
    } catch (error) {
      isProcessing(false);
      isFirstTime = true;

    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}  className="w-100">
      <PaymentElement id="payment-element" />
      <button  className="btn btn-blue btn-checkout mt-5 d-block w-100 "  style={{color:'white'}}
       disabled={isProcessing || !stripe || !elements || !cart.cartTotalAmount > 0} id="submit">
        <span id="button-text"    style={{color:'white'}}>
          {isProcessing ? "Processing ... " : "CheckOut"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <p id="payment-message lead">{message}</p>}
    </form>
  );
}