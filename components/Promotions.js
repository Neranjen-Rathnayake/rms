import React from 'react'
import french from '../resource/French-fries.png'

export default function Promotions() {
  return (
    <div className='col-12 col-md-8 col-lg-12'>
      <div className='text-start m-5'><h1>Promotions</h1></div>
      <div className='col-12 col-md-10 col-lg-8 bg-warning rounded-5 p-3 m-3 d-flex flex-row'>
      <div className='col-lg-8 col-mg-8'>
        <h5 className='text-white text-start d-none d-lg-block m-3'>Today's Offer</h5>
        <h2 className='text-white text-start d-none d-lg-block  m-3'>Free Box Of Fries</h2>
        <h5 className='text-white text-start d-none d-lg-block m-3'>On all Orderes above $150</h5>

        <h6 className='text-white text-start d-lg-none m-3'>Today's Offer</h6>
        <h4 className='text-white text-start d-lg-none  m-3'>Free Box Of Fries</h4>
        <h6 className='text-white text-start d-lg-none m-3'>On all Orderes above $150</h6>        
       </div> 
      <div className='col-4'>
        <img className="img-thumbnail" src={french}/>
      </div>
      
      
      </div>  
        
    </div>
  )
}
