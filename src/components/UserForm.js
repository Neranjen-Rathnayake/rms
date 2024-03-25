import React from 'react'
import Form from 'react-bootstrap/Form';
import './userform.css'

export default function UserForm() {
  return (
    <div>
        <div className='d-flex justify-content-center mt-5'>
        <Form className='col-10 col-lg-5'>
      <Form.Group className="mb-3">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control className='input1' placeholder="Didul Adeesha" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Guest Count</Form.Label>
        <Form.Control className='input1' placeholder="05" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Enter Your Phone number</Form.Label>
        <Form.Control className='input1' placeholder="07X XXX XXXX" />
      </Form.Group>

      </Form>
      </div>
      <div className='d-flex justify-content-center mt-4'>
      <button className="btn btn1 btn-warning">
        Send Code
      </button>
      </div>
    </div>
  )
}
