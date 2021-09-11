import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router';
import AddForm from '../components/AddForm';
import Main from '../components/Main'
import "../styles/add.css";

export default function AddPage() {

    const history = useHistory();

    function goToHandler(item) {
        history.push(item);
    }

    return (
        <Main>
            <div className="form-container">
                <div className="return">
                    <div onClick={() =>goToHandler('/') }><FaArrowLeft /> <span>Return to List</span></div>
                </div>
                <AddForm />
            </div>
        </Main>
    )
}
