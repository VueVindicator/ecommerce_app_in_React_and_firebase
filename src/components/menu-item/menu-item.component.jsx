import React from 'react'
import './menu-item.styles.scss'
const MenuItem = ({title}) => (
    <div clasname="menu-item">
        <div className="content">
            <h1 classNametitle>{title}</h1>
            <span classNametitle>Shop now</span>
        </div>
    </div>
)
export default MenuItem