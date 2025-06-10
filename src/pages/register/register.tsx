import "../../assets/CSS/Register.css";
import side from "../../assets/images/side.png";
import top from "../../assets/images/top.png";
import nepal from "../../assets/images/nepal.webp";

function Register() {
  return (
    <>
      <div className="register-continer">
        <div className="register-box">
          <div className="image-section">
            <img src={side} style={{ borderRadius: "20px" }} alt="" />
          </div>
          {/* right side section */}
          <div className="form-sec">
            <form className="register-form">
              <div className="logo-cont">
                <img
                  src={top}
                  alt=""
                  style={{ display: "flex" }}
                  className="form-log"
                />
              </div>
              <h2 style={{ display: "flex" }}>
                {" "}
                <span className="highlig">Merchant</span> Registration
              </h2>
              <p style={{display:"flex"}}>
                Enjoy all the feature that make it easy for you to manage your
                finances
              </p>

              <label
                htmlFor="phone"
                style={{ color: "black", display: "flex" }}
              >
                Phone Number <span className="required">*</span>
              </label>
              <div className="input-with-prefix">
                <img src={nepal} alt="" className="flag-icon" />
                <span className="prefix">+977</span>

                <input type="tel" id="phone" placeholder="(000) 000-0000" />
              </div>
              <label
                htmlFor="password"
                style={{ color: "black", display: "flex" }}
              >
                password
              </label>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Enter the password there"
              />
              <label
                htmlFor="confirm-password"
                style={{ color: "black", display: "flex" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Enter the confirm password"
              />

              <button type="submit">Register into your account</button>
              <p className="register">
                Alerady have an account?{" "}
                <a href="/">Go back to sign in!</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
