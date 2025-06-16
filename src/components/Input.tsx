import { useState } from "react";
import vector from "../assets/images/Vector.png";
import eyeclosed from "../assets/images/eyeclosed.png";

interface Iinput {
  type: string;
  placeholder: string;
  labelText: string;
  formId: string;
}
const InputField = ({ type, placeholder, labelText, formId }: Iinput) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={formId} className="label">
        {labelText}
      </label>
      <input
        className="password"
        id={formId}
        type={type === 'password' ? !showPassword ? "password" : 'text' : type}
        placeholder={placeholder}
      />
      {type === 'password' && 
            <span className="eye" onClick={togglePasswordVisibility} role="button">
        <img src={showPassword ? eyeclosed : vector} alt="" />
      </span>
      }

    </div>
  );
};

export default InputField;
