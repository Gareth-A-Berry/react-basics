import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './style.css'

const GoogleIcon = (props) => {
    return (
        <button className="icon__button">
            <FaGoogle
                style={{
                    height: '2rem',
                    width: '2rem',
                    color: 'gray'
                }}
            />
        </button>
    )
}

export default GoogleIcon