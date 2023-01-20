import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import HomePage from "./Component/Home/HomePage";
import Inventory from "./Component/Inventory/Inventory";
import InventoryDetail from "./Component/InventoryDetail/InventoryDetail";
import ContactUs from "./Component/ContactUs/ContactUs";
import SwitchtoSell from "./Component/SwitchtoSell/SwitchtoSell";
import ShoppingCart from "./Component/ShoppingCart/ShoppingCart";
import PaymentCart from "./Component/PaymentCart/PaymentCart";
import Login from "./Component/LoginPage/Login";
import Signin from "./Component/SigninPage/Signin";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import VerifyAccount from "./Component/VerifyAccount/VerifyAccount";
import ForgotPassOtp from "./Component/ForgotPassOtp/ForgotPassOtp";
import ResetPassword from "./Component/ResetPassword/ResetPassword";
import Carrier from "./Component/Carrier/Carrier";
import AboutusPage from "./Component/AboutusPage/AboutusPage";
import Success  from "./Component/Stripe/Success";
import Cancel  from "./Component/Stripe/Cancel";
import WishListPage from "./Component/WishListPage/WishListPage";

import { Provider } from 'react-redux';
import store from "./Component/Store";
import Profile from "./Component/Profile/Profile";

function App() {
  
  // const data = useGlobalContext();
  return (
    <>
        <Provider store={store}> 
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/Inventory" element={<Inventory />}/>
           <Route path="/InventoryDetail/:id" element={<InventoryDetail />} />
           <Route path="/ContactUs" element={<ContactUs />} />
           <Route path="/SwitchtoSell" element={<SwitchtoSell />} />
           <Route path="/ShoppingCart" element={<ShoppingCart />} />
           <Route path="/PaymentCart" element={<PaymentCart />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Signin" element={<Signin />} />
           <Route path="/ForgotPassword" element={<ForgotPassword />} />
           <Route path="/VerifyAccount" element={<VerifyAccount />} />
           <Route path="/ForgotPassOtp" element={<ForgotPassOtp />} />
           <Route path="/ResetPassword" element={<ResetPassword />} />
           <Route path="/Carrier" element={<Carrier />} />
           <Route path="/Aboutus" element={<AboutusPage />} />
           <Route path="/wishlist" element={<WishListPage />} />
           <Route path="/success" element={<Success />} />
           <Route path="/cancel" element={<Cancel />} />
           <Route path="/Profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;