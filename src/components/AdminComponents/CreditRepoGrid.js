import React from "react";
import Table from "react-bootstrap/Table";
import "./tables.css";


export default function CreditRepoGrid() {
  return (
    <div className="container">
      <div className="col-12">
        <div className="col-12 d-flex justify-content-end mt-2 mb-4">
          <button className="btn btnC btn-warning text-white">Export</button>
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
                  <span className="text1">BALANCE</span>
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
                  <span className="text2">Sahan Perera</span>
                </td>

                <td>
                  <span className="text2">stuff@example.com</span>
                </td>

                <td>
                  <span className="text2">077 7123460</span>
                </td>

                <td>
                  <span className="text2">Rs 2500</span>
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
                  <span className="text2">Janaka Herath</span>
                </td>

                <td>
                  <span className="text2">Janakaherath@gmail.com</span>
                </td>

                <td>
                  <span className="text2">074 4323460</span>
                </td>

                <td>
                  <span className="text2">Rs 3400</span>
                </td>

              </tr>

            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
