import React from "react";

import { Col, Row } from "react-bootstrap";
import POSDashboardFoodItems from "./POSDashboardFoodItems";
import POSDashboardTopProducts from "./POSDashboardTopProducts";

const DashboardRightBottom = () => {
 
  return (
    <div>
      <Row className="ps-4">
        <Col className="graph col-6">
          <POSDashboardFoodItems/>
        </Col>
        <Col className="graph col-6">
        <POSDashboardTopProducts/>    
        </Col>
      </Row>
    </div>
  );
};

export default DashboardRightBottom;
