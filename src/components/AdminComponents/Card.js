import React from 'react'
import './card.css';
import { BarChartFill } from 'react-bootstrap-icons';

export default function Card() {
  return (
    <div className='row col-12'>
      <div className='row col-12 my-5 mx-4'>

        <div className='col-3 '>
          <div className='card-body bg-dan col-12 row'>
            <div className='col-2 cardIcon mx-2 d-flex justify-content-center'>
            <BarChartFill className='Image'/>
            </div>
            <div className='col-7'>
              <h6 className='text-secondary'>Total Card</h6>
              <h5 className='fw-bold'>Rs 10,000/-</h5>
            </div>
          </div>
        </div>

        <div className='col-3 '>
          <div className='card-body bg-dan col-12 row'>
            <div className='col-2 cardIcon mx-2 d-flex justify-content-center'>
            <BarChartFill className='Image'/>
            </div>
            <div className='col-7'>
              <h6 className='text-secondary'>Total Cash</h6>
              <h5 className='fw-bold'>Rs 20,000/-</h5>
            </div>
          </div>
        </div>

        <div className='col-2'>
          <div className='card-body bg-dan row'>
              <h6 className='text-secondary'>Total Sales</h6>
              <h5 className='fw-bold'>Rs 30,000/-</h5>
          </div>
        </div>

        <div className='col-3'>
          <div className='card-body col-12 row'>
            <div className='col-2 cardIcon mx-2 d-flex justify-content-center'>
            <BarChartFill className='Image'/>
            </div>
            <div className='col-7'>
              <h6 className='text-secondary'>Total Customer</h6>
              <h5 className='fw-bold'>30</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
