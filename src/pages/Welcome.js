import React from "react";
import Logo from "../img/logo.png";
import { Button } from "react-bootstrap";
import User from "../img/user.jpg";
import { Link } from "react-router-dom";
import "../App.css";
import './Welcome.css'

export default function Welcome() {
  return (
    <div>
      <div className="container">
        <img src={Logo} alt="Your Image" className="image imageLogo m-0 ps-4 " />
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "20vh" }}
      >
        <h1 className="fw-bolder">WELCOME</h1>
      </div>

      <div className="" style={{ minHeight: "60vh" }}>
        <div className="d-flex justify-content-center mt-2">
          <p className="display-5 fw-bold">
            Your Table - <b>NO. 02</b>
          </p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p className="fs-2">Your Waiter</p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <img
            src={User}
            alt="dp"
            style={{ height: "100px", width: "100px", borderRadius: "100%" }}
          ></img>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p>
            <b className="fs-2">Isuru Liyanage</b>
          </p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p className="fs-1">078 1234 567</p>
        </div>

        <Link to="/home" className="linkWrap">
          <div className="d-flex justify-content-center mt-2">
            <Button className="btn btn-warning rounded-5 px-5 py-3">
              <b className="fs-2">Go To Menu</b>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
