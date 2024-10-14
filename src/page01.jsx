import React from 'react'
import main_shape from "./assets/images/main-shape.png"
const page01 = () => {
  return (
    <div id="page01" className="pages">
        <nav id="navbar">
          <div id="leftNav">
            <div id="navLogo">
              <img src={main_shape} alt="" />
              <h5><strong>Silicon</strong></h5>
            </div>
            <div id="navFeatures">
              <p>Features</p>
            </div>
          </div>
          <div id="rightNav">
            <div id="navModes">
              <span> Dark Mode </span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div id="navSignIn">
              <div id="signInButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                  />
                </svg>
                <p>Sign in/up</p>
              </div>
            </div>
          </div>
        </nav>
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
                <img src="./images/googleplay.png" alt="google play image" />
                <img src="./images/appstore.png" alt="appstore image" />
              </div>
            </div>
            <div id="nextButtonDiv">
              <div id="nextButton">
                <img src="./images/chevron.png" alt="" />
              </div>
              <p>Discover more</p>
            </div>
          </div>

          <div id="heroRight">
            <img src="./images/01.png" alt="" />
          </div>
        </div>
      </div>
  )
}

export default page01