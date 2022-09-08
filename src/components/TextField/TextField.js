import React from "react";
import { TextInput } from "./styles";

const TextField = ({ label, inputProps, onChange, value }) => {
   
    return (
        <div>
            <label>{label}</label>
            <TextInput 
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextField;