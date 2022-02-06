import React from "react";
import PropTypes from "prop-types";

import "./style.css"

//we run through each element in children
//and clone it and return it by adding className 'ButtonGroup__item' to each child
const ButtonGroup = ({children}) => {
    return (
        <div
            className="ButtonGroup">
            {React.Children.map(children,(child) => (
                React.cloneElement(
                    child,
                    {className: 'ButtonGroup__item'}
                )
            ))}
        </div>
    )
};

ButtonGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};


export default ButtonGroup;

//in order to add new element to children use React.cloneElement
//as it will work even though you have one child only