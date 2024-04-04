import React from "react";
import food1 from "../../img/foodImages/food1.png";
import food2 from "../../img/foodImages/food2.png";
import food3 from "../../img/foodImages/food3.png";
import food4 from "../../img/foodImages/food4.png";
import food5 from "../../img/foodImages/food5.png";
import food6 from "../../img/foodImages/food6.png";
import { Col, Row } from "react-bootstrap";
import "./POSDashboardFoodItems.css";

const POSDashboardFoodItems = () => {
  const foods = [
    {
      foodId: 1,
      foodName: "Burger",
      foodImage: food1,
    },
    {
      foodId: 2,
      foodName: "Pizza",
      foodImage: food2,
    },
    {
      foodId: 3,
      foodName: "Salad",
      foodImage: food3,
    },
    {
      foodId: 4,
      foodName: "Burger",
      foodImage: food4,
    },
    {
      foodId: 5,
      foodName: "Pizza",
      foodImage: food5,
    },
    {
      foodId: 6,
      foodName: "Salad",
      foodImage: food6,
    },
  ];

  return (
    <Row>
      {foods.map((foodItem, index) => (
        <Col
          key={index}
          lg={4}
          className="d-flex flex-column align-items-center justify-content-center "
        >
          <div className="foodItemCol">
            <img src={foodItem.foodImage} alt="" />
            <p className="text-center m-0">{foodItem.foodName}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default POSDashboardFoodItems;
