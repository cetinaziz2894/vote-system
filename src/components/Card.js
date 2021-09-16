import React, { useState } from 'react'
import "../styles/card.css";
import { FaArrowDown, FaArrowUp, FaMinusCircle } from "react-icons/fa";
import { connect } from 'react-redux';
import { deleteItem, downVoteItem, upVoteItem } from '../actions';
import Modal from './Modal';

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => dispatch(deleteItem(id)),
        onUpVoteClick: (id) => dispatch(upVoteItem(id)),
        onDownVoteClick: (id) => dispatch(downVoteItem(id))
    }
}

const Card = ({id, name, link, point, onUpVoteClick, onDownVoteClick, alert}) => {
    const [show, setShow] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState();
    return (<>            
            <div className="card" onMouseEnter={() => setShowDeleteButton(true)} onMouseLeave={() =>  setShowDeleteButton(false)}>
                <div className="point">
                    <p>{point}</p>
                    <p>POINTS</p>
                </div>
                <div className="text">
                    <div className="name">{name}</div>
                    <p className="link">{link}</p>
                    <div className="vote">
                        <div className="up-vote" onClick={() => onUpVoteClick(id)}>
                            <FaArrowUp />
                            <p>Up Vote</p>
                        </div>
                        <div className="down-vote"  onClick={() => onDownVoteClick(id)}>
                            <FaArrowDown />
                            <p>Down Vote</p>
                        </div>
                    </div>
                </div>
                
                <div className="delete-icon" style={{visibility:showDeleteButton ? "inherit" : "hidden"}}>
                        <FaMinusCircle onClick={() => setShow(true)} />
                    </div>
            </div>
            <Modal title="My Modal" onClose={() => setShow(false)} show={show} name={name} id={id} alert={alert} >
          </Modal></>
    )
}
export default connect(null, mapDispatchToProps)(Card);