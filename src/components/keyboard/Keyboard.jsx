import "./Keyboard.css"
import { DATA } from "../data"

const Keyboard = () => {
  return (
    <div className='keyboard_container'>
      <div className="keyboard">
        <div className="keybord_div">
          <div className="keyboard_text">
            <div className="keyboard_t">
              <p>{DATA[47].p}</p>
              <h2>{DATA[48].title}</h2>
              <button>Shop Now</button>

            </div>
          </div>
        </div>
        <div className="keybord_div">
          <div className="keyboard_text">
            <div className="keyboard_t">
              <p>{DATA[47].p}</p>
              <h2>{DATA[48].title}</h2>
              <button>Shop Now</button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Keyboard
