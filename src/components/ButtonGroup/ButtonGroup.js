import React from "react";
import PropTypes from "prop-types";

import "./style.css"

const ButtonGroup = ({children}) => {
    return children;
};

ButtonGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ButtonGroup;