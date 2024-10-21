import map from "./assets/images/map.png";
import icon_position from "./assets/images/icon_position.png";
import icon_clock from "./assets/images/icon_clock.png";
import icon_phone from "./assets/images/icon_phone.png";
import icon_fb from "./assets/images/icon_fb.png";
import icon_twitter from "./assets/images/icon_twitter.png";
import icon_insta from "./assets/images/icon_insta.png";
import icon_youtube from "./assets/images/icon_youtube.png";


const Page10 = () => {
  return (
    <div id="page10">
      <div id="page10div">
        <div id="page10section01">
          <div id="page10section01Left">
            <img src={map} alt="" />
          </div>
          <div id="page10section01Right">
            <div id="page10section01RightUp">
              <h3>Medical Center 1</h3>
            </div>
            <div className="rowOne">
              <img src={icon_position} alt="" />
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>

            <div className="rowTwo">
              <img src={icon_phone} alt="" />
              <p>(406) 555-0120</p>
            </div>
            <div className="rowThree">
              <img src={icon_clock} alt="" />
              <div className="times">
                <p>
                  <b>Mon – Fri:</b>9:00 am – 22:00 am
                </p>
                <p>
                  <b>Sat – Sun:</b>9:00 am – 20:00 am
                </p>
              </div>
            </div>
            <div id="page10section01RightDown">
              <h3>Medical Center 2</h3>
            </div>
            <div className="rowOne">
              <img src={icon_position} alt="" />
              <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
            </div>

            <div className="rowTwo">
              <img src={icon_phone} alt="" />
              <p>(406) 544-0123</p>
            </div>
            <div className="rowThree">
              <img src={icon_clock} alt="" />
              <div className="times">
                <p>
                  <b>Mon – Fri:</b>9:00 am – 22:00 am
                </p>
                <p>
                  <b>Sat – Sun:</b>9:00 am – 20:00 am
                </p>
              </div>
            </div>
            <div id="page10section01RightBottom">
              <img src={icon_fb} alt="" />
              <img src={icon_twitter} alt="" />
              <img src={icon_insta} alt="" />
              <img src={icon_youtube} alt="" />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page10;
