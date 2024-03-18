import React from 'react'
import Logo from '../img/logo.png';
import { Button } from 'react-bootstrap';
import User from '../img/user.jpg';

export default function Welcome() {
    return (
        <div>
            <div className='container'>
                <img src={Logo} alt="Your Image" class="image" />
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '30vh' }}>
                <h1>Welcome</h1>
            </div>

            <div className='' style={{ height: '70vh' }}>
                <div className='d-flex justify-content-center mt-2'>
                    <p>Your Table - <b>NO. 02</b></p>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <p>Your Waiter</p>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <img src={User} alt='dp' style={{height:'100px', width:'100px',borderRadius:'100%'}}></img>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <p><b>Isuru Liyanage</b></p>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <p>078 1234 567</p>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <Button className='btn btn-warning rounded-5 px-5 py-3'><b>Go To Menu</b></Button>
                </div>
            </div>
        </div>
    )
}
