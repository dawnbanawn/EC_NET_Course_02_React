import React from 'react'
import page05icon from "./assets/images/page05icon.png"
import starFull from "./assets/images/starFull.png"
import page01person01 from "./assets/images/page01person01.png"
import page01person02 from "./assets/images/page01person02.png"



const Page05 = () => {
  return (
    <div id="page05" className="pages">
    <div id="page05div">
      <div>
        <h1><strong>Clients are Loving Our App</strong></h1>
      </div>
      <div className="page05card">
        <div className="page05icon">
          <img src={page05icon} alt="" />
        </div>
        <div className="cardContents">
          <div>
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
          </div>
          <div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
              sagittis. Laoreet posuere rhoncus, egestas lacus, egestas
              justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes
              justo turpis sit amet.
            </p>
          </div>
          <div className="page05person">
            <img src={page01person01} alt="" />
            <div>
              <h5>Fannie Summers</h5>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page05card">
        <div className="page05icon">
          <img src={page05icon} alt="" />
        </div>
        <div className="cardContents">
          <div>
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
            <img src={starFull} alt="a star" />
          </div>
          <div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum
              sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu
              enim ornare dictumst sit amet. Dictum pretium dolor tincidunt
              egestas eget nunc.
            </p>
          </div>
          <div className="page05person">
            <img src={page01person02} alt="" />
            <div>
              <h5>Albert Flores</h5>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page05