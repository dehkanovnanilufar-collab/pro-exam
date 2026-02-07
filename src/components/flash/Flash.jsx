import "./Flash.css"
import { DATA } from "../data"
import ICOn from "../../assets/ICON SERVICE HOME 1.png"

const Flash = () => {
  return (
    <div className="container">
      <div className="flash">
        <div className="frst_flash">
          <img src={ICOn} alt="" />
          <div className="flash_ps">
            <h2>{DATA[23].p}</h2>
            <p>Capped At $105 Per Order</p>

          </div>
        </div>
        <div className="scnd_flash">
          <img src={ICOn} alt="" />
          <div className="flash_ps">
            <h2 className="scnd_flash_h">{DATA[23].p}</h2>
            <p>Capped At $105 Per Order</p>

          </div>

        </div>
        <div className="frst_flash">
          <img src={ICOn} alt="" />
          <div className="flash_ps">
            <h2>{DATA[23].p}</h2>
            <p>Capped At $105 Per Order</p>

          </div>

        </div>
        <div className="scnd_flash">
          <img src={ICOn} alt="" />
          <div className="flash_ps">
            <h2>{DATA[23].p}</h2>
            <p>Capped At $105 Per Order</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Flash
