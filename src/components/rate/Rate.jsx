import "./Rate.css"
import { DATA } from "../data"
import rate_img from "../../assets/Frame 10417 (1).png"
import rate_img_scnd from "../../assets/BANNER1.png"
import rate_img_crds from "../../assets/mini_logo.png"

const Rate = () => {
  return (
    <div className="rate_container">
      <div className="rate">
        <div className="rate_logo">
          <h2>Top Rated Products</h2>
          <img src={rate_img} alt="img" />
        </div>
        <div className="rate_img_and_text">
          <img src={rate_img_scnd} alt="" />
          <div className="rate_text">
            <div className="rate_cards">
              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>

              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>
              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>


            </div>
            {/* scnd */}
            <div className="rate_cards">
              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>

              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>
              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>


            </div>
                        <div className="rate_cards">
              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>

              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>
              <div className="rate_card">
                <img src={rate_img_crds} alt="img" />
                <div className="rate_card_text">
                  <p className="rate_card_text_paragarf">$55.00  $85.00</p>
                  <p>JBL Bluetooth...</p>
                  <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>

                </div>
              </div>


            </div>

     
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rate
