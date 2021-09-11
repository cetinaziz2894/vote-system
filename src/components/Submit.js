import React from 'react'
import { FaPlus } from "react-icons/fa";
import '../styles/submit.css';

export default function Submit({goTo}) {
    return (
        <div className="submit-div" onClick={()=>goTo('/add') }>
            <div className="icon">
                <FaPlus />
            </div>
            <div className="link">
                <p>SUBMIT A LINK</p>
            </div>
        </div>
    )
}
