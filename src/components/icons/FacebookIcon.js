import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import './style.css'

const FaceBookIcon = (props) => {
    return (
        <button className="icon__button">
            <FaFacebook
                style={{
                    height: '2rem',
                    width: '2rem',
                    color: 'gray'
                }}
            />
        </button>
    )
}

export default FaceBookIcon