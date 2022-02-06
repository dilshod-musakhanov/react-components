import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Button = ({children, mode, size}) => {
    let className = "";
    className += ` Button--${mode}`;
    className += ` Button--${size}`;
    return <button className={`Button${className}`}>{children}</button>;
}

Button.defaultProps = {
    mode: 'primary',
    size: 'normal'
}

Button.propTypes = {
    mode: PropTypes.oneOf(['primary', 'secondary', 'success']),
    size: PropTypes.oneOf(['normal', 'small', 'large'])
}
export default Button;