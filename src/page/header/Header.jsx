import "./Header.css"
import logo from "../../assets/LOGO.png"
import icon from "../../assets/ICON (2).png"
import search from "../../assets/SEARCH.png"
import map from "../../assets/MAP MARKER.png"
import {DATA} from "../data"
const Header = () => {
    return (
        <div className="container">
            <header>
                <div className="frst_header">
                    <div className="frst_h2">
                        {/* <i><FaEnvelope /></i> */}
                        <p>{DATA[0].title}</p>
                        <p>{DATA[1].p}</p>
                        <div className="snd_h">
                            <p>{DATA[2].paragraf}</p>
                            <p className="snd_scn_p">{DATA[3].p}</p>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="scnd_header">
                    <div className="logo">
                        <img src={logo} alt="image" />
                        <h2>{DATA[4].title}</h2>
                    </div>
                    <div className="input">
                        <input className="input_inp" type="text" placeholder="  Search.." />
                        <img className="search" src={search} alt="" />
                    </div>
                    <img className="icons" src={icon} alt="" />
                </div>
                <div className="thrd_header">
                    <div className="text_header">
                        <div className="all">
                            <p>{DATA[6].p}</p>
                            {/* <p><FaAngleDown /></p> */}
                        </div>
                        <nav>
                            <ul>
                                <p className="nav_ul_p">
                                    {DATA[7].p}
                                </p>
                                <p>
                                    {DATA[8].p}
                                </p>
                                <p>
                                    {DATA[9].p}
                                </p>
                                <p>
                                    {DATA[10].p}
                                </p>
                                <p>
                                    {DATA[11].p}
                                </p>
                                <p>
                                    {DATA[12].p}
                                </p>

                                <p>
                                    {DATA[13].p}
                                </p>

                            </ul>
                        </nav>

                    </div>


                    <div className="stores">
                        <img className="stores_img" src={map} alt="" />
                        <p>{DATA[14].p}</p>

                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header
