import React from 'react'
import './button-component'

const Button = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)

export default Button