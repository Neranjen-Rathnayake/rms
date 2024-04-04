import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { XCircle } from 'react-bootstrap-icons';
import { PlusCircle } from 'react-bootstrap-icons';
import { DashCircle } from 'react-bootstrap-icons';
import PFries from '../img/pizza-fries.png';
import Burger from '../img/burger.png';
import './cartitems.css';
import { Link } from 'react-router-dom';

/**
 * A component that displays a cart with items and allows users to update quantities.
 * @returns {JSX.Element} The rendered component.
 */
export default function CartItems() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  /**
   * Increments the quantity of the first item by 1.
   */
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  /**
   * Decrements the quantity of the first item by 1, but not below 1.
   */
  const decrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  /**
   * Increments the quantity of the second item by 1.
   */
  const increment2 = () => {
    setCount2(prevCount => prevCount + 1);
  };

  /**
   * Decrements the quantity of the second item by 1, but not below 1.
   */
  const decrement2 = () => {
    setCount2(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  /**
   * Handles the removal of an item from the cart.
   * @param {string} itemName - The name of the item to be removed.
   */
  const handleRemoveItem = (itemName) => {
    console.log(`Removing ${itemName} from the cart`);
    // Add logic to remove the item from the cart here
  };

  /**
   * Handles the order placement.
   */
  const handleOrder = () => {
    console.log('Placing the order');
    // Add logic to place the order here
  };

  return (
    <div className="row px-2 mt-3">
      <h5 className="mx-3">2 Items in Cart</h5>

      <div className="row">
        <div className="col-lg-4 col-12">
          <CartItem
            itemName="Pizza Fries"
            itemPrice={1500}
            itemCount={count}
            incrementCount={increment}
            decrementCount={decrement}
            itemImage={PFries}
            handleRemoveItem={handleRemoveItem}
          />

          <CartItem
            itemName="Burger"
            itemPrice={1500}
            itemCount={count2}
            incrementCount={increment2}
            decrementCount={decrement2}
            itemImage={Burger}
            handleRemoveItem={handleRemoveItem}
          />
        </div>

        <div className="mt-5 col-lg-3">
          <div className="table1">
            <Table hover size="md">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pizza</td>
                  <td>{count}</td>
                  <td>{1500 * count}</td>
                </tr>
                <tr>
                  <td>Burger</td>
                  <td>{count2}</td>
                  <td>{1500 * count2}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="mt-5 mb-3 col-lg-5">
          <h1 className="text-secondary fw-bold d-flex justify-content-center">Total</h1>
          <h1 className="text-black fw-bold d-flex justify-content-center">
            Rs {1500 * count + 1500 * count2}
          </h1>
          <div className="mt-3 col-12">
            <Link to="/userdetails" className='linkWrap'>
            <button className="btn oderBtn" onClick={handleOrder}>
              Order Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * A component that displays a single cart item with quantity controls and a remove button.
 * @param {Object} props - The props for the component.
 * @param {string} props.itemName - The name of the item.
 * @param {number} props.itemPrice - The price of the item.
 * @param {number} props.itemCount - The current quantity of the item.
 * @param {function} props.incrementCount - The function to increment the item quantity.
 * @param {function} props.decrementCount - The function to decrement the item quantity.
 * @param {string} props.itemImage - The URL or path for the item image.
 * @param {function} props.handleRemoveItem - The function to handle removing the item from the cart.
 * @returns {JSX.Element} The rendered component.
 */
const CartItem = ({
  itemName,
  itemPrice,
  itemCount,
  incrementCount,
  decrementCount,
  itemImage,
  handleRemoveItem,
}) => (
  <div className="m-4 p-2 bg-white col-10 col-lg-8 rounded-5 d-flex">
    <div className="row">
      <div className="box d-flex col-4">
        <img src={itemImage} className="imgBox" alt={itemName} />
      </div>
      <div className="col-6">
        <h6 className="p-1">{itemName}</h6>
        <h6 className="p-1 text-warning">Rs. {itemPrice}</h6>
        <div className="d-flex mx-2">
          <DashCircle className="mx-3 text-primary col-3" onClick={decrementCount} />
          <h6>{itemCount}</h6>
          <PlusCircle className="mx-3 text-primary col-3" onClick={incrementCount} />
        </div>
      </div>
      <div className="col-1">
        <XCircle className="text-danger mx-3" onClick={() => handleRemoveItem(itemName)} />
      </div>
    </div>
  </div>
);


// import React, { useState } from "react";
// import Table from 'react-bootstrap/Table';
// import { XCircle } from 'react-bootstrap-icons';
// import { PlusCircle } from 'react-bootstrap-icons';
// import { DashCircle } from 'react-bootstrap-icons';
// import PFries from "../img/pizza-fries.png";
// import Burger from "../img/burger.png";
// import './cartitems.css';

// export default function CartItems() {

//   const [count, SetCount1] = useState(1);
//   const [count2, SetCount2] = useState(1);

//   const increment = () =>{
//       SetCount1(count+1);
//   }

//   const decrement = () =>{
//       SetCount1(count-1);
//   }

//   const increment2 = () =>{
//     SetCount2(count2+1);
// }

// const decrement2 = () =>{
//     SetCount2(count2-1);
// }

//   return (
//     <div className="row px-2 mt-3">
//       <h5 className="mx-3">2 Items in Cart</h5>

//       <div className="row">

//       <div className="col-lg-4 col-12">
//       <div className="m-4 p-2 bg-white col-10 col-lg-8 rounded-5 d-flex">
//           <div className="row">
//             <div className="box d-flex col-4">
//               <img src={PFries} className="imgBox"></img>
//             </div>
            
//             <div className="col-6">
//               <h6 className="p-1">Pizza Frries</h6>
//               <h6 className="p-1 text-warning">Rs. 1500</h6>
//                 <div className="d-flex mx-2">
//                   <DashCircle className="mx-3 text-primary col-3" onClick={decrement} />
//                   <h6>{count}</h6>
//                   <PlusCircle className="mx-3 text-primary col-3" onClick={increment} />
//                 </div>
              
//             </div>
//             <div className="col-1">
//             <XCircle className="text-danger mx-3"/>
//             </div>
//           </div>
//         </div>

//         <div className="m-4 p-2 bg-white col-10 col-lg-8 rounded-5 d-flex">
//           <div className="row">
//             <div className="box d-flex col-4">
//               <img src={Burger} className="imgBox"></img>
//             </div>
//             <div className="col-6">
//               <h6 className="p-1">Burger</h6>
//               <h6 className="p-1 text-warning">Rs. 1500</h6>
//                 <div className="d-flex mx-2">
//                 <DashCircle className="mx-3 text-primary col-3" onClick={decrement2} />
//                   <h6>{count2}</h6>
//                   <PlusCircle className="mx-3 text-primary col-3" onClick={increment2} />
//                 </div>
              
//             </div>
//             <div className="col-1">
//             <XCircle className="text-danger mx-3"/>
//             </div>
//           </div>
//         </div>
//       </div>

//         <div className="mt-5 col-lg-3">
//           <div className="table1">
//         <Table hover size="md">
//       <thead>
//         <tr>
//           <th>Food</th>
//           <th>Qty</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Pizza</td>
//           <td>02</td>
//           <td>2000</td>
//         </tr>
//         <tr>
//           <td>Burger</td>
//           <td>02</td>
//           <td>3000</td>
//         </tr>
//       </tbody>
//     </Table>
//         </div>
//         </div>
//         <div className="mt-5 mb-3 col-lg-5">
//           <h1 className="text-secondary fw-bold d-flex justify-content-center">Total</h1>
//           <h1 className="text-black fw-bold d-flex justify-content-center">Rs 2000</h1>
//           <div className="mt-3 col-12" >
//             <button className="btn oderBtn">Order Now</button></div>
//         </div>
//       </div>
//     </div>
//   );
// }
