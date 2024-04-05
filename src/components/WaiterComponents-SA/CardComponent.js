import React, { useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import Cards from "../Cards";
import "./CardComponent.css";

const CardComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleComponentClick = () => {
    setIsClicked(!isClicked);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col lg={4} sm={12} onClick={handleComponentClick}>
        <div className={`card m-2 cardDiv ${isClicked ? "clicked" : ""}`}>
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

            {/* {isClicked && ( */}
            <div>
              <Row className="buttonRow">
                <Col className="d-flex justify-content-center align-items-center">
                  <Button className="rounded-5 completeButton">
                    Completed
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <Button
                    className="rounded-5 payButton"
                    onClick={handleShowModal}
                  >
                    Cash/Card
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-dialog modal-lg modalClass"
        // style={{ maxWidth: "none", width: "80%" }}
      >
        <Modal.Header
          closeButton
          className="modal-header-no-border"
        ></Modal.Header>
        <Modal.Body>
          <Cards />
        </Modal.Body>
        {/* <Modal.Footer className="modal-footer-no-border">
          <div className="d-flex justify-content-start">
            <Button className="rounded-5 payButton" onClick={handleCloseModal}>
              Pay
            </Button>
          </div>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default CardComponent;
