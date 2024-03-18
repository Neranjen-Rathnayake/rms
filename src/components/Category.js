import React from "react";
import "../bootstrap/bootstrap.min.css";
import "./category.css";
import Salad from "../img/salad.png";
import Burger from "../img/burger.png";
import Pizza from "../img/pizza.png";
import Dessert from "../img/dessert.png";
import Fries from "../img/fries.png";
import PFries from "../img/pizza-fries.png";

export default function Category() {
  return (
    <div className="mx-1">
      <div className="row  mt-3">
        <div className="col-3">
          <div className="category-box rounded-4 d-flex justify-content-center align-content-center p-2">
            <img src={Salad} className="cimg"></img>
          </div>
          <div className="d-flex justify-content-center align-content-center">
            <p className=" mt-2">All</p>
          </div>
        </div>

        <div className="col-3">
          <div className="category-box rounded-4 d-flex justify-content-center align-content-center p-2">
            <img src={Burger} className="cimg"></img>
          </div>
          <div className="d-flex justify-content-center align-content-center">
            <p className=" mt-2">Burger</p>
          </div>
        </div>

        <div className="col-3">
          <div className="category-box rounded-4 d-flex justify-content-center align-content-center p-2">
            <img src={Pizza} className="cimg"></img>
          </div>
          <div className="d-flex justify-content-center align-content-center">
            <p className=" mt-2">Pizza</p>
          </div>
        </div>

        <div className="col-3">
          <div className="category-box rounded-4 d-flex justify-content-center align-content-center p-2 ">
            <img src={Dessert} className="cimg"></img>
          </div>
          <div className="d-flex justify-content-center align-content-center">
            <p className=" mt-2">Dessert</p>
          </div>
        </div>
      </div>
    </div>
  );
}
