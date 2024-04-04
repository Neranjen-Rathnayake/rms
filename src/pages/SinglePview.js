import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import Burger from '../img/BB.png';
import './singlepview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * A React component that displays a single product view with image, price, description, quantity selector, add-ons, and an "Add to Cart" button.
 *
 * @component
 * @example
 * return (
 *   <SinglePview />
 * )
 */
export default function SinglePview() {
    const [count, SetCount] = useState(1);
    const [price, setPrice] = useState(500);
    const [isLarge, setIsLarge] = useState(false);

    /**
     * Increments the quantity by 1.
     */
    const increment = () => {
        SetCount(count + 1);
        setPrice(isLarge ? (count + 1) * 600 : (count + 1) * 500);
    }

    /**
     * Decrements the quantity by 1, if the quantity is greater than 1.
     */
    const decrement = () => {
        if (count > 1) {
            SetCount(count - 1);
            setPrice(isLarge ? (count - 1) * 600 : (count - 1) * 500);
        }
    }

    /**
     * Handles the size selection. If the "Large" size is selected, the price is updated to Rs. 600 per item.
     *
     * @param {boolean} isLargeSize - Indicates if the selected size is "Large".
     */
    const handleSizeSelect = (isLargeSize) => {
        setIsLarge(isLargeSize);
        setPrice(isLargeSize ? count * 600 : count * 500);
    }

    return (
        <div>
            <TopBar />

            <div className='mainBox'>

                <div className='d-flex justify-content-center align-items-center bBox'>
                    <img src={Burger} alt="Your Image" className="imageB my-2" />
                </div>

                <div className='content'>
                    <div className='row p-4'>

                        <div className='col-12 m-1'>
                            <div className='container' style={{ color: '#C9AA05' }}>
                                <FontAwesomeIcon className='' icon={faStar} />
                                <div className='d-flex align-items-center'>
                                    <p className='' >Rs. {price}</p>
                                </div>

                            </div>
                        </div>

                        <div className='col m-1 mt-3'>
                            <div className='row'>

                                <div className='col-6'>
                                    <h3>Beef Burger</h3>
                                </div>
                                <div className='col-6'>
                                    <div className='row'>
                                        <Button className='col d-flex align-items-center justify-content-center' style={{ background: 'none', color: 'blue', border: 'none' }} onClick={decrement}><FontAwesomeIcon icon={faCircleMinus} /></Button>
                                        <h4 className='col d-flex align-items-center justify-content-center'>{count}</h4>
                                        <Button className='col d-flex align-items-center justify-content-center' style={{ background: 'none', color: 'blue', border: 'none' }} onClick={increment}><FontAwesomeIcon icon={faCirclePlus} /></Button>
                                    </div>
                                </div>
                            </div>

                            <p>Big juicy beef burger with cheese, lettuce, tomato, onions and special sauce !</p>
                        </div>

                        <div className='col-12 m-1 mt-3'>
                            <div className='row d-flex  justify-content-center'>
                                <Button className='col-5 mx-2 p-2 pbtn' onClick={() => handleSizeSelect(false)}>Regular</Button>
                                <Button className='col-5 mx-2 p-2 pbtn' onClick={() => handleSizeSelect(true)}>Large</Button>
                            </div>
                        </div>

                        <div className='col-12 m-1 mt-4'>
                            <h4>Add Ons</h4>

                            <div className='row text-center mt-3 d-flex  justify-content-center'>

                                <div className='rounded-3 col-3 m-1 addon-box p-2'>
                                    <div className='aimgBox d-flex justify-content-center align-content-center'>
                                        <img src={Burger} className='aimg'></img>
                                    </div>
                                    <div className='row'>
                                        <div className=''>
                                            <FontAwesomeIcon icon={faCirclePlus} className='afaplusico' />
                                        </div>
                                    </div>

                                </div>

                                <div className='rounded-3 col-3 m-1 addon-box p-2'>
                                    <div className='aimgBox d-flex justify-content-center align-content-center'>
                                        <img src={Burger} className='aimg'></img>
                                    </div>
                                    <div className='row'>
                                        <div className=''>
                                            <FontAwesomeIcon icon={faCirclePlus} className='afaplusico' />
                                        </div>
                                    </div>

                                </div>

                                <div className='rounded-3 col-3 m-1 addon-box p-2'>
                                    <div className='aimgBox d-flex justify-content-center align-content-center'>
                                        <img src={Burger} className='aimg'></img>
                                    </div>
                                    <div className='row'>
                                        <div className=''>
                                            <FontAwesomeIcon icon={faCirclePlus} className='afaplusico' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        
                        <Link to="/cart" className='linkWrap'>
                        <div className='col-12 mt-5'>
                            <div className='row d-flex  justify-content-center'>
                                <button className='btn btn-warning rounded-5 col-6 py-2' style={{ color: 'white' }}><b> Add to Cart</b></button>
                            </div>
                        </div>
                        </Link>
                        

                    </div>
                </div>


            </div>

        </div>
    )
}
