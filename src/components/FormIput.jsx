"use client"

import { useState } from "react";
import Styles from "./FormInput.module.css";

const FormInput = (props) => {
    const {onChange, id,  errorMessage, ...inputs} = props;
    const [focused, setFocused] = useState(false);

    const handleFocused = (e) => {
      setFocused(true);
    }
  
    return (
    <div className={Styles.FormInput}>
        <input className="w-full p-2 outline-none border-b border-green-500 font-fontInput" 
        {...inputs}
        onChange={onChange}
        onBlur={handleFocused}
        onFocus={() => {
          inputs.name === "confirmpassword" && setFocused(true)
        }}
        focused={focused.toString()}
        />
        <span className="text-2xl font-bold">{errorMessage}</span>
    </div>
  )
}

export default FormInput