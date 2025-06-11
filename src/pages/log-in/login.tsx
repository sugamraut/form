import "../../assets/css/login.css";
import logoImage from "../../assets/images/top.png";
import nepal from "../../assets/images/nepal.webp";
import sidevideos from "../../assets/images/sidevideo.mp4";

function Login() {
  return (
    <div className="container">
      <div className="box-section">
        {/* Left Image Section */}
        <div className="image-section">
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
                  <option> </option>
                </select>
              </div>
              <div className="input-area">
                <span className="fixed-code">+977</span>
                <input type="text" id="phone" placeholder="(000) 000-0000" />
              </div>
            </div>
            <label
              htmlFor="password"
              style={{ color: "black", display: "flex" }}
            >
              Password <span className="requried">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <div className="form-extras">
              <label>
                <input
                  type="checkbox"
                  style={{ color: "black" }}
                  id="toggleSwitch"
                />{" "}
                Remember me
              </label>
              <a href="/forget">Forgot Password?</a>
            </div>

            <button type="submit">Login into your account</button>
            <p className="register">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
