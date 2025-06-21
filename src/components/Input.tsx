import { useState, type ChangeEvent } from "react";
import vector from "../assets/images/Vector.png";
import eyeclosed from "../assets/images/eyeclosed.png";

interface InputProps {
  type: string;
  placeholder: string;
  labelText: string;
  formId: string;
  selectedCode?: string;
  handleCountryChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  countryOptions?: { emoji: string; code: string }[];
}
const InputField = ({
  type,
  placeholder,
  labelText,
  formId,
  selectedCode,
  handleCountryChange,
  countryOptions = [],
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
   const [inputValue, setInputValue] = useState("");
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  if (type === "text") {
    return (
      <>
        <label
          htmlFor={formId}
          className="label fs-0.5 fst-normal fw-normal lh-base "
        >
          {labelText} <span className="required text-danger ">*</span>
        </label>
        <div className="phone-wrapper d-flex align-item-center w-100">
          <div className="flag-area  align-item-center">
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
          <div className="input-area d-flex w-100">
            <span className="fixed-code">{selectedCode}</span>

            <input
              type="text"
              id={formId}
              placeholder={placeholder}
              className="phone-input w-100 "
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="input-wrapper ">
      <label htmlFor={formId} className="label">
        {labelText}
      </label>
      <div className="input-group">
        <input
          className="password w-100"
          style={{borderRadius:'12px'}}
          id={formId}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
           value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        {type === "password" && inputValue && (
          <span
            className="eye position-absolute top-50 "
            onClick={togglePasswordVisibility}
            role="button"
          >
            <img
              src={showPassword ? eyeclosed : vector}
              alt="toggle visibility"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
