import React from 'react'
import carousel from "./assets/images/carousel.png"

const Page03 = () => {
  return (
    <div id="page03" className="pages">
    <div id="page03div">
      <div id="page03Title">
        <h3><strong>How does it work?</strong></h3>
      </div>
      <div id="page03Carousel">
        <img src={carousel} alt="" />
      </div>
      <div id="page03Bottom">
        <h5><strong>Latest transaction history</strong></h5>
        <p>
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
          Arcu sociis tristique quisque hac in consectetur condimentum.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Page03