import InventoryPoductSection from './InventoryroductSection/InventoryProductSection';
import './Inventory.css';
import SellWithUsBanner from '../SellWithUsBanner/SellWithUsBanner';
import React from 'react';
import {useLocation} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import uuid from 'react-uuid';

function Inventory() {
  const location = useLocation();

  var industryId  = 0;
  var payload = {};
  if(location && location.state){
    if(  location.state.industryId != null && location.state.industryId > 0){
      industryId = location.state.industryId;
    }

    if(location.state.payload && location.state.payload.IsGlobelSearch){
       payload = location.state.payload;
    }
  }
  
  return (
    <div> 
    <Header />
    <div className="d-margin pt-3 inventoryPage">
      {/* <div>{location.state.name}</div> */}
        <InventoryPoductSection key={uuid() }  payload={payload} />
        <SellWithUsBanner key={uuid() +1} />
    </div>
    <Footer />
         </div>
  );
}

export default Inventory;
