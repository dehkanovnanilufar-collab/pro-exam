import "./Button.css"
import btn_img_b from "../../assets/BUTTON.png"
import btn_img_b2 from "../../assets/BUTTON1.png"
import btn_imgs from "../../assets/BRANDING.png"
const Button = () => {
    return (
        <div className="button_container">
            <div className="button">
                <div className="btn_img_b">
                    <img className="btn_img_b" src={btn_img_b} alt="" />
                </div>
                <div className="button_images">
                    <img src={btn_imgs} alt="" />
                    <img src={btn_imgs} alt="" />
                    <img src={btn_imgs} alt="" />
                    <img src={btn_imgs} alt="" />
                    <img src={btn_imgs} alt="" />
                    <img src={btn_imgs} alt="" />
                    <img src={btn_imgs} alt="" />
                    <img  src={btn_imgs} alt="" />
                    <img className="btn_images_b" src={btn_img_b2} alt="" />
                </div>
                <div className="btn_img_b2">
                </div>

            </div>
        </div>
    )
}

export default Button
