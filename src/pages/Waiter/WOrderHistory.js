import React from 'react'
import Table from "react-bootstrap/Table";
import "../../components/AdminComponents/tables.css"
import { EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import Sidebar from '../../components/AdminComponents/Sidebar';

export default function WOrderHistory() {
  return (
    <div className='row'>
        <div className='col-2 p-2 d-none d-lg-block'>
            <Sidebar/>
        </div>

        <div className='col-12 col-lg-10 mt-4'>
            <div className='col-12'>
                <h5 className='fw-bold'>On Going</h5>
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
                  <span className="text1">CUSTOMER NAME</span>
                </th>

                <th>
                  <span className="text1">TABLE</span>
                </th>

                <th>
                  <span className="text1">FOOD</span>
                </th>

                <th>
                  <span className="text1">SESSION</span>
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
                  <span className="text2">Kosala Chaturanga</span>
                </td>

                <td>
                  <span className="text2">12</span>
                </td>

                <td>
                  <span className='text2'>Fried Rice</span>
                </td>

                <td>
                  <span className="btn btn-outline-danger rounded-5 textN">Closed</span>
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
                  <span className="text2">Upek Hansaja</span>
                </td>

                <td>
                  <span className="text2">03</span>
                </td>

                <td>
                  <span className="text2">Fried Chicken</span>
                </td>

                <td>
                  <span className="btn btn-outline-danger rounded-5 textN">Closed</span>
                </td>

              </tr>

            </tbody>
          </Table>
            </div>

            <div className='col-12'>
                <h5 className='fw-bold'>Expired</h5>
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
                  <span className="text1">CUSTOMER NAME</span>
                </th>

                <th>
                  <span className="text1">TABLE</span>
                </th>

                <th>
                  <span className="text1">FOOD</span>
                </th>

                <th>
                  <span className="text1">SESSION</span>
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
                  <span className="text2">Kosala Chaturanga</span>
                </td>

                <td>
                  <span className="text2">12</span>
                </td>

                <td>
                  <span className='text2'>Fried Rice</span>
                </td>

                <td>
                  <span className="textN fw-bold">EXPIRED</span>
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
                  <span className="text2">Upek Hansaja</span>
                </td>

                <td>
                  <span className="text2">03</span>
                </td>

                <td>
                  <span className="text2">Fried Chicken</span>
                </td>

                <td>
                  <span className="textN fw-bold">EXPIRED</span>
                </td>

              </tr>

            </tbody>
          </Table>
            </div>
        </div>
    </div>
  )
}
