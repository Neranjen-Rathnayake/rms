import React from 'react'
import { Row, Col, Button } from "react-bootstrap";


const WaiterCard = () => {
  return (
    <div><Col>
    <div className="card m-2 cardDiv">
      <div className="card-body">
        <Row>
          <Col>
            <p className="card-text">Order ID: </p>
            <h5 className="card-title">FRENCH FRIES</h5>
            <p className="card-text">Guest Count: 03</p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="tableNoDiv">
              <Row className="tableNoRow">
              <p className="tableNoText1">Table No:</p>

              </Row>
              <Row className="tableNoRow">
              <p className="tableNoText2">02</p>
              </Row>   
            </div>
          </Col>
        </Row>

        <div>
          <Row className="buttonRow">
            <Col className="d-flex justify-content-center align-items-center">
              <Button className="rounded-5 completeButton">
                Completed
              </Button>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <Button className="rounded-5 cashButton">Cash/Card</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </Col></div>
  )
}

export default WaiterCard