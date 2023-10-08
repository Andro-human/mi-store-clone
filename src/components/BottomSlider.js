import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const BottomSlider = ({end}) => {
  return (
    <Carousel fade>
        {end.map((item, index) => (
            <Carousel.Item key={item.image} id="end" interval={1000} keyboard={true}>
                <img className='d-block w-100' id="endImage" src={item.image} alt={`${index} banner`} />
            
                <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        ))}
    </Carousel>
  )
}

export default BottomSlider
