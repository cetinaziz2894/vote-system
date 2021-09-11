import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../actions';
import "../styles/form.css";

export default function AddForm() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    
    useEffect(() => {
        console.log(list);
        setId(0);
    }, [list])

    console.log(id)

    return (
        <div className="add-form">
            <h2 className="title">Add New Link</h2>
            <div className="form">
                <form>
                    <div className="form-control">                
                        <label> Link Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label>Link URL:</label>
                        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div className="form-control"
                    onClick={() => {
                        if (!link && !name) return;
                        console.log(link, name, id)
                        dispatch(addItem(link,name,id));
                        setLink('');
                        setName('');
                      }
                        }>
                        <input className="submit-btn" type="button" value="ADD" />
                    </div>
                </form>
            </div>
        </div>
    )
}
