import React from 'react'
import Table from "react-bootstrap/Table";
// import "../../components/AdminComponents/tables.css";
import { EyeFill, TrashFill } from "react-bootstrap-icons";

import './POSOrdersRight.css';

const PosOrdersRight = () => {
  return (
    <div className='posOrdersBG'>
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
                  <span className="text1">DATE</span>
                </th>

                <th>
                  <span className="text1">STATUS</span>
                </th>

                <th>
                  <span className="text1">ACTION</span>
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
                  <span className="text2">Lorem</span>
                </td>

                <td>
                  <span className="text2">Take Away</span>
                </td>

                <td>
                  <span className="text2">Rs. 2000</span>
                </td>

                <td>
                  <span className="text2">4:20 PM,07-03-2024</span>
                </td>

                <td>
                  <span className="textA">Accept</span>
                </td>

                <td>
                  <TrashFill className="m-2 textI" />
                  <EyeFill className=" textI" />
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
                  <span className="text2">Lorem</span>
                </td>

                <td>
                  <span className="text2">Table</span>
                </td>

                <td>
                  <span className="text2">Rs. 2500</span>
                </td>

                <td>
                  <span className="text2">4:50 PM,07-03-2024</span>
                </td>

                <td>
                  <span className="textN">Lorem</span>
                </td>

                <td>
                  <TrashFill className="m-2 textI" />
                  <EyeFill className=" textI" />
                </td>
              </tr>

            </tbody>
          </Table>
        </div>
    </div>
  )
}

export default PosOrdersRight