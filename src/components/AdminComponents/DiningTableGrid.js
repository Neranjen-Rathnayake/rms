import React from "react";
import Table from "react-bootstrap/Table";
import "./tables.css";
import { EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";

export default function DiningTableGrid() {
  return (
    <div className="container">
      <div className="col-12 ">
        <div className="col-12 d-flex justify-content-end mt-2 mb-4">

        <button className="btn btn-warning btnC text-white">Add Tables</button>

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
                  <span className="text1">SIZE</span>
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
                  <span className="text2">Lorem</span>
                </td>

                <td>
                  <span className="textA">Active</span>
                </td>

                <td>
                  <PencilFill className=" textI"/>
                  <TrashFill className="m-2 textI"/>
                  <EyeFill className=" textI"/>
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
                  <span className="textN">Non-Active</span>
                </td>

                <td>
                  <PencilFill className=" textI"/>
                  <TrashFill className="m-2 textI"/>
                  <EyeFill className=" textI"/>
                </td>
              </tr>

            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
