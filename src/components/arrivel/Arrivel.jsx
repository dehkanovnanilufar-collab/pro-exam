import "./Arrivel.css"
import bacground2 from "../../assets/BACKGROUND2.png"
import { DATA } from "../data"
const Arrivel = () => {
  return (
    <div className='arrivel_categories'>
      <div className="arrivel">
        <img className="bacgk" src={bacground2} alt="" />
         <div className="arrivel_text">
          <h2 className="big_one">
            {DATA [38].title}
          </h2>
          <h2 >
            {DATA [39].title}
          </h2>
         </div>
         <div className="texts_arrivel">
          <p>{DATA[40].p}</p>
          <h2>{DATA [41].p}</h2>
          <p>{DATA [42].p}</p>
          <div className="divs">
            <div className="small_btn">Sale up to 60%</div>
            <div className="small_btn">Sale up to  $259.00</div>
          </div>
         <button>Shop Now</button>
         </div>
      </div>
    </div>
  )
}

export default Arrivel
