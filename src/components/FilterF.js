import React from 'react';
import './filterf.css';
import Form from 'react-bootstrap/Form';
import Burger from '../img/burger.png';
import PFries from '../img/pizza-fries.png';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function FilterF() {
    return (
        <div className='mt-3'>
            <div>
                <Form className='mx-3'>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Veg" name="group1" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Non-Veg" name="group1" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
                </Form>

                <div className="row d-flex justify-content-center">

                    <div className="filter-box col-5 rounded-4 mx-3 p-2">
                        <div className='imgBox d-flex justify-content-center align-content-center'>
                            <img src={Burger} className="fimg "></img>
                        </div>
                        <div className='p-1 mt-3'>
                            <h3>Beef Burger</h3>
                        </div>
                        <div className='row col-12'>
                            <h4 className='m-2 col-7' style={{color:'#C9AA05'}}>Rs.500</h4>
                            <div className='col-2  mx-d-flex'>
                                <FontAwesomeIcon icon={faCirclePlus} className='faplusico' />
                            </div>
                        </div>
                    </div>

                    <div className="filter-box col-5 rounded-4  p-2 mx-1">
                        <div className='imgBox d-flex justify-content-center align-content-center'>
                            <img src={PFries} className="fimg "></img>
                        </div>
                        <div className='p-1 mt-3'>
                            <h3>Pizza Fries</h3>
                        </div>
                        <div className='row col-12'>
                            <h4 className='col-7 m-2' style={{color:'#C9AA05'}}>Rs.1500</h4>
                            <div className='col-2 mx-d-flex '>
                                <FontAwesomeIcon icon={faCirclePlus} className='faplusico' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
