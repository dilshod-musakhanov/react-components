import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";

//using spread operator will help us to add some additional props
//if we forgot to include it like now we add disabled
//but using ...props at the end or at the beginning of the line code will give different results
//it may override the old props

const Button = ({children, mode, size, ...props}) => {
    const className = classnames(
        'Button',
        {
            [`Button--${mode}`]: Boolean(mode),
            [`Button--${size}`]: Boolean(size)
        }
    )
    return <button className={className} {...props}>{children}</button>;
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