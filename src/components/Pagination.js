import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../styles/pagination.css';

export default function Pagination() {
    return (
        <div className="pagination">
            <div className="prev">
                <FaAngleLeft />
            </div>
            <div className="pages">
                <p>1</p>
                <p className="boxed-page" onClick={() => console.log("girdi")}>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <div className="next">
                <FaAngleRight />
            </div>
        </div>
    )
}
