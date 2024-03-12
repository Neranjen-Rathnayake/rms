import React from 'react';
import './promotion.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../img/French-fries.png';


export default function Promotion() {
    return (

        <div className='p-3'>
            <h5>Promotions</h5>


            <Carousel className='bg-warning col-12 col-lg-8 rounded-5' style={{height:'200px'}}>
                <Carousel.Item style={{height:'200px'}}>

                    <Carousel.Caption className='text-end mb-3' >
                        <h6>Today's Offer</h6>
                        <h6>Free Box Of Fries</h6>
                        <h6>on all orders above $150</h6>
                    </Carousel.Caption>
                    <img
                        className="d-block w-5 p-3 position-absolute mt-5"
                        src={ExampleCarouselImage}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item style={{height:'200px'}}>

                    <Carousel.Caption className='text-end mb-3' >
                        <h6>Today's Offer</h6>
                        <h6>Free Box Of Fries</h6>
                        <h6>on all orders above $150</h6>
                    </Carousel.Caption>
                    <img
                        className="d-block w-5 p-3 position-absolute mt-5"
                        src={ExampleCarouselImage}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item style={{height:'200px'}}>

                    <Carousel.Caption className='text-end mb-3' >
                        <h6>Today's Offer</h6>
                        <h6>Free Box Of Fries</h6>
                        <h6>on all orders above $150</h6>
                    </Carousel.Caption>
                    <img
                        className="d-block w-5 p-3 position-absolute mt-5"
                        src={ExampleCarouselImage}
                        alt="First slide"
                    />
                </Carousel.Item>
                
            </Carousel>


        </div>

    )
}
