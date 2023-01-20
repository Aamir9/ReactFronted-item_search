import { Icon } from "@iconify/react";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import React from 'react';
import _ from 'lodash';
import {
  handleAddCart
} from "../Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";



function ProductCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function buyNow(selectedItem) {

    var loginData = JSON.parse(localStorage.getItem("login"));

    if (loginData == null) {
      navigate('/login');

    } else {
      dispatch(handleAddCart(selectedItem));
      navigate('/ShoppingCart');
    }

  }

  function detailPage() {
    navigate(`/InventoryDetail/${props.RecentProductList.id}`, { state: { id: props.id } });
  }
  return (
    <div className="ProductCardItem">
      <div className="ProductImg">
        {(() => {

          if (props.RecentProductList.coverImageURL) {
            return <div className="img-fluid" style={{ height: '100%' }} dangerouslySetInnerHTML={{ __html: props.RecentProductList.coverImageURL }} />;
          }
          else {
            return <Image src="./assets/images/not-found.png" />;
          }

        })()}
        {props.RecentProductList.categoryName != "" && props.RecentProductList.categoryName != null && (
          <Link to="/" className="whiteTag">{props.RecentProductList.categoryName}</Link>
        )}

        <Link to="/" className="heart-Ico">
          <Icon icon="akar-icons:heart" />
        </Link>
        <Link to="/" className="heart-Ico">
          <Icon icon="mdi:close" />
        </Link>
      </div>
      <div className="ProductInfo">

        <h5 className="title" >{props.RecentProductList.description}</h5>

        <h6>

          $ {props.RecentProductList.salePrice}
        </h6>
        <div className="ProductBtnWrap">
          <a onClick={() => buyNow(props.RecentProductList)} className="btn btn-blue">
            Buy Now
          </a>

          <Link to={`/InventoryDetail/${props.RecentProductList.id}`} className="btn btn-blue">
            Make an Offer
          </Link>
        </div>
      </div>
    </div>
  );


}
export default ProductCard;
