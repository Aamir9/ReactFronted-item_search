import ImageGallery from "react-image-gallery";
import "./InventoryDetail.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { json, Link, useParams,useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  handleAddCart,
} from "../Slices/CartSlice";
import { useDispatch } from "react-redux";

function InventoryDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [gallery, setGallery] = useState({});
  const [relatedItems, setRelatedItems] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getItemById = async () => {
      try {
        const res = await axiosClient.get("GetItemById/" + Number(id));
        if (res.qbRecordId) {

          const imgList = await axiosClient.get(
            "GetItemImageGallery/" + Number(res.qbRecordId)
          );
          setGallery({ data: imgList });
        }
        if (res.relatedCategoryId) {
          const relatedData = await axiosClient.get(
            "GetRandomItemByCategory/" + Number(res.relatedCategoryId)
          );
          setRelatedItems({ data: relatedData });
        }

        setData({ item: res });
      } catch (error) {
        console.log(error);
      }
    };

    getItemById();
  }, []);

function addCart(selectedItem){
  
  dispatch(handleAddCart(selectedItem));
}

function buyNow(selectedItem){
  
  var loginData = JSON.parse(localStorage.getItem("login"));

  if (loginData == null) {
    navigate('/login');

  } else {
    dispatch(handleAddCart(selectedItem));
    navigate('/ShoppingCart');
  }

}
  
  return (
    <>
      <Header />
      {data && data.item && (
        <div className="d-margin pt-2">
          <Container>
            <Row>
              <Col lg={6}>{setSlider()}</Col>
              {itemDescription()}
            </Row>
            {inspectionReport()}

            <div className="similar-product">
              <h4>Similar Items Nearby</h4>
              <Row>
                {relatedItems &&
                  relatedItems.data &&
                  relatedItems.data.length > 0 &&
                  relatedItems.data.map((product) => (
                    <Col key={product.id} lg={3}>
                      <ProductCard RecentProductList={product} />
                    </Col>
                  ))}
              </Row>
            </div>
          </Container>
        </div>
      )}
      <Footer />
     
    </>
  );

  function setSlider() {

    if (gallery && gallery.data && gallery.data.length > 0) {
      return (
        <div className="product-gallery-img">
          <ImageGallery items={gallery.data} />

          <ul className="product-share-icons">
            <li>
              <Link to="/">
                <Icon icon="fluent:print-20-filled" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon icon="fluent:mail-16-filled" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon icon="ant-design:twitter-outlined" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon icon="bxl:facebook-circle" />
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return <Image src="../assets/images/not-found.png" />;
    }
  }

  function itemDescription() {
    if (data && data.item) {
      return (
        <Col lg={6}>
          <div className="product-gallery-info">
            {/* <h3> 2013 Skyjack SJ3219 Scissor Lift</h3> */}
            <h3>{data.item.title}</h3>
            <ul className="product-cate-tag">
              {data.item.categoryName != null &&
                data.item.categoryName == "" && (
                  <li>{data.item.categoryName}</li>
                )}

              {data.item.typeName != null && data.item.typeName == "" && (
                <li>{data.item.typeName}</li>
              )}
            </ul>
            {/* <ul className="rating-wrap">
                <li className="text-red"><Icon icon="el:fire" /> 6 sold in last 24 hours</li>
                <li> <span className="text-yellow"><Icon icon="bi:star-fill" /><Icon icon="bi:star-fill" /><Icon icon="bi:star-fill" /><Icon icon="bi:star-fill" /><Icon icon="bi:star-half" /></span> 311 product ratings</li>
            </ul> */}
            {/* <p>When you need ample working space and lifting capacity, this is the most efficient, productive and safe scissor lift available. It is durable, lightweight and narrow. It is also equipped with pothole guards to protect the equipment and operator from tipping, and will fit through a single-size doorway.</p> */}
            <p>{data.item.description}</p>
            <h5>Condition: {data.item.condition}</h5>
            <div className="qty-wrap">
              <h6>Avaliable Qty: {data.item.quantity}</h6>
            </div>
            <hr />

            <h4>Payment Details</h4>
            {/* <del>$18,730 USD</del> */}
            <h2>${data.item.salePrice}</h2>
            <ul className="return-policy-wrap">
              <li>
                <span>Returns:</span>{" "}
                <p>
                  30 day returns | Buyer pays for return shipping |{" "}
                  <Link to="/">See details</Link>
                </p>
              </li>
              <li>
                <span>Delivery:</span>{" "}
                <p>
                  Estimated between Wed, Aug 24 and Thu, Sep 1 to 395007 | Ships
                  today if paid within 10 hrs 0 mins{" "}
                  <Link to="/">See details</Link>
                </p>
              </li>
              <li>
                <span>Payment:</span>{" "}
                <i>
                  <Image src="/assets/images/cards.png" />
                </i>
              </li>
            </ul>
            <div className="btns-wrap">
            <a type="button" onClick={() => buyNow(data.item)} className="btn btn-blue">
                Buy Now
              </a>

              <a type="button" onClick={() => addCart(data.item)} className="btn btn-blue">
                Add To Cart
              </a>
              <ToastContainer />
              <Link to="/" className="btn btn-blue btn-icon">
                <Icon icon="fluent:call-12-filled" className="me-2" />
                Call Us
              </Link>
              <Link to="/" className="btn btn-blue btn-icon">
                <Icon icon="ic:round-email" className="me-2" />
                Email Us
              </Link>
            </div>
            <Link
              className="btn btn-blue btn-block w-100 mt-3"
              style={{ maxWidth: "505px" }}
            >
              Make an offer
            </Link>
          </div>
        </Col>
      );
    }
  }

  function N_AIfNull(val) {
    if (
      val ||
      val == null ||
      val.toString() == "" ||
      val.toString() == "0" ||
      val.toString() == "[]" ||
      val == undefined
    ) {
      return <p>N/A</p>;
    } else {
      return <p>{val}</p>;
    }
  }
  function inspectionReport() {
    if (data && data.item) {
      return (
        <div className="inspection-info">
          <Row>
            <Col lg={12}>
              <div className="bg-white">
                <h3>INSPECTION REPORT</h3>
              </div>
            </Col>
            <Col lg={12}>
              <div className="bg-white report-info">
                <h5>Report Info</h5>
                <Row>
                  <Col lg={6}>
                    <div className="report-detail-item">
                      <h6>DESCRIPTION</h6>
                      <h6>DETAILS</h6>
                    </div>
                    <div className="report-detail-item">
                      <p>Manufacturer : </p>
                      <p>{N_AIfNull(data.item.menufacturer)}</p>
                    </div>
                    <div className="report-detail-item">
                      <p>Phase: </p>
                      <p>{N_AIfNull(data.item.phase)}</p>
                    </div>
                    <div className="report-detail-item">
                      <p>Length (Inches): </p>
                      <p>{N_AIfNull(data.item.lengthInches)}</p>
                    </div>
                    <div className="report-detail-item">
                      <p>Estimated Total Weight: </p>
                      <p>{N_AIfNull(data.item.estimatedTotalWeight)}</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="report-detail-item">
                      <h6>DESCRIPTION</h6>
                      <h6>DETAILS</h6>
                    </div>
                    <div className="report-detail-item">
                      <p>Width (Inches) : </p>
                      <p>{N_AIfNull(data.item.widthInches)}</p>
                    </div>
                    <div className="report-detail-item">
                      <p>Height (Inches) : </p>
                      <p>{N_AIfNull(data.item.heightInches)}</p>
                    </div>
                    <div className="report-detail-item">
                      <p>Weight (LBS) : </p>
                      <p>{N_AIfNull(data.item.weightLBS)}</p>
                    </div>
                    <div className="report-detail-item">
                      <p>Estimated Packaging Weight: </p>
                      <p>{N_AIfNull(data.item.estiamtedPackaginWeight)}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default InventoryDetail;
