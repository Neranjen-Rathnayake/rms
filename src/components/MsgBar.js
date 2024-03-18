import React from 'react'
import './msgbar.css';
import img from '../img/pizza-fries.png'

export default function MsgBar() {
    return (
        <div className='p-2'>
            <div>
                <p>Hey <b>Mr.Oshan</b></p>
            </div>
            <div>
                <p className='text-warning'>Pending Payments</p>
            </div>

            <div className='container msgbar p-0'>
                <div className='row msgchildbar p-2'>
                    <div className='col-4'>
                        <img src={img} alt="Your Image" className='image' />
                    </div>
                    <div className='col-8'>
                        <div className='PayMsg'>
                            <p className='mb-0'>Pizza Fries</p>
                            <p className='mb-0 fw-bold'>$32</p>
                        </div>
                    </div>
                </div>
                <div className='col-8 mx-2'>
                    <p className='odrstatus m-2'>Your Order Kitchen manager confirmed</p>
                </div>
            </div>
        </div>
    )
}
