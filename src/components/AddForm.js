import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { addItem, setAlert } from '../actions';
import "../styles/form.css";
import Alert from './Alert';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (item) => {
            dispatch(addItem(item));
        },
        onChangeAlert: (alert) => dispatch(setAlert(alert))
    }
}
const mapStateToProps = (state) => {
    return {
        alert:state.alert
    }
}

const AddForm = ({onSubmit,onChangeAlert, alert}) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const history = useHistory();

    const submit = (item) => {
        onSubmit(item);
        onChangeAlert({val:!alert.val, name:item.name, type:'added.'});
    }

    return (
        <div className="add-form">
            {
                (alert.val && alert.type === 'added.') && <Alert alert={alert}/>
            }
            <h2 className="title">Add New Link</h2>
            <div className="form" onSubmit={e => { 
                        e.preventDefault();
                        const id = new Date().valueOf().toString();
                        submit({
                            id,
                            name,
                            link
                        });
                        setLink('');
                        setName('');
                        setTimeout(()=>history.push("/"),300)
                    }}>
                <form>
                    <div className="form-control">                
                        <label> Link Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label>Link URL:</label>
                        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <input className="submit-btn" type="submit" value="ADD" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);