import React from "react";
import "./style.css";

const Button = (prop) => {
    const text =prop.text;

    return <button>{text}</button>;
};

export default Button;