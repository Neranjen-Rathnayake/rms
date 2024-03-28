import React, { useState } from "react";
import "./FoodFilter.css";
import { Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllItem from "../../img/filterImages/Allitem.png";
import Burger from "../../img/filterImages/burger.png";
import Veg from "../../img/filterImages/veg.png";
import NonVeg from "../../img/filterImages/nonveg.png";
import Pizza from "../../img/filterImages/pizza.png";
import Grill from "../../img/filterImages/grill.png";
import allFoods from "../../AllFoodsDetails";
import FoodCard from "./FoodCard";

const FoodFilter = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFoodItems =
    selectedCategory === "all"
      ? allFoods // If "All" is selected, show all items
      : allFoods.filter((item) => item.categories.includes(selectedCategory));

  return (
    <div className="foodFilterNavbar">
      <Nav className="justify-content-center">
        <Nav.Item>
          <Link
            href="#"
            className={`link-with-image ${
              selectedCategory === "all" ? "filter-active" : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            <img src={AllItem} alt="Image" className="imageClass" />
            <span>All Item</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            href="#"
            className={`link-with-image ${
              selectedCategory === "veg" ? "filter-active" : ""
            }`}
            onClick={() => setSelectedCategory("veg")}
          >
            <img src={Veg} alt="Image" className="imageClass" />
            <span>Veg</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`link-with-image p-2 ${
              selectedCategory === "non-veg" ? "filter-active" : ""
            }`}
            onClick={() => setSelectedCategory("non-veg")}
          >
            <img src={NonVeg} alt="Image" className="imageClass" />
            <span>Non-veg</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`link-with-image p-2 ${
              selectedCategory === "burger" ? "filter-active" : ""
            }`}
            onClick={() => setSelectedCategory("burger")}
          >
            <img src={Burger} alt="Image" className="imageClass" />
            <span>Burger</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`link-with-image p-2 ${
              selectedCategory === "pizza" ? "filter-active" : ""
            }`}
            onClick={() => setSelectedCategory("pizza")}
          >
            <img src={Pizza} alt="Image" className="imageClass" />
            <span>Pizza</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`link-with-image ${
              selectedCategory === "grill" ? "filter-active" : ""
            }`}
            onClick={() => setSelectedCategory("grill")}
          >
            <img src={Grill} alt="Image" className="imageClass" />
            <span>Grill</span>
          </Link>
        </Nav.Item>
      </Nav>

      <div className="filtered-foods-div">
        <Row className="m-0 filtered-foods-row">
          {filteredFoodItems.map((foodItem, index) => (
            <Col key={index} md={6} lg={4}>
              <FoodCard foodItemId={foodItem.id} foodItemName={foodItem.name} foodItemImage={foodItem.image} foodItemPrice={foodItem.price} setSelectedFood={props.setSelectedFood} handleAddFood={props.handleAddFood}/>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FoodFilter;
