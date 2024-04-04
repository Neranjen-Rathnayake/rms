import React, { useState } from 'react';
import { Navbar, Nav, Image, Offcanvas, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import './WaiterNavBar.css';

const WaiterNavBar = () => {
  const location = useLocation();
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-lg-none d-sm-block pb-5">
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="#home" className="cont">
            <Image src={Logo} className="NavBarLogo ps-4" alt="" style={{ width: "200px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasExample" onClick={handleShow} className='me-5'>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Offcanvas show={show} onHide={handleClose} placement="end" responsive="lg" className="custom-offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="custom-offcanvas-body">
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/WaiterDashboard" className={`nav-link ${isActiveLink("/WaiterDashboard") ? "activeLink" : ""}`} onClick={handleClose}>
                  <FontAwesomeIcon icon={faServer} className='ps-3' /> Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/OrderHistory" className={`nav-link ${isActiveLink("/OrderHistory") ? "activeLink" : ""}`} onClick={handleClose}>
                  <FontAwesomeIcon icon={faServer} className='ps-3' /> Order History
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </div>
    </div>
  );
};

export default WaiterNavBar;