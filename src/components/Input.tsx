import { useState } from "react";
import vector from "../assets/images/Vector.png";
import eyeclosed from "../assets/images/eyeclosed.png";

interface Iinput {
  type: string;
  placeholder: string;
  labelText: string;
  formId: string;
}
interface InputProps {
  type: string;
  placeholder: string;
  labelText: string;
  formId: string;
  isPhone?: boolean;
  selectedCode?: string;
  handleCountryChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  countryOptions?: { emoji: string; code: string }[];
}
// const InputField = ({ type, placeholder, labelText, formId }: Iinput) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="input-wrapper">
//       <label htmlFor={formId} className="label">
//         {labelText}
//       </label>
//       <input
//         className="password"
//         id={formId}
//         type={type === 'password' ? !showPassword ? "password" : 'text' : type}
//         placeholder={placeholder}
//       />
//       {type === 'password' && 
//             <span className="eye" onClick={togglePasswordVisibility} role="button">
//         <img src={showPassword ? eyeclosed : vector} alt="" />
//       </span>
//       }

//     </div>
//   );
// };
const InputField = ({
  type,
  placeholder,
  labelText,
  formId,
  isPhone = false,
  selectedCode = "+1",
  handleCountryChange,
  countryOptions = [],
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

   if (isPhone) {
    return (
      <>
        <label htmlFor={formId} className="label">
                {labelText} <span className="requried">*</span>
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
          
          <input
            type="text"
            id={formId}
            placeholder={placeholder}
            className="phone-input"
          />
        </div>
      </div>
      </>
    );
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={formId} className="label">
        {labelText}
      </label>
      <input
        className={type === "password" ? "password" : ""}
        id={formId}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
      />
      {type === "password" && (
        <span className="eye" onClick={togglePasswordVisibility} role="button">
          <img src={showPassword ? eyeclosed : vector} alt="toggle visibility" />
        </span>
      )}
    </div>
    
  );
};

export default InputField
