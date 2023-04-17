import React from "react";
import "./style.scss";
import { cn } from "../../utils/cn";
import PropTypes from 'prop-types';

function Button({children, className="", size="medium"}) {
    return (
        <button className={cn("button", className, size)}>{children}</button>
);
}

Button.propTypes = {
    children: PropTypes.any,
    class: PropTypes.string,
    size: PropTypes.oneOf("small","medium","large")
}

export default Button