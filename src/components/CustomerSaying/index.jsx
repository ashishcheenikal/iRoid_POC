import React from 'react'
import "./style.scss"
import CustomerCarousel from './Carousel/Carousel'

function CustomerSaying() {
  return (
    <div className="customerSayingWrapper">
      <div className="customerSayingTitle">
        <h1>
        Whats Our Coustomer Saying
        </h1>
      </div>
      <div className="customerSayingCarousel">
        <CustomerCarousel/>
      </div>
    </div>
  )
}

export default CustomerSaying