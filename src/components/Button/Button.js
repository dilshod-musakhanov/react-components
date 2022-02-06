import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";

const Button = ({children, mode, size, className, counter, ...props}) => {
    const classNames = classnames(
        'Button',
        {
            [`Button--${mode}`]: Boolean(mode),
            [`Button--${size}`]: Boolean(size),
        },
        className,
    );
    return (
        <button className={classNames} {...props}>
            {children}
            {typeof counter === 'number' && <span className='Button__counter'>{counter}</span>}
        </button>
    );
};

Button.defaultProps = {
    mode: 'primary',
    size: 'normal',
    className: '',
    counter: null,
}

Button.propTypes = {
    mode: PropTypes.oneOf(['primary', 'secondary', 'success']),
    size: PropTypes.oneOf(['normal', 'small', 'large']),
    className: PropTypes.string,
    counter: PropTypes.number,
}
export default Button;

/*
//if there is value in counter span will be shown
{counter ? <span className={'Button__counter'}>{counter}</span> : null}
or
{counter && <span className='Button__counter'>{counter}</span>}

//but if there is number 0 then it will not be shown
//as 0 is considered to be false
//so the solution is below
{typeof counter === 'number' && <span className='Button__counter'>{counter}</span>}

//if you expect not boolean value then
{Boolean(counter) && <span className='Button__counter'>{counter}</span>}
 */