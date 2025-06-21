import top from "../../assets/images/top.png";
import "../../assets/css/forget.scss";
import Sidevideo from "../../components/Sidevideo";

function Forget() {
  return (
    <>
      <div className="container-fluid">
        <div className="box-section  d-xxl-flex d-md-flex d-sm-flex overflow-hidden">
          <div className="video-section flex-grow-1 flex-shrink-1">
            <Sidevideo/>
          </div>
          {/*right side image */}
          <div className="form-section row align-items-center justify-content-center flex-grow-1 flex-shrink-1">
            <form className="form-container w-100">
              <div className="logo-container">
                <img
                  src={top}
                  alt=""
                  style={{ display: "flex" }}
                  className="form-logo"
                />
              </div>

              <h2 className="title">
                <span>Choose</span>Recovery Process
              </h2>
              <p className="topmessage">
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
              <button className="button w-100">Next</button>
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
