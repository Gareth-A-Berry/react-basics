import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import './style.css'
const TwitterIcon = (props) => {
    return (
        <button className="icon__button">
        <FaTwitter
            style={{
                height: '2rem',
                width: '2rem',
                color: 'gray'
            }}
        />
        </button>
    )
}

export default TwitterIcon