import React, { useState } from "react";
import POSSidebar from "../../components/POSComponents-SA/POSSideBar";
import PosMiddle from "../../components/POSComponents-SA/PosMiddle";
import PosRightDetails from "../../components/POSComponents-SA/PosRightDetails";

const POS = () => {
  const [selectedFood, setSelectedFood] = useState([]);

  // const handleAddFood = (foodData) => {
  //   setSelectedFood([...selectedFood, foodData]);
  //   console.log(foodData);
  //   console.log(selectedFood);
  // };

  const handleAddFood = (foodData) => {
    // Check if the food item already exists in selectedFood
    const existingFoodIndex = selectedFood.findIndex(
      (item) => item.foodItemId === foodData.foodItemId
    );

    if (existingFoodIndex !== -1) {
      // If the food item already exists, update its quantity
      const updatedSelectedFood = [...selectedFood];
      updatedSelectedFood[existingFoodIndex].qty += 1;
      setSelectedFood(updatedSelectedFood);
    } else {
      // If the food item doesn't exist, add it with quantity 1
      setSelectedFood([...selectedFood, { ...foodData, qty: 1 }]);
    }
  };
  
  return (
    <div className="row">
      <div className="col-2">
        <POSSidebar />
      </div>
      <div className="col-6">
        <PosMiddle setSelectedFood={setSelectedFood} handleAddFood={handleAddFood}/>
      </div>
      <div className="col-4">
        <PosRightDetails selectedFood={selectedFood} />
      </div>
    </div>
  );
};

export default POS;
