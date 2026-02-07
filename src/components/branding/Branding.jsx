import "./Branding.css"
import rate_img from "../../assets/Frame 10417 (1).png"
import branding_img from "../../assets/AVATAR.png"


const Branding = () => {
  return (
    <div className='branding_container'>
      <div className="branding">
        <div className="branding_logo">
          <h2>Feedbacks</h2>
          <img src={rate_img} alt="img" />
        </div>
        <div className="branding_main_text">
          <div className="branding_texts">
            <div className="branding_text">
              <div className="branding_img">
                <img src={branding_img} alt="" />
              </div>
              <div className="branding_text_text">
                <div className="branding_text_text_anna">
                  <h3>Anna Jean</h3>
                  <p>•</p>
                  <p>Graphic Designer</p>
                  <p>•</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
                <hr />
                <div className="branding_text_text_P">
                  <p>‘’Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper tortor id maecenas pharetra. Dignissim sed vitae tristique risus interdum viverra odio. Et mauris sollicitudin amet sed amet. Urna sed aliquam velit lectus sagittis a aliquam vel. Et mauris sollicitudin.’’</p>
                </div>
              </div>
            </div>
          </div>
          {/* scnd */}
          <div className="branding_texts">
            <div className="branding_text">
              <div className="branding_img">
                <img src={branding_img} alt="" />
              </div>
              <div className="branding_text_text">
                <div className="branding_text_text_anna">
                  <h3>Anna Jean</h3>
                  <p>•</p>
                  <p>Graphic Designer</p>
                  <p>•</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
                <hr />
                <div className="branding_text_text_P">
                  <p>‘’Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper tortor id maecenas pharetra. Dignissim sed vitae tristique risus interdum viverra odio. Et mauris sollicitudin amet sed amet. Urna sed aliquam velit lectus sagittis a aliquam vel. Et mauris sollicitudin.’’</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Branding
