import "../assets/css/register.css";
import top from "../assets/images/top.png";
import { use, useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Sidevideo from "./Sidevideo";
import Button from "./Button";
import InputField from "./Input";
// import font from"../assets/css/_font.scss";
// import PhoneInput from "./Phoneinput";

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
      <div className="container border w-100 align-item-center">
        <div className="box-section d-xxl-flex d-md-flex d-sm-flex overflow-hidden ">
          <div className="video-section flex-grow-1 flex-shrink-1">
            <Sidevideo />
          </div>
          {/* right side section */}
          <div className="form-section row align-items-center justify-content-center flex-grow-1 flex-shrink-1 ">
            <form className="form-container w-100 mx-860px">
              <div className="logo-container">
                <img src={top} alt="" className="form-logo w-3.5" />
              </div>
              <h2 className="">
                {isRegister ? (
                  <>
                  
                    <span className="highlight">
                      Merchant
                    </span> Registration
                  </>
                ) : (
                  <>
                    
                    <span className="highlight"> Welcome </span> Back!
                  </>
                )}
              </h2>

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
