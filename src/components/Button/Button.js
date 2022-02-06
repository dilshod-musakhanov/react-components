import React from "react";
import "./style.css";

const Button = ({children, mode}) => {
    let className = "";

    switch (mode) {
        case "secondary": {
            className = "Button--secondary";
            break;
        }
        case "success": {
            className = "Button--success";
            break;
        }
        case "primary": {
            className = "Button--primary";
            break;
        }
        default: {
            break;
        }
    }
    return <button className={`Button ${className}`}>{children}</button>;
};

export default Button;