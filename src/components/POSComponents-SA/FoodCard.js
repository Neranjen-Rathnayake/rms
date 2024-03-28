import React from "react";
import Card from "react-bootstrap/Card";
import "./FoodCard.css";

const FoodCard = (props) => {

  const handleCardClick = () => {
    const foodData = {
      foodItemId: props.foodItemId,
      foodItemName: props.foodItemName,
      foodItemImage: props.foodItemImage,
      foodItemPrice: props.foodItemPrice
    };
  
    // Update selectedFood using functional form of setState
    props.setSelectedFood(prevSelectedFood => [...prevSelectedFood, foodData]);
    props.handleAddFood(foodData);
  };
  // const handleCardClick = () => {
  //   const foodData = [props.foodItemId, props.foodItemName, props.foodItemImage, props.foodItemPrice];

  //   props.setSelectedFood(foodData);
  //   props.handleAddFood(foodData)
  //   console.log(props.foodItemName)
  //   console.log(foodData);
  // };
  return (
    <Card className="cardClass" onClick={handleCardClick}>
      <div className="foodIdDiv">
        <p className="foodIdP">{props.foodItemId}</p>
      </div>
      <div className="d-flex justify-content-center">
      <img src={props.foodItemImage} />
      </div>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{props.foodItemName}</Card.Title>
        <Card.Text>{props.foodItemPrice}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
