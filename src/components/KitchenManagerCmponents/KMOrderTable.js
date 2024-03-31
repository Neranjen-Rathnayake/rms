import React, { useState } from "react";
import "./KMOrderTable.css";
import Table from "react-bootstrap/Table";
import OrderRow from "./OrderRow";

const KMOrderTable = (props) => {
  return (
    <div className="row d-flex justify-content-center m-0 km-order-table-div">
      <div className="col-12 p-3 table-div">
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th>
                <span className="text1">ORDER NAME</span>
              </th>
              <th>
                <span className="text1">ORDER ITEM</span>
              </th>
              <th>
                <span className="text1">QUANTITY</span>
              </th>
              <th>
                <span className="text1">ORDER TYPE</span>
              </th>
              <th>
                <span className="text1">STATUS</span>
              </th>
              <th>
                <span className="text1">CHEFF</span>
              </th>
              <th>
                <span className="text1">WAITER</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <OrderRow />
            <OrderRow />
            <OrderRow />
            <OrderRow />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default KMOrderTable;