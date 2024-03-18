import React from 'react'
import Logo from '../img/logo.png';
import Success from '../img/scss.gif';
import { Button } from 'react-bootstrap';
import './checkout.css';

export default function CheckOut() {
    return (
        <div>
            <div className='container'>
                <img src={Logo} alt="Your Image" class="image" />
            </div>

            <div className='d-flex justify-content-center align-items-center' style={{ height: '20vh' }}>
                <img src={Success} style={{ width: '90px' }} />
            </div>

            <div className='' style={{ height: '70vh' }}>
                <div className='d-flex justify-content-center'>
                    <h1>Success!</h1>
                </div>

                <div className='d-flex justify-content-center p-2 mt-2'>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                </div>

                <div className='d-flex justify-content-center mt-2'>
                    <Button className='btn btn-warning rounded-5 px-5 py-3 '><b>Menu</b></Button>
                </div>

                <div className='d-flex justify-content-center p-2 mt-3'>
                    <p>SELECT PAYMENT METHOD</p>
                </div>

                <div className='d-flex justify-content-center mt-1'>
                    <Button className='btn btn-warning rounded-5 px-5 py-2 payBtn'><b>Digital</b></Button>
                </div>

                <div className='d-flex justify-content-center p-2 mt-1'>
                    <p>OR</p>
                </div>

                <div className='d-flex justify-content-center mt-1'>
                    <Button className='btn btn-warning rounded-5 px-5 py-2 payBtn'><b>Cash or Card</b></Button>
                </div>
            </div>
        </div>
    )
}
