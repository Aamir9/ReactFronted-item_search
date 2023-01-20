import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axiosClient from "../../../axiosClient";

import "./CartDeliveryInfo.css";


function CartDeliveryInfo() {

  const userData = JSON.parse(localStorage.getItem('login'));

  const us_states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  const [formValues, setFormValues] = useState({
    companyName: '',
    email: '',
    contactName: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States'
  });
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    await getShippingInfo();
  }
  async function getShippingInfo() {
    var getData = await axiosClient.get("getShippingInfoByUserId/" + Number(userData.user.id));
    if (getData != null && getData.id > 0) {

      console.log("data info ======>>", getData)
      setFormValues({
        ...formValues,
        ["companyName"]: getData.companyName,
        ["email"]: getData.email,
        ["contactName"]: getData.contactName,
        ["phoneNumber"]: getData.phoneNumber,
        ["address1"]: getData.address1,
        ["address2"]: getData.address2,
        ["city"]: getData.city,
        ["state"]: getData.state,
        ["zip"]: getData.zip_PostalCode,
        ["country"]: getData.country,

      });

    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async event => {
    event.preventDefault();

    if (formValues.companyName === '') {
      setErrorMessage('Please enter a company name ');
      return;
    }

    if (validateEmail(formValues.email) == false) {
      setErrorMessage('Please enter a valid email ');
      return;
    }
    if (formValues.email === '') {
      setErrorMessage('Please enter a valid email ');
      return;
    }

    if (formValues.phoneNumber === '') {
      setErrorMessage('Please enter a phoneNumber ');
      return;
    }

    if (formValues.address1 === '') {
      setErrorMessage('Please enter a address1 ');
      return;
    }

    if (formValues.city === '') {
      setErrorMessage('Please enter a city ');
      return;
    }


    if (formValues.state === '') {
      setErrorMessage('Please enter a state ');
      return;
    }

    if (formValues.zip === '') {
      setErrorMessage('Please enter a zip / postcode code ');
      return;
    }

    setErrorMessage('');
    await saveAndUpdateShippingInfo();

  };

  async function saveAndUpdateShippingInfo() {
    var body = {
      "id": 0,
      "companyName": formValues.companyName,
      "email": formValues.email,
      "contactName": formValues.contactName,
      "phoneNumber": formValues.phoneNumber,
      "address1": formValues.address1,
      "address2": formValues.address2,
      "city": formValues.city,
      "state": formValues.state,
      "zip_PostalCode": formValues.zip,
      "country": formValues.country,
      "userId": userData.user.id,
    };
    await axiosClient.post("saveShippingInfo", body);
  }

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleStateChange = (value) => {
    setFormValues({
      ...formValues,
      ['state']: value
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <Col lg={12}>
          <label htmlFor="deliverycheckbox" className="black-custom-checkbox">
            <input type="checkbox" name="" value="" id="deliverycheckbox" />
            <span>
              <Icon icon="charm:tick" />
            </span>
            <p>Delivery Information</p>
          </label>
        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formValues.companyName}
              onChange={handleChange}
            />
          </div>

        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>Contact Name</label>
            <input
              type="text"
              name="contactName"
              value={formValues.contactName}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={12}>
          <div className="form-input">
            <label>Address 1</label>
            <input
              type="text"
              name="address1"
              value={formValues.address1}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={12}>
          <div className="form-input">
            <label>Address 2 (optional)</label>
            <input
              type="text"
              name="address2"
              value={formValues.address2}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={6}>

          <label>State</label>
          <br></br>
          <select className='input-form' value={formValues.state}
            onChange={(event) => handleStateChange(event.target.value)} >
            <option value={''} key={''}>Select State</option>
            {us_states && (
              us_states.map(item => (
                <option value={item} key={item} >
                  {item}
                </option>)
              )
            )
            }
          </select>
        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>Zip / Postal Code</label>
            <input
              type="text"
              name="zip"
              value={formValues.zip}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="form-input">
            <label>Country</label>
            <input disabled value={'United States'} type="text" />
          </div>
        </Col>
        <Col>
          <button className="btn btn-blue">Save & Continue</button>
        </Col>
        <Col lg={12}>
          <div>{errorMessage && <b style={{ color: 'red' }}>{errorMessage}</b>}</div>
        </Col>
      </Row>

    </form>
  );
}

export default CartDeliveryInfo;
