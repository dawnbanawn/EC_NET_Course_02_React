import React from 'react'
import main_shape from "./assets/images/main_shape.png"
import googleplay from "./assets/images/googleplay.png"
import appstore from "./assets/images/appstore.png"
import chevron from "./assets/images/chevron.png"
import zeroone from "./assets/images/01.png"
import Navbar from './navbar'

const Page01 = () => {
  return (
    <div id="page01" className="pages">
        <Navbar/>
        <div id="hero">
          <div id="heroLeft">
            <div id="heroLeftContainer">
              <div id="heroLeftUpper">
                <h1><strong>Manage All Your Money in One App</strong></h1>
                <p>
                  We offer you a new generation of the mobile banking.
                  <br />
                  Save, spend & manage money in your pocket.
                </p>
              </div>
              <div id="heroLeftLower">
                <img src={googleplay} alt="google play image" />
                <img src={appstore} alt="appstore image" />
              </div>
            </div>
            <div id="nextButtonDiv">
              <div id="nextButton">
                <p id='varrow'>v</p>
                {/* <img src={chevron} alt="" /> */}
              </div>
              <p>Discover more</p>
            </div>
          </div>

          <div id="heroRight">
            <img src={zeroone} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Page01