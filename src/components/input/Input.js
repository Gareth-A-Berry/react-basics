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
            onChange={(e) => props.onChange({field: props.field, value:e.target.value})}
            value={props.value}
        />
        <label htmlFor={props.label} className="input__label">{props.label}</label>
        </div>
    )
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
}

Input.defaultProps = {
    type: 'input',
}


export default Input