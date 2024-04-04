import React from 'react'
import JazzCash from '../img/JazzCash_logo.png';
import Visa from '../img/Visa_Logo.png';
import MasterCard from '../img/MasterCard_Logo.png';
import './cards.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <div>
        <div>
                <h2 className='mx-3 text-warning fw-bold'>Add Payment</h2>
            <div className='row'>
            <div className='d-flex col-9 mt-3 mx-1 '>
                <button className='btn col-3 logoBox p-0 mx-2'>
                <img src={Visa} className="logos mx-0"></img>
                </button>
                <button className='btn col-3 logoBox p-0 mx-2'>
                <img src={MasterCard} className="logos mx-0"></img>
                </button>
                <button className='btn col-3 logoBox p-0 mx-2'>
                <img src={JazzCash} className="logos mx-0"></img>
                </button>
            </div>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
        <Form className='col-10'>
      <Form.Group className="mb-3">
        <Form.Label>Name On Card</Form.Label>
        <Form.Control className='input1' placeholder="NAME" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Card Number</Form.Label>
        <Form.Control className='input1' placeholder="xxxx xxxx xxxx xxxx" />
      </Form.Group>
     <div className='row'>
     <Form.Group className="mb-3 col-6">
        <Form.Label>Expiry Date</Form.Label>
        <Form.Control className='input1' placeholder="MM/YY" />
      </Form.Group>
      
      <Form.Group className="mb-3 col-6">
        <Form.Label>Security Code</Form.Label>
        <Form.Control className='input1' placeholder="CVV" />
      </Form.Group>
     </div>
      
      <Form.Group className="mb-3">
        <Form.Label>ZIP/Postal Code</Form.Label>
        <Form.Control className='input1' placeholder="xxxxx" />
      </Form.Group>
      
      <Link to="/otp" className='linkWrap'>
      <div className='d-flex justify-content-center mt-4'>
      <button className="btn btn1 btn-warning">
        Payment
      </button>
      </div>
      </Link>
    </Form>
    </div>
    </div>
  )
}
