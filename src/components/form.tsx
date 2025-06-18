import "../assets/css/register.css";
import top from "../assets/images/top.png";
import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Sidevideo from "./Sidevideo";
import Button from "./Button";
import InputField from "./Input";
import PhoneInput from "./Phoneinput";

//import IonIcon from "@reacticons/ionicons";

function Register({ isRegister }: { isRegister: boolean }) {
  const [selectedCode, setSelectedCode] = useState<string>("+977");

  const countryOptions = [
    { emoji: "🇺🇸", code: "+1" },
    { emoji: "🇬🇧", code: "+44" },
    { emoji: "🇳🇵", code: "+977" },
    { emoji: "🇮🇳", code: "+91" },
  ];
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

              {/* <PhoneInput
                selectedCode={selectedCode}
                handleCountryChange={handleCountryChange}
                countryOptions={countryOptions}
              /> */}
              <InputField
                  formId="phone"
                  labelText="Phone Number"
                  type="text"
                  placeholder="(000) 000-0000"
                  isPhone={true}
                  selectedCode={selectedCode}
                  handleCountryChange={handleCountryChange}
                  countryOptions={countryOptions}
                />

{/* 
              <InputField
                formId="password"
                labelText="Password"
                type="password"
                placeholder="Enter the password"
              /> */}
              <InputField
  formId="password"
  labelText="Password"
  type="password"
  placeholder="Enter your password"
/>



              {/* Only show Confirm Password on Register page */}
              {isRegister && (
                <>
                  <InputField
                    formId="confirm_password"
                    labelText="confirm password"
                    type="password"
                    placeholder="Enter the confirm password"
                  />
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
