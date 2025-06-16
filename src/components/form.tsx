import "../assets/css/register.css";
import top from "../assets/images/top.png";
import sidevideos from "../assets/images/sidevideo.mp4";
import vector from "../assets/images/Vector.png";
import eyeClosed from "../assets/images/eyeclosed.png";
import { useState } from "react";
//import IonIcon from "@reacticons/ionicons";

function Register({ isRegister }: { isRegister: boolean }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
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
              {isRegister ? (
                <h2>
                  <span className="highlight">Merchant</span> Registration
                </h2>
              ) : (
                <h2>
                  <span className="highlight"> Welcome </span> Back!
                </h2>
              )}

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

              <div className="input-wrapper">
                <label htmlFor="password" className="lable">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="password"
                  className="password"
                  placeholder="Enter the password there"
                />
                <span
                  className="eye"
                  onClick={togglePasswordVisibility}
                  role="button"
                >
                  <img src={showPassword ? eyeClosed : vector} alt="" />
                </span>
              </div>
              {/* Only show Confirm Password on Register page */}
              {isRegister && (
                <>
                  <div className="input-wrapper">
                    <label htmlFor="confirm-password" className="lable">
                      Confirm Password
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm-password"
                      className="password"
                      placeholder="Enter confirm password"
                    />
                    <span
                      className="eye"
                      //onClick={() => setShowConfirmPassword((p) => !p)}
                      onClick={toggleConfirmPasswordVisibility}
                      role="button"
                    >
                      <img
                        src={showConfirmPassword ? eyeClosed : vector}
                        alt="toggle"
                      />
                    </span>
                  </div>
                </>
              )}

              {!isRegister && (
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
              )}

              <p className="register">
                {isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <a href={isRegister ? "/" : "/register"}>
                  {isRegister ? " Go back to sign in!" : " Register now!"}
                </a>
              </p>

              <button type="submit" className="button">
                {isRegister
                  ? "Register into your account"
                  : "Login to your account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
