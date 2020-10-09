import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.component.scss'

const Header = () => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="shop" className="option">Shop</Link>
            <Link to="contact" className="option">Contact</Link>
        </div>
    </div>
)

export default Header