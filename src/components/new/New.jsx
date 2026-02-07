import "./New.css"
import { DATA } from "../data"
import categories_img from "../../assets/Frame 10417 (1).png"
import new_img from "../../assets/IMG.png"
import news_img from "../../assets/IMG (1).png"
import news_imgs from "../../assets/IMG(3).png"
const New = () => {
  return (
    <div className="new_container">
      <div className="new">
        <div className="new_img">
          <h2>{DATA[43].title}</h2>
          <img src={categories_img} alt="" />
        </div>
        <div className="new_cards">
          <div className="cards_new">
            <div className="crd_new">
              <img src={new_img} alt="" />
              <h2>{DATA[44].p}</h2>
              <p>{DATA[45].p}</p>
              <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>
            </div>

            <div className="crd_new">
              <img src={news_img} alt="" />
              <h2>{DATA[44].p}</h2>
              <p>{DATA[45].p}</p>
              <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>
            </div>
            <div className="crd_new s">
              <img src={news_img} alt="" />
              <h2>{DATA[44].p}</h2>
              <p>{DATA[45].p}</p>
              <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>
            </div>

          </div>
          {/* scnd */}
          <div className="cards_new">
            <div className="crd_new">
              <img src={news_img} alt="" />
              <h2>{DATA[44].p}</h2>
              <p>{DATA[45].p}</p>
              <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>
            </div>

            <div className="crd_new">
              <img src={news_imgs} alt="" />
              <h2>{DATA[44].p}</h2>
              <p>{DATA[45].p}</p>
              <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>
            </div>
            <div className="crd_new s">
              <img src={news_imgs} alt="" />
              <h2>{DATA[44].p}</h2>
              <p>{DATA[45].p}</p>
              <p>⭐⭐⭐⭐⭐{DATA[46].p}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default New
