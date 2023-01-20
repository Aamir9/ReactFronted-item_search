import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";
import "./CartProductInfo.css";
import _ from 'lodash';
import 'react-toastify/dist/ReactToastify.css';
import { getTotals } from "../../Slices/CartSlice";
import { useDispatch } from "react-redux";



const CartProductInfo = (props) => {

  const dispatch = useDispatch();
  var PackagingList = props.item.packagingCostData.split(';');
  

  function handleQtyCart(selectedItem, selectedQty) {
    var cartItems = [];
    cartItems = JSON.parse(localStorage.getItem('cart_items'));
    if (cartItems != null) {

      var index = _.findIndex(cartItems, function (o) { return o.id == selectedItem.id; });
      if (index > -1) {
        _.remove(cartItems, function (i) { return i.id == selectedItem.id; });
        selectedItem.selectedQty = selectedQty;
        cartItems.push(selectedItem);
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
      }
      dispatch(getTotals());
    }

  }

  
  return (
    <div className="product-cart-box-wrap">
      {(() => {
        if (props.item.coverImageURL != null) {
          return <div className='productItem-Img' dangerouslySetInnerHTML={{ __html: props.item.coverImageURL }}>
          </div>
        }
        else {
          return <div className='productItem-Img'> <Image src='/assets/images/not-found.png' />  </div>
        }

      })()}

      <div className="product-cart-info">
        <span>Cat Class: 300-2999</span>
        <h4>{props.item.description}</h4>
        <h6>
          <i>Sale Price : </i> ${props.item.salePrice} USD
        </h6>

         {/* <p> {props.item.selectedPackingType}</p>
         <p> {props.item.selectedPackingPrice}</p> */}

        <select className='mb-3' value={props.item.selectedPackingType} 
        onChange={(event) => props.handlePackgeChange(props.item,event.target.value)}  >
          <option value={''} key={''}>Select Packaging</option>
          {PackagingList && (
            PackagingList.map(item => (
              <option value={item} key={item} >
                {item}
              </option>)
            )
          )
          }
        </select>

        <div className="qtyNumber">
          <i>Qty : </i>
          <QuantityPicker value={props.item.selectedQty} min={1} max={props.item.quantity}
            onChange={(value) => handleQtyCart(props.item, value)} />
        </div>
        <div className="product-btn-wrap">
          <Link className="btn btn-blue btn-save-letter">Save for later</Link>
          <Link className="btn btn-red btn-cart-delete" onClick={() => props.RemoveAddCart(props.item)}>Delete</Link>
        </div>
      </div>

    </div>
  );

}

export default CartProductInfo;
