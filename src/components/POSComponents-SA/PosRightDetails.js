import React, { useState } from "react";
import "./PosRightDetails.css";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const PosRightDetails = (props) => {
  console.log("foodItemName:", props.selectedFood.foodItemName);
  const total = props.selectedFood.reduce((accumulator, food) => accumulator + parseFloat(food.foodItemPrice*food.qty), 0);
  const [discount, setDiscount] = useState(0);

const discountClickHandle=()=>{
  setDiscount(document.getElementById('discountInput').value);
}
  return (
    <div>
      <div className="rightDetailsDiv pb-4">
        <Table size="sm">
          <thead className="thead">
            <tr>
              <th></th>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.selectedFood &&
              props.selectedFood.map((food, index) => (
                <tr key={index}>
                  <td></td>
                  <td>{food.foodItemName}</td>
                  <td>{food.qty}</td>
                  <td>{food.foodItemPrice}</td>
                </tr>
              ))}
            {/* <tr className="mt-3">
              <td></td>
              <td>{props.selectedFood[1]}</td>
              <td>1</td>
              <td>{props.selectedFood[3]}</td>
            </tr> */}
            {/* <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr> */}
            <tr>
              <td></td>
              <td colSpan={2}>
                <div>
                  <input
                    className="form-control discount"
                    placeholder="Add Discount "
                    id="discountInput"
                  />
                </div>
              </td>
              <td>
                {" "}
                <Button className="applyButton" onClick={discountClickHandle}>Apply</Button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan={2}>
                <div className="">
                  <p>Total</p>
                </div>
              </td>
              <td>
                <div className="">
                <p className="">Rs.{total.toFixed(2)}</p> {/* Display the total price here */}
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan={2}>
                <div className="">
                  <p>Discount</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="">{discount}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan={2}>
                <div className="">Sub Total</div>
              </td>
              <td>
                <div className="">{total-discount}</div>
              </td>
            </tr>
            <tr>
              <td></td>

              <td></td>
              <td colSpan={2}>
                <div className="">
                  <Button className="rounded-5 orderButton">Order</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* <div className="addDiscountDiv pb-4">
        <div className="col-10 col-lg-6 col-md-8">
          <input
            className="form-control discount"
            placeholder="Add Discount "
          />
        </div>
        <div className="align-items-center px-3">
          <Button className="applyButton">Apply</Button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p>Total</p>
          </div>
          <div className="col-md-6">
            <p className="">Rs.1000.00</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p>Discount</p>
          </div>
          <div className="col-md-6">
            <p className="">Rs.100.00</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">Sub Total</div>
          <div className="col-md-6">Rs.900.00</div>
        </div>
      </div>
      <div className="align-items-center px-3">
        <Button className="rounded-5 orderButton">Order</Button>
      </div> */}
    </div>
  );
};

export default PosRightDetails;
