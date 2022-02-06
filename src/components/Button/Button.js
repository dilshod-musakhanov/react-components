import React from "react";
import "./style.css";

const Button = ({children, mode}) => {
    let className = "";
    if (mode) {
        className = `Button--${mode}`
    }
    return <button className={`Button ${className}`}>{children}</button>;
};

export default Button;