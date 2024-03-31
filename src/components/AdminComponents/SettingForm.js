import React from "react";
import { Form } from "react-bootstrap";
import "./settingform.css";

export default function SettingForm() {
  return (
    <div className="container-fluid">
      <div className="row bgy p-3">
        <div className="col-2 d-flex justify-content-center">
          
          <h5 className="text-warning">Company</h5>        
        </div>

        <div className="col-10 bgy">
          <div className="col-12">
            <h4>Details</h4>
            <Form>
              <div className="row">
                <Form.Group className="mb-3 col-6">
                  <Form.Label>NAME</Form.Label>
                  <Form.Control className="col-6" />
                </Form.Group>

                <Form.Group className="mb-3 col-6">
                  <Form.Label>EMAIL</Form.Label>
                  <Form.Control className="" />
                </Form.Group>
              </div>

              <div className="row">
                <Form.Group className="mb-3 col-6">
                  <Form.Label>PHONE</Form.Label>
                  <Form.Control className="" />
                </Form.Group>

                <Form.Group className="mb-3 col-6">
                  <Form.Label>WEBSITE</Form.Label>
                  <Form.Control className="" />
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>ADDRESS</Form.Label>
                <Form.Control className="" />
              </Form.Group>

              <div className="row p-2">
                <button className="btn col-3 mx-2 border-black btn-light">Cancel</button>
                <button className="btn col-3 btn-warning text-white">Save</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
