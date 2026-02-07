import { DATA } from "../data"
import bacground from "../../assets/BACKGROUND.png"
import "./Banner.css"
import apple from "../../assets/ICON (2).png"


const Banner = () => {
  return (
    <div className='container'>
      <div className="banner">
        <img className="bacg" src={bacground} alt="image" />
        <div className="banner_text">
          <img src={apple} alt="" />
          <p>{DATA[15].p}</p>
          <h2>{DATA[16].h2}</h2>
          <p>{DATA[17].p}</p>
          <div className="banner_ps">
            <p>{DATA[18].p}</p>
            <p>{DATA[19].p}</p>
            <p>{DATA[20].p}</p>

          </div>
          <div className="banner_btns">
            <button className="frst_btn">{DATA[21].p}</button>
            <button className="scnd_btn">{DATA[22].p}</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
