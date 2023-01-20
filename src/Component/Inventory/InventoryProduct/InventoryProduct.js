import './InventoryProduct.css';
import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {
  handleAddCart
} from "../../Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function InventoryProduct(props) {

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
    navigate(`/InventoryDetail/${props.productDetail.id}`, { state: { id: props.id } });
  }

  return (
    <div className='productItem-wrap'>
      {(() => {
        if (props.productDetail.coverImageURL) {
          return <div className='productItem-Img' dangerouslySetInnerHTML={{ __html: props.productDetail.coverImageURL }}>
          </div>
        }
        else {
          return <div className='productItem-Img'> <Image src='/assets/images/not-found.png' />  </div>
        }

      })()}

      <div className='productItem-Info'>
        <Link to="/" className="heart-Ico heart-Ico2">
          <Icon icon="akar-icons:heart" />
        </Link>

        <h4 className=" title_link" onClick={() => { detailPage() }}>{props.productDetail.description}</h4>
        <ul className='advertising-wrap'>
          {
            props.productDetail.industryName != null && (
              <li><Link to="/">{props.productDetail.industryName}</Link></li>
            )
          }
          {
            props.productDetail.categoryName != null && (
              <li><Link to="/">{props.productDetail.categoryName}</Link></li>
            )
          }
          {
            props.productDetail.typeName != null && (
              <li><Link to="/">{props.productDetail.typeName}</Link></li>
            )
          }
        </ul>
        <ul className='list-wrap'>
          <li><p><strong>Located:</strong> {props.productDetail.location}</p></li>
          <li><p><strong>Category:</strong>  {props.productDetail.categoryName} </p></li>

          <li><p><strong>New Replacement Cost :</strong> {props.productDetail.newReplacementCostId}</p></li>
        </ul>

        <h5> ${props.productDetail.salePrice}</h5>
        <div className='btn-wrap'>
          <a className='btn btn-blue' onClick={() => buyNow(props.productDetail)} >Buy Now</a>
          <Link to={`/InventoryDetail/${props.productDetail.id}`} className='btn btn-blue'>Make an Offer</Link>
          <i></i>
          <Link to="/" className='btn btn-blue btn-arrow'><Icon className='me-2' icon="fluent:call-16-filled" /> Call Us</Link>
          <Link to="/" className='btn btn-blue btn-arrow'><Icon className='me-2' icon="ic:round-email" /> Email Us</Link>
        </div>
      </div>
    </div>
  );
}

export default InventoryProduct;
