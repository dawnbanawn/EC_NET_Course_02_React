import React from "react";
import bell from "./assets/images/bell.png";
import { useEffect } from "react";

const Page07 = () => {
  async function fetchMovies() {
    let url = "https://win24-assignment.azurewebsites.net/api/forms/subscribe";
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "bli@blo.com" }),
    };
    const response = await fetch(url, requestOptions);
    // waits until the request completes...
    //console.log(response.status);
    if (response.status == 200) {
      window.alert("You are subscribed!");
    } else {
      window.alert("Something went wrong!");
    }
  }

  function subButton() {
    let inputValue = document.getElementById("inputText").value;

    const validateEmail = (inputValue) => {
      return String(inputValue)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (validateEmail(inputValue) == null) {
      window.alert("Please enter a valid email adress");
    } else {
      fetchMovies();
    }
    // Check if there is any value at all
    // if (!inputValue.value){
    //   window.alert("Please enter an email adress");
    // } else {

    // }
  }

  // useEffect(() => {
  //   let button = document.getElementById("subscribeButtonId")
  //   button.addEventListener("click", () => {
  //     fetchMovies()
  //   });
  // }, []);

  return (
    <div id="page07" className="pages">
      <div id="page07div">
        <div id="page07left">
          <img src={bell} alt="" />
          <h5>
            <strong>
              Subscribe to our newsletter to stay informed about latest updates
            </strong>
          </h5>
        </div>
        <div id="page07right">
          <input id="inputText" type="text" placeholder="&#xf003; Your email" />
          <div
            className="subscribeButton"
            onClick={() => subButton()}
            id="subscribeButtonId"
          >
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page07;
