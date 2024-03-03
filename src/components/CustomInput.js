import React from 'react'

function CustomInput(props) {
    const {
        type,
        name,
        className,
        placeholder
    } = props
    return (
        <div>
            <input
                type={type}
                name={name}
                className={`form-control ${className}`}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CustomInput