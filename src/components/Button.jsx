import React from 'react'

const Button = ({ text, color, bgColor, borderRadius, size }) => {
    return (
        <button type='button'
            style={{ color, borderRadius, backgroundColor: bgColor }}
            className={`text-${size} hover:drop-shadow-xl p-3`}
        >
            {text}
        </button>
    )
}

export default Button