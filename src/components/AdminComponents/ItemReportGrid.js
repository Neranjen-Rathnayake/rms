import React from 'react'
import Table from "react-bootstrap/Table";
import "./tables.css";


export default function ItemReportGrid() {
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
                <span className="text1">NAME</span>
              </th>

              <th>
                <span className="text1">CATEGORY</span>
              </th>

              <th>
                <span className="text1">TYPE</span>
              </th>

              <th>
                <span className="text1">QUANTITY</span>
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
                <span className="text2">Mojito</span>
              </td>

              <td>
                <span className="text2">Beverages</span>
              </td>

              <td>
                <span className="text2">Veg</span>
              </td>

              <td>
                <span className="text2">5</span>
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
                <span className="text2">Baked Potato</span>
              </td>

              <td>
                <span className="text2">Side Orders</span>
              </td>

              <td>
                <span className="text2">Veg</span>
              </td>

              <td>
                <span className="text2">2</span>
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
                <span className="text2">Szechuan Shrimp</span>
              </td>

              <td>
                <span className="text2">Seafood Entrees</span>
              </td>

              <td>
                <span className="text2">Non Veg</span>
              </td>

              <td>
                <span className="text2">2</span>
              </td>

            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  </div>
  )
}
