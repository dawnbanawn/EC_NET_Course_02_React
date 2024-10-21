import React from "react";
import home from "./assets/images/bx-home-alt.png";
import right from "./assets/images/bx-chevrons-right.png";
import blueArrow from "./assets/images/icon-r.png";
import mail from "./assets/images/icon_mail.png";
import people from "./assets/images/icon_people.png";

const Page09 = () => {

 // post request with the input value
 async function send(fullName, email, specialist) {
  let url = "https://win24-assignment.azurewebsites.net/api/forms/contact";
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName: fullName, email: email, specialist: specialist }),
  };
  const response = await fetch(url, requestOptions);

  if (response.status == 200) {
    window.alert("Your message has been sent!");
    document.getElementById("nameInput").value = ""
    document.getElementById("emailInput").value = ""
    document.getElementById("selectInput").value = "1"
  } else {
    window.alert("Something went wrong!");
  }
}

// Button that validates the input value before calling fetch function.
function buttonClick() {
  let fullName = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let specialist = document.getElementById("selectInput").value;

//console.log(name, mail, specialist)
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if (validateEmail(email) == null) {
    window.alert("Please enter a valid email adress");
  } else if (fullName.length < 2 || typeof fullName != "string"){
    window.alert("Please enter a valid name with atleast 2 characters");
    
  } else {
      send(fullName, email, specialist);
  }

}




  return (
    <div id="page09" >
      <div id="page09div">
        <div id="section01">
          <div id="section01Left">
              <div id="section01container">
            <div id="section01Left01">
              <img src={home} alt="" />
              <p>Homepage</p>
              <img src={right} alt="" />
              <p>Contact</p>
            </div>
            <div id="section01Left02">
              <h1>Contact Us</h1>
            </div>
            <div id="section01Left03">
              <div id="section01Left03Up">
                <div id="section01Left03UpLeft">
                  <img src={mail} alt="" />
                </div>
                <div id="section01Left03UpRight">
                  <h3>Email us</h3>
                  <p>
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                  <div className="oneRow">
                    <p>Leave a message</p>
                    <img src={blueArrow} alt="" />
                  </div>
                </div>
              </div>
              <div id="section01Left03Down">
                <div id="section01Left03DownLeft">
                  <img src={people} alt="" />
                </div>
                <div id="section01Left03DownRight">
                  <h3>Careers</h3>
                  <p>
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                  <div className="oneRow">
                    <p>Send an application</p>
                    <img src={blueArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div id="section01Right">
            <div id="section01RightDiv">
              <div id="section01RightDivContainer">
              <h3>Get Online Consultation</h3>
              <form>
              <div className="form-group">
                <label htmlFor="nameInput">Full name</label>
                <input id="nameInput" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input id="emailInput" type="email" className="form-control" />
              </div>
              <label htmlFor="selectInput">Specialist</label>

              <select id="selectInput" className="form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <button id="button" type="button" onClick={() => buttonClick()} className="btn btn-primary">Submit</button>
              </form>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page09;
