import React from 'react'
import Table from "react-bootstrap/Table";
import "./tables.css";
import { EyeFill, TrashFill } from "react-bootstrap-icons";

export default function PosOrderGrid() {
  return (
    <div className='container'>
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
                  <span className="text1">CUSTOMER</span>
                </th>

                <th>
                  <span className="text1">AMOUNT</span>
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
                  <span className="text2">07032411</span>
                </td>

                <td>
                  <span className="text2">Walking Customer</span>
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
                  <span className="text2">Lorem</span>
                </td>

                <td>
                  <span className="text2">Lorem</span>
                </td>

                <td>
                  <span className="text2">Lorem</span>
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
