import sideimage from "../../assets/images/side.png";
import top from "../../assets/images/top.png";
import "../../assets/css/forget.css";
function Forget() {
  return (
    <>
      <div className="container">
        <div className="box-section">
          <div className="image-section">
            <img src={sideimage} alt="" />
          </div>
          {/*right side image */}
          <div className="form-section">
            <form className="">
              <div className="logo-container">
                <img
                  src={top}
                  alt=""
                  style={{ display: "flex" }}
                  className="form-logo"
                />
              </div>

              <h2>
                <span style={{ color: "#1a2d7d" }}>Choose</span>Recovery Process
              </h2>
              <p>
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
              <button>Next</button>
              <a href="/">← Back to login </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
