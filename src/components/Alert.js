import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setAlert } from '../actions'
import '../styles/alert.css'

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeAlert: (alert) => dispatch(setAlert(alert)),
    }
}

const Alert = ({onChangeAlert, alert}) => {
    useEffect(() => {
        const timer = setTimeout(() => onChangeAlert({val:!alert.val, name:'', type:''}), 300);
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        {
            alert?.val && <div className="alert">
            <p><b>{alert.name.toUpperCase()}</b> {alert.type}</p>
        </div>
        }
        </>
    )
}

export default connect(null, mapDispatchToProps)(Alert);
