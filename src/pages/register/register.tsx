import "../../assets/css/register.css";
import top from "../../assets/images/top.png";
import sidevideos from "../../assets/images/sidevideo.mp4";
import vector from "../../assets/images/Vector.png";
import IonIcon from "@reacticons/ionicons";

function Register() {
  return (
    <>
      <div className="container">
        <div className="box-section">
          <div className="video-section">
            <video autoPlay muted loop playsInline>
              <source src={sidevideos} type="video/mp4" />
            </video>
          </div>
          {/* right side section */}
          <div className="form-section">
            <form className="form-container">
              <div className="logo-container">
                <img src={top} alt="" className="form-logo" />
              </div>
              <h2>
                <span className="highlight">Merchant</span> Registration
              </h2>
              <p className="topmessage">
                Enjoy all the feature that make it easy for you to manage your
                finances
              </p>

              <label htmlFor="phone" className="lable">
                Phone Number <span className="requried">*</span>
              </label>
              <div className="phone-wrapper">
                <div className="flag-area">
                  <select name="" id="" className="dropdown">
                    <option value="">🚩</option>
                    <option value="">🏳️</option>
                    <option value="">🇳🇵</option>
                  </select>
                </div>
                <div className="input-area">
                  <span className="fixed-code">+977</span>
                  <input type="text" id="phone" placeholder="(000) 000-0000" />
                </div>
              </div>
              <label htmlFor="password" className="lable">
                Password
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Enter the password there"
                />
                <span className="eye">
                  <img src={vector} alt="" />
                </span>
              </div>

              <label htmlFor="confirm-password" className="lable">
                Confirm Password
              </label>
                     <div className="input-wrapper">
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Enter the confirm password there"
                />
                <span className="eye">
                  <img src={vector} alt="" />
                </span>
              </div>
              <p className="register">
                Alerady have an account? <a href="/">Go back to sign in!</a>
              </p>

              <button type="submit" className="button">
                Register into your account
              </button>
              {/* <IonIcon  name="eye-outline"/> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
