import "./Categories.css"
import { DATA } from "../data"
import categories_img from "../../assets/Frame 10417 (1).png"
const Categories = () => {
    return (
        <div className='categories_container'>
            <div className="categories">
                <div className="categories_logo">
                    <h2>{DATA[31].title}</h2>
                    <img src={categories_img} alt="img" />
                </div>
                <div className="categories_cards">
                    <div className="card_categorie">
                        <div className="crds">
                            <div className="img"></div>
                            <div className="crd_text">
                                <p className="crd_text_p1">{DATA[32].p}</p>
                                <p>{DATA[33].p}</p>
                                <p>{DATA[34].p}</p>
                                <p>{DATA[35].p}</p>
                                <p>{DATA[36].p}</p>
                                <span>{DATA[37].p}</span>
                            </div>

                        </div>

                        <div className="crds s">
                            <div className="img"></div>
                            <div className="crd_text">
                                <p className="crd_text_p1">{DATA[32].p}</p>
                                <p>{DATA[33].p}</p>
                                <p>{DATA[34].p}</p>
                                <p>{DATA[35].p}</p>
                                <p>{DATA[36].p}</p>
                                <span>{DATA[37].p}</span>
                            </div>

                        </div>
                        <div className="crds s">
                            <div className="img"></div>
                            <div className="crd_text">
                                <p className="crd_text_p1">{DATA[32].p}</p>
                                <p>{DATA[33].p}</p>
                                <p>{DATA[34].p}</p>
                                <p>{DATA[35].p}</p>
                                <p>{DATA[36].p}</p>
                                <span>{DATA[37].p}</span>
                            </div>

                        </div>

                    </div>
                    {/* second */}
                    <div className="card_categorie">
                        <div className="crds">
                            <div className="img"></div>
                            <div className="crd_text">
                                <p className="crd_text_p1">{DATA[32].p}</p>
                                <p>{DATA[33].p}</p>
                                <p>{DATA[34].p}</p>
                                <p>{DATA[35].p}</p>
                                <p>{DATA[36].p}</p>
                                <span>{DATA[37].p}</span>
                            </div>

                        </div>

                        <div className="crds s">
                            <div className="img"></div>
                            <div className="crd_text">
                                <p className="crd_text_p1">{DATA[32].p}</p>
                                <p>{DATA[33].p}</p>
                                <p>{DATA[34].p}</p>
                                <p>{DATA[35].p}</p>
                                <p>{DATA[36].p}</p>
                                <span>{DATA[37].p}</span>
                            </div>

                        </div>
                        <div className="crds s">
                            <div className="img"></div>
                            <div className="crd_text">
                                <p className="crd_text_p1">{DATA[32].p}</p>
                                <p>{DATA[33].p}</p>
                                <p>{DATA[34].p}</p>
                                <p>{DATA[35].p}</p>
                                <p>{DATA[36].p}</p>
                                <span>{DATA[37].p}</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Categories
