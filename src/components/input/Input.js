import React from 'react';
import PropTypes from 'prop-types';

import './style.css'
const Input = (props) => {
    return (
        <div className="input__container">
        <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
        />
        <label for={props.label} className="input__label">{props.label}</label>
        </div>
    )
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
}

Input.defaultProps = {
    type: 'input'
}


export default Input