import React from "react";
import page05icon from "./assets/images/page05icon.png";
import starFull from "./assets/images/starFull.png";
import page01person01 from "./assets/images/page01person01.png";
import page01person02 from "./assets/images/page01person02.png";
import { useEffect, useState } from "react";

const Page05 = () => {
  const [data, setData] = useState({});

  // Fetches the data on page load, and stores it in data
  let url = "https://win24-assignment.azurewebsites.net/api/testimonials";
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  // Removes any extra page load-created stars, before creating new img elements and appends them to the correct div.
  useEffect(() => {
    if (data[0] != undefined) {
      while (document.getElementById("starDiv0").lastElementChild) {
        document
          .getElementById("starDiv0")
          .removeChild(document.getElementById("starDiv0").lastElementChild);
      }
      let rating = data[0].starRating;

      for (let i = 0; i < rating; i++) {
        var img = document.createElement("img");
        img.src = starFull;
        document.getElementById("starDiv0").appendChild(img);
      }
    }

    if (data[1] != undefined) {
      while (document.getElementById("starDiv1").lastElementChild) {
        document
          .getElementById("starDiv1")
          .removeChild(document.getElementById("starDiv1").lastElementChild);
      }
      let rating = data[1].starRating;

      for (let i = 0; i < rating; i++) {
        img = document.createElement("img");
        img.src = starFull;
        document.getElementById("starDiv1").appendChild(img);
      }
    }
  }, [data]);

  return (
    <div id="page05" className="pages">
      <div id="page05div">
        <div>
          <h1>
            <strong>Clients are Loving Our App</strong>
          </h1>
        </div>
        <div className="page05card">
          <div className="page05icon">
            <img src={page05icon} alt="" />
          </div>
          <div className="cardContents">
            <div id="starDiv0"></div>
            <div>
              <p>
                {/* Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
              sagittis. Laoreet posuere rhoncus, egestas lacus, egestas
              justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes
              justo turpis sit amet. */}
                {data[0] && data[0].comment}
              </p>
            </div>
            <div className="page05person">
              <img src={data[0] && data[0].avatarUrl} alt="" />
              <div>
                <h5>{data[0] && data[0].author}</h5>
                <p>{data[0] && data[0].jobRole}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page05card">
          <div className="page05icon">
            <img src={page05icon} alt="" />
          </div>
          <div className="cardContents">
            <div id="starDiv1"></div>
            <div>
              <p>
                {/* Nunc senectus leo vel venenatis accumsan vestibulum
              sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu
              enim ornare dictumst sit amet. Dictum pretium dolor tincidunt
              egestas eget nunc. */}
                {data[0] && data[1].comment}
              </p>
            </div>
            <div className="page05person">
              <img src={data[0] && data[1].avatarUrl} alt="" />
              <div>
                <h5>{data[0] && data[1].author}</h5>
                <p>{data[0] && data[1].jobRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page05;
