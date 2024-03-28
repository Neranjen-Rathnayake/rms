import React, { useState } from "react";
import "./PosMiddle.css";
import { Button, Modal, Form, Col, Row, Container } from "react-bootstrap";
import FoodFilter from "./FoodFilter";
import ImageUpload from "../../img/ImageUpload.png";

const PosMiddle = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    // Trigger the file input when the upload image is clicked
    document.getElementById("fileInput").click();
  };

  

  return (
    <div className="posMiddle pt-4">
      <div className="serachDiv justify-content-center">
        <div className="col-10 col-lg-6 col-md-8">
          <input
            className="form-control rounded-5 search "
            placeholder="Search"
          />
        </div>
        <div className="align-items-center px-3">
          <Button className="rounded-5 addButton" onClick={handleShowModal}>
            Add Item
          </Button>
        </div>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          className="modal-dialog modal-lg modalClass"
        >
          <Modal.Header closeButton className="modal-header-no-border">
            <Modal.Title>Add Menu Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col xs={6}>
                  <div
                    className="uploadImageDiv d-flex justify-content-center align-items-center container"
                    onClick={handleUploadClick}
                  >
                    {selectedImage ? (
                      <img
                        className="uploadImage img-fluid"
                        src={selectedImage}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <img
                        className="uploadImage img-fluid"
                        src={ImageUpload}
                        alt="Upload Image"
                        
                      />
                    )}
                    <input
                      type="file"
                      id="fileInput"
                      className="imageInput"
                      style={{ display: "none" }} // Hide the file input
                      onChange={handleImageChange}
                    />
                  </div>
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col>
                      <Form.Group controlId="formItemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter item name"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formItemPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="formDesc" className="pt-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description here"
                    />
                  </Form.Group>
                  <Row className="pt-4">
                    <Col>
                      <Form.Group controlId="formItemCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Select category">
                          <option value="">Select category</option>
                          <option value="veg">Veg</option>
                          <option value="nonveg">None-Veg</option>
                          <option value="nonveg">Burger</option>
                          <option value="nonveg">Pizza</option>
                          <option value="nonveg">Grill</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formItemPortion">
                        <Form.Label>Portion</Form.Label>
                        <Form.Control type="text" placeholder="Enter portion" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer className="modal-footer-no-border">
            <Row>
              <Container>
                <Row>
                  <Col xs={6}>
                    <Button
                      className="rounded-5 addButton"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      className="rounded-5 addButton"
                      onClick={handleCloseModal}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Modal.Footer>
        </Modal>
      </div>
      <FoodFilter setSelectedFood={props.setSelectedFood} handleAddFood={props.handleAddFood}/>
      {/* <FilteredFoods/> */}
    </div>
  );
};

export default PosMiddle;
