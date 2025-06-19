import { useState, type ChangeEvent } from "react";
import vector from "../assets/images/Vector.png";
import eyeclosed from "../assets/images/eyeclosed.png";

interface InputProps {
  type: string;
  placeholder: string;
  labelText: string;
  formId: string;
  selectedCode?: string;
  handleCountryChange?: (e:ChangeEvent<HTMLSelectElement>)=>void;
  countryOptions?: { emoji: string; code: string }[]|undefined;
}
const InputField = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  if (props.type === "tel") {
    return (
      <>
        <label htmlFor={props.formId} className="label">
          {props.labelText} <span className="requried">*</span>
        </label>
        <div className="phone-wrapper">
          <div className="flag-area">
            <select
              className="dropdown"
              value={props.selectedCode}
              onChange={props.handleCountryChange}
            >
              {(props.countryOptions ?? []).map((option) => (
                <option key={option.code} value={option.code}>
                  {option.emoji}
                </option>
              ))}
            </select>
          </div>
          <div className="input-area">
            <span className="fixed-code">{props.selectedCode}</span>

            <input
              type="text"
              id={props.formId}
              placeholder={props.placeholder}
              className="phone-input"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={props.formId} className="label">
        {props.labelText}
      </label>
      <input
        className="password"
        id={props.formId}
        type={props.type === "password" ? (showPassword ? "text" : "password") : props.type}
        placeholder={props.placeholder}
      />
      {props.type === "password" && (
        <span className="eye" onClick={togglePasswordVisibility} role="button">
          <img
            src={showPassword ? eyeclosed : vector}
            alt="toggle visibility"
          />
        </span>
      )}
    </div>
  );
};

export default InputField;
