import React from 'react'
import bxcheckcircle from "./assets/images/bx-check-circle.png"
import arrow from "./assets/images/arrow.png"
import imageStat from "./assets/images/imageStat.png"
import imageVisa from "./assets/images/imageVisa.png"
import icon1 from "./assets/images/icon1.png"
import wallet2 from "./assets/images/wallet2.png"


const Page04 = () => {
  return (
    <div id="page04" className="pages">
        <div id="page04TopDiv">
          <div id="page04TopLeft">
            <div>
              <h1><strong>Make your money transfer simple and clear</strong></h1>
            </div>
            <div className="page04check">
              <img src={bxcheckcircle} alt="" />
              <p>Banking transactions are free for you</p>
            </div>
            <div className="page04check">
              <img src={bxcheckcircle} alt="" />
              <p>No monthly cash commission</p>
            </div>
            <div className="page04check">
              <img src={bxcheckcircle} alt="" />
              <p>Manage payments and transactions online</p>
            </div>
            <div className="learnMoreButton">
              <p>Learn more</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div id="page04TopRight">
            <img src={imageStat} alt="" />
          </div>
        </div>
        <div id="page04LowerDiv">
          <div id="page04BottomLeft">
            <img src={imageVisa} alt="" />
          </div>
          <div id="page04BottomRight">
            <div>
              <h1><strong>Receive payment from international bank details</strong></h1>
            </div>
            <div id="page04cards">
              <div>
                <div className="page01IconImage">
                  <img src={icon1} alt="" />
                </div>
                <div className="page01CardText">
                  <p>
                    Id mollis consectetur congue egestas egestas suspendisse
                    blandit justo.
                  </p>
                </div>
              </div>
              <div>
                <div className="page01IconImage">
                  <img src={wallet2} alt="" />
                </div>
                <div className="page01CardText">
                  <p>
                    Id mollis consectetur congue egestas egestas suspendisse
                    blandit justo.
                  </p>
                </div>
              </div>
            </div>
            <div className="learnMoreButton">
              <p>Learn more</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Page04