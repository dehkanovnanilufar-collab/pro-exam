import "./Apple.css"
import apple_img from "../../assets/BACKGROUND(4).png"
import { DATA } from "../data"
const Apple = () => {
  return (
    <div className="apple_container">
      <div className="apple">
        <img className="apple_img" src={apple_img} alt="" />
        <div className="apple_texts">
          <div className="apple_text">
            <h2>{DATA[50].title}</h2>
            <p>{DATA[51].p}</p>
            <p>{DATA[52].p}</p>
            <p>{DATA[53].p}</p>
          </div>
          <div className="apple_text">
            <p>{DATA[54].p}</p>
            <h2>{DATA[55].title}</h2>
            <p>{DATA[56].p}</p>
             <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apple
