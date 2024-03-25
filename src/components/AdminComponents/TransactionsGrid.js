import React from "react";
import Table from "react-bootstrap/Table";
import "./tables.css";

export default function TransactionsGrid() {
  return (
    <div className="container">
      <div className="col-12">
        <div className="col-12 d-flex justify-content-end mt-2 mb-4">
          <button className="btn btn-warning btnC text-white">Export</button>
        </div>

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
                  <span className="text1">TRANSACTION ID</span>
                </th>

                <th>
                  <span className="text1">DATE</span>
                </th>

                <th>
                  <span className="text1">PAYMENT METHOD</span>
                </th>

                <th>
                  <span className="text1">ORDER SERIAL NO</span>
                </th>

                <th>
                  <span className="text1">AMOUNT</span>
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
                  <span className="text2">2P498472RR750594R</span>
                </td>

                <td>
                  <span className="text2">05:57 PM, 08-01-2024</span>
                </td>

                <td>
                  <span className="text2">PAYPAL</span>
                </td>

                <td>
                  <span className="text2">0801242</span>
                </td>

                <td>
                  <span className="textA">Rs. 2000</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
