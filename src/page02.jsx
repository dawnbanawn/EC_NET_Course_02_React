import React from 'react'
import logo1 from "./assets/images/logo1.png"
import logo2 from "./assets/images/logo2.png"
import logo3 from "./assets/images/logo3.png"
import logo4 from "./assets/images/logo4.png"
import logo5 from "./assets/images/logo5.png"
import logo6 from "./assets/images/logo6.png"
import phone2 from "./assets/images/phone2.png"
import icon1 from "./assets/images/icon1.png"
import stats from "./assets/images/stats.png"
import wallet2 from "./assets/images/wallet2.png"
import shield from "./assets/images/shield.png"
import question from "./assets/images/question.png"
import happy from "./assets/images/happy.png"


const Page02 = () => {
  return (
    <div id="page02" className="pages">
    <div id="page02TopLogos">
      <div className="page02Logos">
        <img src={logo1} alt="" />
      </div>
      <div className="page02Logos">
        <img src={logo2} alt="" />
      </div>
      <div className="page02Logos">
        <img src={logo3} alt="" />
      </div>
      <div className="page02Logos">
        <img src={logo4} alt="" />
      </div>
      <div className="page02Logos">
        <img src={logo5} alt="" />
      </div>
      <div className="page02Logos">
        <img src={logo6} alt="" />
      </div>
    </div>
    <div id="page02LowerContainer">
      <div id="page02LowerLeft">
        <img src={phone2} alt="" />
      </div>
      <div id="page02LowerRightContainer">
        <div id="page02LowerRightTop">
          <h2><strong>App features</strong></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec
            lacus.
          </p>
        </div>
        <div id="page02LowerRightBottom">
          <div id="page02IconsLeft">
            <div className="page02Card">
              <div className="page01IconImage">
                <img src={icon1} alt="" />
              </div>
              <div className="page01CardText">
                <h5><strong>Easy Payment</strong></h5>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>

            <div className="page02Card">
              <div className="page01IconImage">
                <img src={stats} alt="" />
              </div>
              <div className="page01CardText">
                <h5><strong>Cost Statistics</strong></h5>

                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>

            <div className="page02Card">
              <div className="page01IconImage">
                <img src={wallet2} alt="" />
              </div>
              <div className="page01CardText">
                <h5><strong>Regular Cashback</strong></h5>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
          </div>
          <div id="page02IconsRight">
            <div className="page02Card">
              <div className="page01IconImage">
                <img src={shield} alt="" />
              </div>
              <div className="page01CardText">
                <h5><strong>Data Security</strong></h5>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>

            <div className="page02Card">
              <div className="page01IconImage">
                <img src={question} alt="" />
              </div>
              <div className="page01CardText">
                <h5><strong>Support 24/7</strong></h5>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>

            <div className="page02Card">
              <div className="page01IconImage">
                <img src={happy} alt="" />
              </div>
              <div className="page01CardText">
                <h5><strong>Top Standards</strong></h5>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page02