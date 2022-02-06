import React, {useState} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css"

const ButtonGroup = ({children}) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(1);
    return (
        <div className="ButtonGroup">
            {React.Children.map(children,(child, i) => (
                React.cloneElement(
                    child,
                    {
                        className: classnames('ButtonGroup__item', {'ButtonGroup__item--active': activeButtonIndex === i}),
                        onClick: () => {
                            setActiveButtonIndex(i);
                            console.log(activeButtonIndex);
                        }
                    }
                )
            ))}
        </div>
    )
};

ButtonGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};


export default ButtonGroup;

