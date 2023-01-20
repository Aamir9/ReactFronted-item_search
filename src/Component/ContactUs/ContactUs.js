import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm/ContactForm";
import "./ContactUs.css";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function ContactUs() {
  return (
    <>
      <div>
        <Header />
        <div className="d-margin pt-2">
          <Container>
            <div className="contactBanner">
              <h3>Contact Us</h3>
            </div>
            <ContactForm />
            {/* <ContactUsBanner /> */}
          </Container>
        </div>
        <Footer />
      </div>
    </>
      );
}

export default ContactUs;