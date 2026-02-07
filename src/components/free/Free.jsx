import { DATA } from "../data"
import "./Free.css"
import free_img from "../../assets/Frame 10417 (1).png"
import product from "../../assets/PRODUCT.png"
import colour from "../../assets/COLOR.png"
import sold from "../../assets/SOLD.png"
const Free = () => {
  return (
    <div className='container'>
      <div className="Free">
        <div className="free_icon">
          <h2>{DATA[24].title}</h2>
          <img src={free_img} alt="" />
        </div>
        <div className="crds_free ">
          <div className="free_crd">
            <div className="free_crd_img"><img src={product} alt="" /></div>
            <div className="free_crd_text">
              <div className="free_crd_frst_text">
                <p>{DATA[25].p}</p>
                <p>{DATA[26].p}</p>
                <img src={colour} alt="" />
                <p>⭐⭐⭐⭐    12 Reviews</p>
              </div>
              <div className="free_crd_scnd_text ">
                <img src={sold} alt="" />
                <div className="free_divs">
                  <div className="div_1">
                    <div className="div">
                      <p className="div_parag">02</p>
                    </div>
                    <p>Days</p>
                  </div>
                  <div className="div_1">
                    <div className="div"><p className="div_parag">23</p></div>
                    <p>  Hour</p>
                  </div>
                  <div className="div_1">
                    <div className="div">
                      <p className="div_parag">14</p>
                    </div>
                    <p>Mins</p>
                  </div>
                  <div className="div_1">
                    <div className="div">
                      <p className="div_parag">56</p>
                    </div>
                    <p>Secs</p>

                  </div>

                </div>
                <button className="Free_btn">{DATA[30].p}</button>

              </div>
            </div>
          </div>
          {/*  */}
          <div className="free_crd s">
            <div className="free_crd_img"><img src={product} alt="" /></div>
            <div className="free_crd_text">
              <div className="free_crd_frst_text">
                <p>{DATA[25].p}</p>
                <p>{DATA[26].p}</p>
                <img src={colour} alt="" />
                <p>⭐⭐⭐⭐    12 Reviews</p>
              </div>
              <div className="free_crd_scnd_text">
                <img src={sold} alt="" />
                <div className="free_divs">
                  <div className="div_1">
                    <div className="div">
                      <p className="div_parag">02</p>
                    </div>
                    <p>Days</p>
                  </div>
                  <div className="div_1">
                    <div className="div"><p className="div_parag">23</p></div>
                    <p>  Hour</p>
                  </div>
                  <div className="div_1">
                    <div className="div">
                      <p className="div_parag">14</p>
                    </div>
                    <p>Mins</p>
                  </div>
                  <div className="div_1">
                    <div className="div">
                      <p className="div_parag">56</p>
                    </div>
                    <p>Secs</p>

                  </div>
                </div>
                <button className="Free_btn">{DATA[30].p}</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Free
