import React from 'react';
import Table from "react-bootstrap/Table";
import "./tables.css";

export default function SalesRepoGrid() {
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
                <span className="text1">ORDER ID</span>
              </th>

              <th>
                <span className="text1">DATE</span>
              </th>

              <th>
                <span className="text1">TOTAL</span>
              </th>

              <th>
                <span className="text1">DISCOUNT</span>
              </th>

              <th>
                <span className="text1">DELIVERY CHARGE</span>
              </th>

              <th>
                <span className="text1">PATMENT TYPE</span>
              </th>

              <th>
                <span className="text1">PAYMENT STATUS</span>
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
                <span className="text2">1103247</span>
              </td>

              <td>
                <span className="text2">05:57 PM, 08-01-2024</span>
              </td>

              <td>
                <span className="text2">Rs. 2000</span>
              </td>

              <td>
                <span className="text2">0.00</span>
              </td>

              <td>
                <span className="text2">0.00</span>
              </td>

              <td>
                <span className="text2">PAYPAL</span>
              </td>

              <td>
                <span className="textA">Paid</span>
              </td>

            </tr>

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
                <span className="text2">1103247</span>
              </td>

              <td>
                <span className="text2">05:57 PM, 08-01-2024</span>
              </td>

              <td>
                <span className="text2">Rs. 2000</span>
              </td>

              <td>
                <span className="text2">0.00</span>
              </td>

              <td>
                <span className="text2">0.00</span>
              </td>

              <td>
                <span className="text2">Cash On Delivery</span>
              </td>

              <td>
                <span className="textA">Paid</span>
              </td>

            </tr>

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
                <span className="text2">0801246</span>
              </td>

              <td>
                <span className="text2">05:57 PM, 08-01-2024</span>
              </td>

              <td>
                <span className="text2">Rs. 3200</span>
              </td>

              <td>
                <span className="text2">0.00</span>
              </td>

              <td>
                <span className="text2">0.00</span>
              </td>

              <td>
                <span className="text2">Cash On Delivery</span>
              </td>

              <td>
                <span className="textN">Unpaid</span>
              </td>

            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  </div>
  )
}
