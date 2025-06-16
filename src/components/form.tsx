import "../assets/css/register.css";
import top from "../assets/images/top.png";
import sidevideos from "../assets/images/sidevideo.mp4";
import vector from "../assets/images/Vector.png";
import eyeClosed from "../assets/images/eyeclosed.png";
import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Sidevideo from "./Sidevideo";
import Button from "./Button";
import InputField from "./Input";

//import IonIcon from "@reacticons/ionicons";

function Register({ isRegister }: { isRegister: boolean }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string>("+977");

  const countryOptions = [
    { emoji: "🇺🇸", code: "+1" },
    { emoji: "🇬🇧", code: "+44" },
    { emoji: "🇳🇵", code: "+977" },
    { emoji: "🇮🇳", code: "+91" },
  ];

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="box-section">
          <div className="video-section">
            <Sidevideo />
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

              <label htmlFor="phone" className="label">
                Phone Number <span className="requried">*</span>
              </label>
              <div className="phone-wrapper">
                <div className="flag-area">
                  <select
                    className="dropdown"
                    value={selectedCode}
                    onChange={handleCountryChange}
                  >
                    {countryOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.emoji}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-area">
                  <span className="fixed-code">{selectedCode}</span>
                  <input type="text" id="phone" placeholder="(000) 000-0000" />
                </div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <InputField
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter the password"
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
                    <label htmlFor="confirm-password" className="label">
                      Confirm Password
                    </label>

                    <InputField
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter the confirm password"
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
                <Link to={isRegister ? "/" : "/register"}>
                  {isRegister ? " Go back to sign in!" : " Register now!"}
                </Link>
              </p>

              {isRegister ? (
                <Button type="submit" text="Register into account" />
              ) : (
                <Button type="submit" text="Login into account" />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
