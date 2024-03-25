import React from 'react';import Table from "react-bootstrap/Table";
import "./tables.css";
import { EyeFill } from "react-bootstrap-icons";

export default function POStableOrderGrid() {
  return (
    <div className="container">
      <div className="col-12">
        <div className="col-12">
          <Table hover>
            <thead>
              <tr>
                <th>
                  <input
                    className="form-check-input cb"
                    type="checkbox"
                    value=""
                    id="selectAll"
                  />
                </th>

                <th>
                  <span className="text1">Order ID</span>
                </th>

                <th>
                  <span className="text1">Order Type</span>
                </th>

                <th>
                  <span className="text1">Payment</span>
                </th>

                <th>
                  <span className="text1">Date</span>
                </th>

                <th>
                  <span className="text1">Status</span>
                </th>

                <th>
                  <span className="text1">Action</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <input
                    className="form-check-input cb"
                    type="checkbox"
                    value=""
                    id=""
                  />
                </td>

                <td>
                  <span className="text2">07032412</span>
                </td>

                <td>
                  <span className="text2">Dining Table</span>
                </td>

                <td>
                  <span className="text2">RS. 2000</span>
                </td>

                <td>
                  <span className="text2">04:22 PM, 07-03-2024</span>
                </td>

                <td>
                  <span className="text2">Pending</span>
                </td>

                <td>
                  <EyeFill className=" textI" />
                </td>
              </tr>

            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
