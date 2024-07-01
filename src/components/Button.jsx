import React from 'react'

const Button = ({ text, bgHoverColor, icon, color, bgColor, borderRadius, size, onClick, width }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
        >
            {icon} {text}
        </button>
    )
}

export default Button