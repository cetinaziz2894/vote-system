import React from 'react';
import Logo from '../assets/img/hepsiburada-logo.png'
import '../styles/header.css';
export default function Header() {
    return (
        <div className="header">
            <img className="image" src={Logo} alt="logo" />
            <div className="text">
                <p>Link</p>
                <p>VOTE</p>
                <p>Challenge</p>
            </div>
        </div>
    )
}
