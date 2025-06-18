// import { type ChangeEvent } from "react";

// interface PhoneInputProps {
//   selectedCode: string;
//   handleCountryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
//   countryOptions: { emoji: string; code: string }[];
// }

// const PhoneInput = ({
//   selectedCode,
//   handleCountryChange,
//   countryOptions,
// }: PhoneInputProps) => {
//   return (
//     <>
//       <label htmlFor="phone" className="label">
//         Phone Number <span className="requried">*</span>
//       </label>
//       <div className="phone-wrapper">
//         <div className="flag-area">
//           <select
//             className="dropdown"
//             value={selectedCode}
//             onChange={handleCountryChange}
//           >
//             {countryOptions.map((option) => (
//               <option key={option.code} value={option.code}>
//                 {option.emoji}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="input-area">
//           <span className="fixed-code">{selectedCode}</span>
//           <input type="text" id="phone" placeholder="(000) 000-0000" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default PhoneInput;
