import React from "react";
import { Col, Row } from "react-bootstrap";
import CardIcon from "../../img/Icon.png";
import './DashboardCards.css'
const DashboardCards = () => {
  return (
    <div>
      <Row className="mainRow">
        <Col lg={3}>
          <div className="cardBG">
            <Row className="p-2">
              <Col className="col-4 d-flex align-items-center justify-content-center">
                <img src={CardIcon} alt="" />
              </Col>
              <Col className="col-8">
                <p className="m-0 totalText">Total Card</p>
                <p>Rs.10,000/-</p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={3}>
          <div className="cardBG">
            <Row className="p-2">
              <Col className="col-4 d-flex align-items-center justify-content-center">
                <img src={CardIcon} alt="" />
              </Col>
              <Col className="col-8">
                <p className="m-0 totalText">Total Cash</p>
                <p>Rs.20,000/-</p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={3}>
          <div className="cardBG">
            <Row className="p-2"> 
              <Col className="cardText">
                <p className="m-0 totalText">Total Sales</p>
                <p className="m-0">Rs.30,000/-</p>
                <p className="m-0"><span className="percentage m-0">+23%</span>since last month</p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={3}>
          <div className="cardBG">
            <Row className="p-2">
              <Col className="col-4 d-flex align-items-center justify-content-center">
                <img src={CardIcon} alt="" />
              </Col>
              <Col className="col-8">
                <p className="m-0 totalText">Total Customer</p>
                <p>30</p>
              </Col>
            </Row>
          </div>
        </Col>


      </Row>
    </div>
  );
};

export default DashboardCards;
