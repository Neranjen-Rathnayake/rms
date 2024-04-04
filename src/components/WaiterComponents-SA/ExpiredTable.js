import React from "react";
import Table from "react-bootstrap/Table";

const ExpiredTable = () => {
  return (
    <div>
      <div className="col-12 p-3">
        <Table hover>
          <thead>
            <tr className="tableRow">
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
            <tr className="tableRow">
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
                <span className="text2">Fried Rice</span>
              </td>

              <td>
                <p className="expiredText">Expired</p>
              </td>
            </tr>

            <tr className="tableRow">
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
                <span className="text2">Fried Chicken</span>
              </td>

              <td>
                <p className="expiredText">Expired</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExpiredTable;
