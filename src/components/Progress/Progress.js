import React from "react";
import PropTypes from "prop-types";

import "./style.css"

//we may omit return as this is a simple expression can return immediately
const Progress = ({percent}) => (
        <div className="Progress">
            <div className="Progress__percent" style={{ width: `${percent}%`}}/>
        </div>
);

Progress.propTypes = {
    percent: PropTypes.number.isRequired,
}
export  default Progress;