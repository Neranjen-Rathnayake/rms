import React from "react";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";

const WaiterSideBar = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleNav = () => {
    // Add your toggleNav logic here
  };

  return (
    <>
      {/* Navbar for mobile view */}
      
      {/* Sidebar for web view */}
      <div className="d-none d-lg-block">
        <Container fluid>
          <Row>
            <Col lg={2} sm={0} className="p-0">
              <div className="sideBarWrap">
                <div className="d-flex align-items-center justify-content-center m-1 pb-3">
                  <img src={Logo} className="sideBarLogo" alt="" />
                </div>
                <div className="m-3">
                  <Link to="/WaiterDashboard" className="linkWrap">
                    <div
                      className={`sideBarItem d-flex rounded-5 align-items-center justify-content-center px-3 mt-2 ${
                        isActiveLink("/WaiterDashboard") ? "activeLink" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faServer} />
                      <p className="m-2">Dashboard</p>
                    </div>
                  </Link>
                </div>
                <div className="m-3">
                  <Link to="/OrderHistory" className="linkWrap">
                    <div
                      className={`sideBarItem d-flex rounded-5 align-items-center justify-content-center px-3 mt-2 ${
                        isActiveLink("/OrderHistory") ? "activeLink" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faServer} />
                      <p className="m-2">Order History</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={10} sm={12} className="p-5 m-3">
              <div className="contentWrap" style={{ paddingTop: "100px" }}>
                {/* Your main content goes here */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WaiterSideBar;