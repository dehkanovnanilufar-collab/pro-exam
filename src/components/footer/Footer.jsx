import "./Footer.css"
import { DATA } from "../data"

import footer_images from "../../assets/CARD INSTAGRAM.png"
import logo2 from "../../assets/LOGO2.png"
import icon_inp from "../../assets/ICON (3).png"

import footer_image from "../../assets/CARD INSTAGRAM1.png"
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_text_and_images">
          <div className="footers_images">
            <img src={footer_images} alt="" />
            <div className="imag">
              <img src={footer_image} alt="" />
            </div>
            <div className="imag">
              <img className="s" src={footer_image } alt="" />
            </div>
            <div className="imag">
              <img className="s" src={footer_image} alt="" />
            </div>
          </div>
          <div className="footer_texts">
            <div className="footer_text">
              <div className="logo">
                <img className="logo_img" src={logo2} alt="image" />
                <h2>{DATA[4].title}</h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ultricies viverra id egestas pharetra fermentum. Lorem ipsum dolor sit amet consectetur. Ultricies viverra id</p>
              <div className="footer_inp">
                <input className="input" type="text" placeholder="Your Email" />
                <button className="footer_inp_btn">Submit</button>
              </div>
              <img className="icon_inp" src={icon_inp} alt="image" />
              <p>Copyright 2023 BESTXTORE. Designed By BZOTech.com</p>
            </div>
            <div className="footer_text  scnd">
              <div className="mini_text">
                <h2>Customer Service</h2>
                <p>My Account</p>
                <p>Payments
                </p>
                <p>Term of Use</p>
                <p>Deliveries & Returns</p>
                <p>Gift Card</p>
                <p>Refund & Returns Policy</p>
                <p>FAQs</p>
              </div>
              <div className="mini_text">
                <h2>About Us</h2>
                <p>Product</p>
                <p>Payments
                </p>
                <p>Term of Use</p>
                <p>Deliveries & Returns</p>
                <p>Gift Card</p>
                <p>Refund & Returns Policy</p>
                <p>FAQs</p>

              </div>
              <div className="mini_text">
                 <h2>Product</h2>
                <p>My Account</p>
                <p>Payments
                </p>
                <p>Term of Use</p>
                <p>Deliveries & Returns</p>
                <p>Gift Card</p>
                <p>Refund & Returns Policy</p>
                <p>FAQs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
