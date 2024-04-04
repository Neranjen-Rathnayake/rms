import React, { useState } from "react";
import { Row, Col, Modal, Button, Container } from "react-bootstrap";
import "./WaiterDashBoardRightSide.css";
import Cards from "../Cards";
import CardComponent from "./CardComponent";
import ExpiredTable from "./ExpiredTable";

const WaiterDashBoardRightSide = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleComponentClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="mainDiv p-3">
      <Row className="m-0 cards-row">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Row>
      <div className="pt-5">
      <ExpiredTable/>
      </div>
    
    </div>
  );
};

export default WaiterDashBoardRightSide;
