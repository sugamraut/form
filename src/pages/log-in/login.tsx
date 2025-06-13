import "../../assets/css/login.css";
import logoImage from "../../assets/images/top.png";
import sidevideos from "../../assets/images/sidevideo.mp4";
import vector from "../../assets/images/Vector.png";

function Login() {
  return (
    <div className="container">
      <div className="box-section">
        {/* Left Image Section */}
        <div className="video-section">
          <video autoPlay muted loop playsInline>
            <source src={sidevideos} type="video/mp4" />
          </video>
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <form className="form-container">
            {/* Logo at top */}
            <div className="logo-container ">
              <img src={logoImage} alt="Logo" className="form-logo" />
            </div>

            <h2>
              <span className="highlight"> Welcome </span> Back!
            </h2>
            <p className="topmessage">
              Enjoy all the features that make it easy for you to manage your
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
               <span className="requried">*</span>
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
           

            <div className="form-extras">
              <div className="remember-wrap">
                <label className="switch">
                  <input type="checkbox" id="toggleSwitch" />
                  <span className="slider"></span>
                </label>
                <span className="statusText">Remember me</span>
              </div>

              <a href="/forget" className="forget-link">
                Forgot Password?
              </a>
            </div>
            <p className="register">
              Don't have an account? <a href="/register">Register</a>
            </p>
            <button type="submit" className="button">
              Login into your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
