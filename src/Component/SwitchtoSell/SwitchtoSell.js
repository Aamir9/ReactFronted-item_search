import React from "react";
import { Container } from "react-bootstrap";
import RentForm from "./RentForm/RentForm";
import RentProcess from "./RentProcess/RentProcess";
import SellMyEquipment from "./SellMyEquipment/SellMyEquipment";
import "./SwitchtoSell.css";
import SwitchtoSellBanner from "./SwitchtoSellBanner/SwitchtoSellBanner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function SwitchtoSell() {
  return (
    <div> 
    <Header />
     <div className="d-margin">
        <Container className="pt-2">
            <div className="contactBanner sellusBanner">
                <h3>Sell Us Your Used Equipment </h3>
            </div>
            <SellMyEquipment />
            <RentProcess /> 
            <RentForm />
        </Container>
     </div>
     <Footer />
         </div>
  );
}

export default SwitchtoSell;