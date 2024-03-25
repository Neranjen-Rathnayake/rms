import React from "react";
import Table from "react-bootstrap/Table";
import "./tables.css";
import { EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";

export default function EmployeeGrid() {
  return (

      <div className="row d-flex justify-content-end
      ">
        <div className="col-12 d-flex justify-content-end mt-2 mb-4">
          <button className="btn btn-warning btnC text-white">
            Add Employee
          </button>
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
                  <span className="text1">EMAIL</span>
                </th>

                <th>
                  <span className="text1">PHONE</span>
                </th>

                <th>
                  <span className="text1">ROLE</span>
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
                  <span className="text2">Lorem</span>
                </td>

                <td>
                  <span className="text2">Staff</span>
                </td>

                <td>
                  <span className="textA">Active</span>
                </td>

                <td>
                  <PencilFill className=" textI" />
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
                  <span className="text2">Pos Operator</span>
                </td>

                <td>
                  <span className="textN">Non-Active</span>
                </td>

                <td>
                  <PencilFill className=" textI" />
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
                  <span className="text2">Branch Manager</span>
                </td>

                <td>
                  <span className="textA">Active</span>
                </td>

                <td>
                  <PencilFill className=" textI" />
                  <TrashFill className="m-2 textI" />
                  <EyeFill className=" textI" />
                </td>
              </tr>

            </tbody>
          </Table>
        </div>
      </div>
  );
}
