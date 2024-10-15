import React from 'react'
import bell from "./assets/images/bell.png"


const Page07 = () => {
  return (
    <div id="page07" className="pages">
        <div id="page07div">
          <div id="page07left">
            <img src={bell} alt="" />
            <h5><strong>Subscribe to our newsletter to stay informed about latest updates</strong>
              
            </h5>
          </div>
          <div id="page07right">
            <input
              type="text"
              placeholder="&#xf003; Your email"
            />
            <div className="subscribeButton">
              <p>Subscribe</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Page07