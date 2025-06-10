import side from "../../assets/images/side.png";
import top from "../../assets/images/top.png";
import "../../assets/CSS/forget.css";
function Forget() {
  return (
    <>
      <div className="forget-conitner">
        <div className="forget-box">
          <div className="image-form">
            <img src={side} alt="" style={{ borderRadius: "20px" }} />
          </div>
          {/*ridht side image */}
          <div className="form">
            <form className="forgrt-from">
              <div className="container">
                <div className="logo">
                  <img
                    src={top}
                    alt=""
                    style={{ display: "flex" }}
                    className="form-lo"
                  />
                </div>

                <h2>
                  <span style={{ color: "#1a2d7d" }}>Choose</span>Recovery
                  Process
                </h2>
                <p>
                  Selected the contact details you prefer for password recovery
                </p>
                <label className="option">
                    <input type="radio" name="recovery" value="email"/>
                  Email
                </label>

                <label className="option">
                  <input type="radio" name="recovery" value="phone" />
                  Phone number
                </label>
                <button>Next</button>
                <a href="/">← Back to login </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
