import HomeBanner from "./HomeBanner/HomeBanner";
import "./HomePage.css";
import HomeProductSection from "./HomeProductSection/HomeProductSection";
import ProjectCounter from "./ProjectCounter/ProjectCounter";
import React, {  useState } from "react";
import { Container } from "react-bootstrap";
import OurServices from "./OurServices/OurServices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function HomePage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div> 
    <Header />
    <div className="d-margin">
      <Container>
        <HomeBanner />
        <HomeProductSection />
        {/* <EquipmentToolSection /> */}
        {/* <AboutUs /> */}
        {/* <SellWithUsBanner /> */}
      </Container>
      <OurServices />
      <ProjectCounter />
    </div>
         <Footer />
         </div>
  );
}

export default HomePage;
