import React from 'react'
import food1 from "../../img/foodImages/food1.png";
import food2 from "../../img/foodImages/food2.png";
import food3 from "../../img/foodImages/food3.png";
import food4 from "../../img/foodImages/food4.png";
import food5 from "../../img/foodImages/food5.png";
import food6 from "../../img/burger.png";
import { Col, Row } from "react-bootstrap";
import './POSDashboardTopProducts.css'

const POSDashboardTopProducts = () => {
    const foods = [
        {
          foodId: 1,
          foodName: "Burger",
          foodImage: food6,
        },
        {
          foodId: 2,
          foodName: "Pizza",
          foodImage: food6,
        },
        {
          foodId: 3,
          foodName: "Salad",
          foodImage: food6,
        },
        {
          foodId: 4,
          foodName: "Burger",
          foodImage: food6,
        },
        {
          foodId: 5,
          foodName: "Pizza",
          foodImage: food6,
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
        lg={6}
        className="d-flex flex-column align-items-center p-2"
      >
       <div className="cardBGTop">
            <Row className="p-2">
              <Col className="col-4 d-flex align-items-center justify-content-center">
                <img className="imgClass" src={foodItem.foodImage} alt="" />
              </Col>
              <Col className="col-8 d-flex flex-column align-items-center justify-content-center">
                <p className="m-0 topProductText">Top Product</p>
                <p className="m-0">{foodItem.foodName}</p>
              </Col>
            </Row>
          </div>

      </Col>
    ))}
  </Row>
  )
}

export default POSDashboardTopProducts