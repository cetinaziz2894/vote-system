import React from 'react'
import Header from './Header'
import "../styles/main.css";

export default function Main(props) {
    return (
        <div className="container">
            <Header />
            {props.children}   
        </div>
    )
}
