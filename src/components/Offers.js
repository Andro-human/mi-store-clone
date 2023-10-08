import React from 'react'
import "../styles/Offers.css"

const Offers = ({offer}) => {
  return (
    <div className='offerSection'>
      {offer.map((item, index)=>(
       <a href={item.link}><img src={item.image} 
       alt={`${index} offer`}  /></a>
      ))}
    </div>
  )
}

export default Offers
