import React from "react";
import "./style.css";

//we use destructive method to extract property(text) from object (prop)
//and bind it to variable
const Button = ({text}) => {
    return <button>{text}</button>;
};

export default Button;