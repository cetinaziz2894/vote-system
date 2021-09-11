import React, { useState } from 'react'
import "../styles/card.css";
import { FaArrowDown, FaArrowUp, FaMinusCircle } from "react-icons/fa";

export default function Card() {
    
    const [showDeleteButton, setShowDeleteButton] = useState();
    
    return (
            <div className="card" onMouseEnter={() => setShowDeleteButton(true)} onMouseLeave={() =>  setShowDeleteButton(false)}>
                <div className="point">
                    <p>6</p>
                    <p>POINTS</p>
                </div>
                <div className="text">
                    <div className="name">Hacker News</div>
                    <p className="link">www.test.com</p>
                    <div className="vote">
                        <div className="up-vote" onClick={()=> console.log("Artır")}>
                            <FaArrowUp />
                            <p>Up Vote</p>
                        </div>
                        <div className="down-vote"  onClick={()=> console.log("Azalt")}>
                            <FaArrowDown />
                            <p>Down Vote</p>
                        </div>
                    </div>
                </div>
                
                <div className="delete-icon" style={{visibility:showDeleteButton ? "inherit" : "hidden"}}>
                        <FaMinusCircle onClick={() => console.log("girdi")}/>
                    </div>
            </div>
    )
}
