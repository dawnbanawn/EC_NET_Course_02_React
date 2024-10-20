import React from 'react'
import { useState } from 'react'
import iconTel from "./assets/images/iconTel.png"
import arrowRight from "./assets/images/arrowRight.png"
import iconChat from "./assets/images/iconChat.png"
import arrowRight2 from "./assets/images/arrowRight2.png"
import { useEffect } from 'react'

const Page06 = () => {
  const [data, setData] = useState({})

  // Fetches data and stores it in 'data'
  let url = "https://win24-assignment.azurewebsites.net/api/faq"
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        //console.log(json);
        setData(json)
      } catch (error) {
        console.error(error.message);
      }
    }
    getData()
    
}, []);

    const [accordion, setAccordion] = useState(0)

    // Function to handle accordion button click usestate
    function accFunction(i){
      // Handle if the button is already active or not, 0 is not active
      // conditionals are in the accordion divs
      if(accordion == i){
        setAccordion(0)
      } else {
        setAccordion(i)
      }
    }
      

  return (
    <div id="page06" className="pages" >
        <div id="page06div">
          <div id="page06left">
            <h2><strong>Any questions? Check out the FAQs</strong></h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="page06cardsDiv">
              <div className="page06card">
                <img
                  className="page06image"
                  src={iconTel}
                  alt="telephone"
                />
                <p>Still have questions?</p>
                <div className="page06infocards">
                  <p className="page06infocardsLeft">Contact us</p>
                  <img src={arrowRight} alt="" />
                </div>
              </div>
              <div className="page06card">
                <img
                  className="page06image"
                  src={iconChat}
                  alt="telephone"
                />
                <p>Don't like phone calls?</p>
                <div className="page06infocards">
                  <p className="page06infocardsRight">Contact us</p>
                  <img src={arrowRight2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="page06right">
            {/* <!-- Accordion found and edited from -->
            <!-- https://www.w3schools.com/howto/howto_js_accordion.asp --> */}
            <button className={accordion == 1 ? "accordion" : "accordion active"} onClick={() => accFunction(1)}>
              {/* Is any of my personal information stored in the App? */}
              {data[0] && data[0].title}
            </button>
            <div className="panel" style={accordion == 1 ? ({maxHeight: '500px'}) : ({maxHeight: '0px'})}>
              <p>
                <br />
                {/* Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat. */}
                {data[0] && data[0].content}
              </p>
            </div>
            <button className={accordion == 2 ? "accordion" : "accordion active"} onClick={() => accFunction(2)}>
              {/* What formats can I download my transaction history in? */}
              {data[0] && data[1].title}
            </button>
            <div className="panel" style={accordion == 2 ? ({maxHeight: '500px'}) : ({maxHeight: '0px'})}>
              <p>
                <br />
                {/* Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat. */}
                {data[0] && data[1].content}

              </p>
            </div>
            <button className={accordion == 3 ? "accordion" : "accordion active"} onClick={() => accFunction(3)}>
              {/* Can I schedule future transfers? */}
              {data[0] && data[2].title}
              </button>
            <div className="panel" style={accordion == 3 ? ({maxHeight: '500px'}) : ({maxHeight: '0px'})}>
              <p>
                <br />
                {/* Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat. */}
                {data[0] && data[2].content}

              </p>
            </div>
            <button className={accordion == 4 ? "accordion" : "accordion active"} onClick={() => accFunction(4)}>
              {/* When can I use Banking App services? */}
              {data[0] && data[3].title}
            </button>
            <div className="panel" style={accordion == 4 ? ({maxHeight: '500px'}) : ({maxHeight: '0px'})}>
              <p>
                <br />
                {/* Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat. */}
                {data[0] && data[3].content}

              </p>
            </div>
            <button className={accordion == 5 ? "accordion" : "accordion active"} onClick={() => accFunction(5)}>
              {/* Can I create my own password that is easy for me to remember? */}
              {data[0] && data[4].title}
            </button>
            <div className="panel" style={accordion == 5 ? ({maxHeight: '500px'}) : ({maxHeight: '0px'})}>
              <p>
                <br />
                {/* Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat. */}
                {data[0] && data[4].content}

              </p>
            </div>
            <button className={accordion == 6 ? "accordion" : "accordion active"} onClick={() => accFunction(6)}>
              {/* What happens if I forget or lose my password? */}
              {data[0] && data[5].title}
            </button>
            <div className="panel" style={accordion == 6 ? ({maxHeight: '500px'}) : ({maxHeight: '0px'})}>
              <p>
                <br />
                {/* Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat. */}
                {data[0] && data[5].content}

              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Page06