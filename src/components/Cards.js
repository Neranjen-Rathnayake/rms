import React from "react";
import JazzCash from "../img/JazzCash_logo.png";
import Visa from "../img/Visa_Logo.png";
import MasterCard from "../img/MasterCard_Logo.png";
import "./cards.css";
import Form from "react-bootstrap/Form";

export default function Cards() {
  return (
    <div>
      <div className="firstDiv">
        <h4 className="text-warning fw-bold">Add Payment</h4>
        <div className="">
          <div className="mt-1 mx-1 ">
            <button className="btn col-3 col-sm-3 logoBox p-0 mx-2">
              <img src={Visa} className="logos mx-0"></img>
            </button>
            <button className="btn col-3 col-sm-3 logoBox p-0 mx-2">
              <img src={MasterCard} className="logos mx-0"></img>
            </button>
            <button className="btn col-3 col-sm-3 logoBox p-0 mx-2">
              <img src={JazzCash} className="logos mx-0"></img>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Form className="col-10">
          <Form.Group className="mb-3">
            <Form.Label>Name On Card</Form.Label>
            <Form.Control className="input1" placeholder="NAME" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              className="input1"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </Form.Group>
          <div className="row">
            <Form.Group className="mb-1 col-6">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control className="input1" placeholder="MM/YY" />
            </Form.Group>

            <Form.Group className="mb-1 col-6">
              <Form.Label>Security Code</Form.Label>
              <Form.Control className="input1" placeholder="CVV" />
            </Form.Group>
          </div>

          <Form.Group className="mb-1">
            <Form.Label>ZIP/Postal Code</Form.Label>
            <Form.Control className="input1" placeholder="xxxxx" />
          </Form.Group>

          {/* <div className="d-flex justify-content-center mt-2">
            <button className="btn btn1 btn-warning">Payment</button>
          </div> */}
        </Form>
      </div>
    </div>
  );
}
