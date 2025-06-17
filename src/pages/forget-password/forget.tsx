import top from "../../assets/images/top.png";
import "../../assets/css/forget.scss";
import sidevideos from "../../assets/images/sidevideo.mp4";
function Forget() {
  return (
    <>
      <div className="container">
        <div className="box-section">
          <div className="video-section">
            <video autoPlay muted loop playsInline>
              <source src={sidevideos} type="video/mp4" />
            </video>
          </div>
          {/*right side image */}
          <div className="form-section">
            <form className="form-container">
              <div className="logo-container">
                <img
                  src={top}
                  alt=""
                  style={{ display: "flex" }}
                  className="form-logo"
                />
              </div>

              <h2>
                <span>Choose</span>Recovery Process
              </h2>
              <p className="text-area">
                Selected the contact details you prefer for password recovery
              </p>
              <label className="option">
                <input type="radio" name="recovery" value="email" />
                Email
              </label>

              <label className="option">
                <input type="radio" name="recovery" value="phone" />
                Phone number
              </label>
              <button className="button">Next</button>
              <a href="/" className="link">
                ← Back to login{" "}
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
