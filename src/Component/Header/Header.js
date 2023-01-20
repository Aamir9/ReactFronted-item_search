import { Navbar, Image, Nav, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Link,useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import React ,{useState} from 'react';
function Header() {


  const navigate = useNavigate();
  var loginData = JSON.parse(localStorage.getItem("login"));
  if (loginData != null) {
  }

  const handelLogout = () => {
    localStorage.removeItem("login")
    navigate('/Inventory');
  }
 
  const [headerClassName, setHeaderClassName] = useState('');

  const handleScroll = (headerClassName) => {
      if (headerClassName !== 'fixed' && window.pageYOffset >= 100) {
          setHeaderClassName('fixed');
      } else if (headerClassName === 'fixed' && window.pageYOffset < 100) {
          setHeaderClassName('');
      }
  }

  React.useEffect(() => {
      window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value

  const handelProfile = () => {

    navigate('/Profile');
  }
  return (
    <header>
    <div className="topbar">
        <div className="container">
          <ul>
            <li><Link to="/"><Icon icon="ion:mail" /> <i>sales@kingsurplus.com</i></Link  ></li>
            <li><Link to="/"><Icon icon="fluent:call-16-filled" /><i>830-995-5000</i></Link ></li>
            <li className='TopBarFacebook'><Link to="/"><Icon icon="ic:outline-facebook" /></Link ></li>
            {(() => {

              if (loginData != null && loginData.login) {
                return  <li>
                  <a className='logOut' onClick={handelLogout}>Log Out</a >
                  {/* <a className='logOut'> Profile </a > */}
                   </li>
               }

              
              else {
                return <li><Link to="/Login">LOGIN/SIGNUP</Link ></li>
              }

            })()}

          </ul>
        </div>
      </div>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="" expand={expand}>
          <Container>
            <Navbar.Brand href="#"><Image src="./assets/images/logo.png" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/">Home</Link>
                  <Link to="/Inventory">Inventory</Link>
                  <Link to="/Aboutus">About Us</Link>
                  <Link to="/ContactUs">Contact Us</Link>
                  <Link to="/SwitchtoSell">Switch to sell</Link>
                  {/* <Link to="/Carrier">Carrier</Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <ul className="header-btn-wrap">
              <li>
                <label htmlFor="header-search" className="header-search">
                  <input type="text" name="search" id="header-search" />
                  <Link to="/" className="search-icon"><Icon icon="akar-icons:search" /></Link>
                </label>
              </li>
              {loginData != null && loginData.login && (
                <>
                <li>
                  <Link to="/ShoppingCart" className="cart-header"><Icon icon="akar-icons:cart" /></Link>
                                   

                </li>
                <li>
                   <a className="cart-header"   onClick={handelProfile} >
                   <Icon  icon="mdi:user"  />
                    </a> 

                </li>
                </>
              )}

            </ul>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header;