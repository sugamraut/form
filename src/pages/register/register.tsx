import "../../assets/css/register.css";
import side from "../../assets/images/side.png";
import top from "../../assets/images/top.png";
import nepal from "../../assets/images/nepal.webp";

function Register() {
  return (
    <>
      <div className="container">
        <div className="box-section">
          <div className="image-section">
            <img src={side} style={{ borderRadius: "20px" }} alt="" />
          </div>
          {/* right side section */}
          <div className="form-section">
            <form className="form-container">
              <div className="logo-container">
                <img
                  src={top}
                  alt=""
                  style={{ display: "flex" }}
                  className="form-logo"
                />
              </div>
              <h2 style={{ display: "flex" }}>
                {" "}
                <span className="highlight">Merchant</span> Registration
              </h2>
              <p style={{ display: "flex" }}>
                Enjoy all the feature that make it easy for you to manage your
                finances
              </p>

              <label
                htmlFor="phone"
                style={{ display: "flex" }}
                className="lable"
              >
                Phone Number <span className="required">*</span>
              </label>
              <div className="phone-wrapper">
                <div className="flag-area">
                  <img src={nepal} alt="Nepal Flag" />
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
                Alerady have an account? <a href="/">Go back to sign in!</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
