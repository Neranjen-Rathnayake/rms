import React from "react";
import { useState } from "react";
import OtpInput from 'react-otp-input';
import './otpfield.css';
import { Link } from "react-router-dom";

export default function OtpField() {

  const [otp, setOtp] = useState("");

  return (
    <div>
      <h2 className="mt-5 mx-4 p-3">Verification Code</h2>
      <div className="d-flex justify-content-center align-align-items-center">
      <div className="col-6 d-flex justify-content-center">
        <OtpInput 
          value={otp}
          onChange={setOtp}
          numInputs={4}
          keyboardType='numeric'
          renderSeparator={<span className="p-2" ></span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "60px",
            height: "60px",
            borderRadius: "20%",
            backgroundColor : "white",
            margin: "auto",
            borderColor: "#DDDDDD",
            borderStyle: "solid",
            fontSize:"25px",
            fontWeight:"500",
            color:"#757575",
          }}
          focusStyle={{
            borderColor: "#FFCE07",
            borderStyle: "solid",
          }}
        />
      </div>
    </div>
    <Link to="/checkout" className="linkWrap">
    <div className="d-flex justify-content-center mt-5">
    <button className="btn1 btn btn-warning">Confirm</button>
    </div>
    </Link>
    </div>
  );
}
