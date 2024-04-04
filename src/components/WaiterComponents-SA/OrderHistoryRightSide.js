import "./OrderHistoryRightSide.css";
import React from "react";
import OnGoingTable from "./OnGoingTable";
import ExpiredTable from "./ExpiredTable";

const OrderHistoryRightSide = () => {
  return (
    <div className="mainDiv">
      <div className="container">
        <div className="col-12 ">
          <div className="mt-2 mb-4">
            <p className="textOnTable">On Going</p>
          </div>
          <OnGoingTable />
          <div className="mt-2 mb-4">
            <p className="textOnTable">Expired</p>
          </div>
          <ExpiredTable />
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryRightSide;
