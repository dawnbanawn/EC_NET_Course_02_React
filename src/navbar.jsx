import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import main_shape from "./assets/images/main_shape.png"
const Navbar = () => {

    // hook for keeping track of light/dark theme
    const [theme, setTheme] = useState('light')
    // Function called by toggle to change data-theme variables in index.css
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark': 'light';
        setTheme(newTheme)
        if (newTheme == 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark');
        } else {
        document.documentElement.setAttribute('data-theme', 'light');
        }
    }

  return (
    
    <nav id="navbar">
          <div id="leftNav">
            <div id="navLogo">
              <img src={main_shape} alt="" />
              <h5><strong>Silicon</strong></h5>
            </div>
            
            <div id="navFeatures">
            <Link to="/">Features</Link>
            <Link to="/contact">Contact</Link>

            </div>
          </div>
          <div id="rightNav">
            <div id="navModes">
              <span> Dark Mode </span>
              <div className="form-check form-switch">
                <input
                onClick={() => switchTheme()}
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
  )
}

export default Navbar